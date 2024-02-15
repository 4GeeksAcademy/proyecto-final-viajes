const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			users: [],
			paises: [],
			ciudades: [],
			rutas: [],
			misRutas: [],
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
					console.log(data)
					setStore({token: data.token})
				} catch (error) {
					return error
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
					const data = await res.json()
					console.log(data)
					setStore({token: data.token})
				} catch (error) {
					return error
				}
			}
		}
	}
};

export default getState
