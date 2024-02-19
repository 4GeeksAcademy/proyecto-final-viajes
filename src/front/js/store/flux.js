const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			users: [],
			paises: [],
			ciudades: [],
			rutas: [],
			misRutas: [],
			tours: [],
			token: "",
			mercadoPago: {},
			ciudadesyPaises:[]
		},
		actions: {
			// Use getActions to call a function within a fuction
			getUsers: async () => {
				try {
					const res = await fetch(`${process.env.BACKEND_URL}users`)
					const data = await res.json()
					setStore({users: data})
				} catch (error) {
					return error
				}
			},
			createUser: async (datos) => {
				try {
					const res = await fetch(`${process.env.BACKEND_URL}users`, {
						method: 'POST',
						body: JSON.stringify(datos),
						headers: {
							"Content-Type": "application/json"
						}
					})
					const data = await res.json()
					return true
				} catch (error) {
					console.log(error)
					return false
				}
			},
			getPaises: async () => {
				try {
					const res = await fetch(`${process.env.BACKEND_URL}paises`)
					const data = await res.json()
					setStore({paises: data})
				} catch (error) {
					return error
				}
			},
			getCiudades: async () => {
				try {
					const res = await fetch(`${process.env.BACKEND_URL}ciudad`)
					const data = await res.json()
					setStore({ciudades: data})
				} catch (error) {
					return error
				}
			},
			getCiudadesyPaises: async () => {
				try {
					const res = await fetch(`${process.env.BACKEND_URL}ciudades`)
					const data = await res.json()
					setStore({ciudadesyPaises: data})
				} catch (error) {
					return error
				}
			},
			getRutas: async () => {
				try {
					const res = await fetch(`${process.env.BACKEND_URL}ruta`)
					const data = await res.json()
					setStore({rutas: data})
				} catch (error) {
					return error
				}
			},
			eliminarRuta: async (id_ruta) => {
				let token = localStorage.getItem("token")
				try {
					const res = await fetch(process.env.BACKEND_URL + "ruta/" + id_ruta, {
						method: 'DELETE',
						headers: {
							"Authorization": "Bearer" + token
						}
					})
					const data = await res.json()
					return data
				} catch (error) {
					onsole.log(error)
				}
			},
			getRutasPorCiudad: async (id_ciudad) => {
				try {
					const res = await fetch(`${process.env.BACKEND_URL}tour_por_ciudad/${id_ciudad}`)
					const data = await res.json()
					setStore({tours: data})
				} catch (error) {
					return error
				}
			},
			getCiudadPorPais: async (pais) => {
				try {
					const res = await fetch(process.env.BACKEND_URL + "ciudad_por_pais/" + pais)
					const data = await res.json()
					console.log(data)
					setStore({ciudades: data})
				} catch (error) {
					return error
				}
			},
			eliminarCiudad: async (idCiudad) => {
				let token = localStorage.getItem("token")
				try {
					const res = await fetch(process.env.BACKEND_URL + "ciudad/" + idCiudad, {
						method: 'DELETE',
						headers: {
							"Authorization": "Bearer " + token
						}
					})
					const data = await res.json()
					return data
				} catch (error) {
					console.log(error)
				}
			},
			login: async (email, password) => {
				const body = {
					email: email,
					password: password
				}
				try {
					const res = await fetch(process.env.BACKEND_URL + "login", {
						method: 'POST',
						body: JSON.stringify(body),
						headers: {
							"Content-Type": "application/json"
						}
					})
					if(res.status == 200) {
						const data = await res.json()
					localStorage.setItem("token", data.token)
					localStorage.setItem("id", data.id)
					localStorage.setItem("rol", data.rol)
					localStorage.setItem("nombre", data.nombre)
					setStore({token: data.token})
					return true
					}
				} catch (error) {
					console.log(error)
					return false
				}
			},
			agregarMisRutas: async (id_ruta, id_usuario) => {
				try {
					const res = await fetch(`${process.env.BACKEND_URL}por_visitar/${id_usuario}`, {
						method: 'POST',
						body: JSON.stringify({
							id_ruta: id_ruta
						}),
						headers: {
							"Content-Type": "application/json"
						}
					})
					const data = await res.json()
					return data
				} catch (error) {
					return error
				}
			},
			getMisRutas: async (id_usuario) => {
				try {
					const res = await fetch(`${process.env.BACKEND_URL}por_visitar/${id_usuario}`)
					const data = await res.json()
					if(res.status === 200) {
						setStore({misRutas: data})
					}else {
						setStore({error: true})
					}
				} catch (error) {
					console.log(error)
				}
			},
			deleteMiRuta: async (id_ruta, id_usuario) => {
				try {
					const res = await fetch(`${process.env.BACKEND_URL}mis_rutas/${id_ruta}/${id_usuario}`, {
						method: 'DELETE'
					})
					const data = await res.json()
					getActions().getMisRutas(id_usuario)
					return data
				} catch (error) {
					console.log(error)
				}
			},
			crearPais: async (nombre) => {
				let token = localStorage.getItem("token")
				try {
					const res = await fetch(`${process.env.BACKEND_URL}paises`, {
						method: 'POST',
						body: JSON.stringify({
							nombre_de_pais: nombre
						}),
						headers: {
							"Content-Type": "application/json",
							"Authorization": "Bearer " + token
						}
					})
					const data = await res.json()
					return data
				} catch (error) {
						console.log(error)
				}
				// headers: {
				// 	Authorization: "Bearer " + token
				// }
			},
			eliminarPais: async (idPais) => {
				let token = localStorage.getItem("token")
				const res = await fetch(process.env.BACKEND_URL + "paises/" + idPais, {
					method: 'DELETE',
					headers: {
						"Authorization": "Bearer " + token
					}
				})
				const data = await res.json()
				return data
			},
			mercadoPago: async (plan) => {
				try {
					const res = await fetch(`${process.env.BACKEND_URL}preference`, {
						method: 'POST',
						body: JSON.stringify({
							plan: plan
						}),
						headers: {
							"Content-Type": "application/json"
						}
					})
					const data = await res.json()
					console.log(data)
					setStore({mercadoPago: data})
				} catch (error) {
					console.log(error)
				}
			}
		}
	}
};

export default getState
