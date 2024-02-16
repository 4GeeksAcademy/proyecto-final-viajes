const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			users: [],
			paises: [],
			ciudades: [],
			rutas: [],
			misRutas: [],
			tours: [],
			token: ""
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
			getRutas: async () => {
				try {
					const res = await fetch(`${process.env.BACKEND_URL}ruta`)
					const data = await res.json()
					setStore({rutas: data})
				} catch (error) {
					return error
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
					setStore({misRutas: data})
				} catch (error) {
					return error
				}
			},
			crearPais: () => {
				let token = localStorage.getItem("token")
				// headers: {
				// 	Authorization: "Bearer " + token
				// }
			}
		}
	}
};

export default getState
