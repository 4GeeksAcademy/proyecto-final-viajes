import React, { useContext, useEffect } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";

export const MisRutas = () => {
	const userId = localStorage.getItem("id")
	const {store, actions} = useContext(Context)

	useEffect(() => {
		actions.getMisRutas(userId)
	}, [])
	return (
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
									<input type="checkbox" id="check" className="border border-3 "/>
								</div>
							</div>
						</div>
					))}
			</div>
		</div>
	);
};
