import React, { useContext, useEffect } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import Swal from 'sweetalert2'

export const MisRutas = () => {
	const userId = localStorage.getItem("id")
	const { store, actions } = useContext(Context)
	const token = localStorage.getItem("token")

	const handleDelete = (id) => {
		Swal.fire({
			title: "¿Estás seguro que deseas eliminar esta ruta?",
			text: "¡Esta acción no se puede revertir!",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Eliminar"
		}).then((result) => {
			if (result.isConfirmed) {
				actions.deleteMiRuta(id, userId)
			Swal.fire({
				title: "Deleted!",
				text: "Your file has been deleted.",
				icon: "success"
			});
			}
	  });
	  window.location.reload()
	}

	useEffect(() => {
		actions.getMisRutas(userId)
	}, [])

	if(token) {
		return (
			store.error ?
				<div className="bg-black pt-5" style={{"height": "100vh"}}>
					<h1 className="text-light text-center w-75 mx-auto">MIS RUTAS</h1>
					<h2 className="text-light text-center my-5 w-75 mx-auto">Todavia no hay nada aqui</h2>
					<h4 className="text-light text-center my-5 w-75 mx-auto">Agrega rutas desde la página de tours, accede a ella desde el buscador de la página de inicio</h4>
				</div> :
				<div className="bg-black">
					{/* SERVICIOS */}
					<p className="RUTAS menu text-light">MIS RUTAS</p>
					<div className="card-group row menu mx-auto py-5">
						{store.misRutas.map((ruta, index) => (
							<div key={index} className="col d-flex RUTA">
								<div className="card bg-black">
									<img src={ruta.imagen} className="card-img-top border border-white " alt="fotico" />
									<div className="card-body">
										<h5 className="card-title text-center text-light">{ruta.nombre_de_ruta}</h5>
										<p className="card-text text-light pt-4">Distancia: {ruta.distancia}</p>
										<p className="card-text text-light">Tiempo: {ruta.tiempo_de_recorrido}</p>
										<div className="d-flex justify-content-around">
											<input type="checkbox" id="check" className="border border-3 mx-0" />
											<button onClick={() => handleDelete(ruta.id_ruta)} className="btn btn-outline-danger border border-0">
												<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#fff" className="bi bi-trash" viewBox="0 0 16 16">
													<path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
													<path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
												</svg>
											</button>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div> 
		);
	}else {
		window.location.replace("https://ideal-memory-qwq5w5556vv2xqpj-3000.app.github.dev/")
	}
};
