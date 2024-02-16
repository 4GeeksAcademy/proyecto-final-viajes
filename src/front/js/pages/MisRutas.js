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
				
				<div className="col-4 d-flex RUTA">
					<div className="card bg-black">
						<img src="https://media.istockphoto.com/id/1285957020/es/foto/explosi%C3%B3n-de-una-bombilla-el%C3%A9ctrica-tradicional-disparo-tomado-a-alta-velocidad.jpg?s=612x612&w=0&k=20&c=TC2l24YAi38mV1AYLAX0vVz3GLJPqop8b_g_ZUD-DyM=" className="card-img-top border border-white " alt="fotico" />
						<div className="card-body">
							<h5 className="card-title text-center text-light">PLAZA MAYOR, Madrid, España</h5>
							<p className="card-text text-light pt-4">Distancia: </p>
							<p className="card-text text-light">Tiempo: </p>
							<input type="checkbox" id="check" className="border border-3 "/>
						</div>
					</div>
				</div>

				{/* <div className="col-4 d-flex RUTA">
					<div className="card bg-black">
						<img src="https://media.istockphoto.com/id/1285957020/es/foto/explosi%C3%B3n-de-una-bombilla-el%C3%A9ctrica-tradicional-disparo-tomado-a-alta-velocidad.jpg?s=612x612&w=0&k=20&c=TC2l24YAi38mV1AYLAX0vVz3GLJPqop8b_g_ZUD-DyM=" className="card-img-top border border-white" alt="fotico" />
						<div className="card-body">
							<h5 className="card-title text-center text-light">PLAZA MAYOR, Madrid, España</h5>
							<p className="card-text text-light pt-4">Distancia: </p>
							<p className="card-text text-light">Tiempo: </p>
						</div>
					</div>
				</div>
				<div className="col-4 d-flex RUTA">
					<div className="card bg-black">
						<img src="https://media.istockphoto.com/id/1285957020/es/foto/explosi%C3%B3n-de-una-bombilla-el%C3%A9ctrica-tradicional-disparo-tomado-a-alta-velocidad.jpg?s=612x612&w=0&k=20&c=TC2l24YAi38mV1AYLAX0vVz3GLJPqop8b_g_ZUD-DyM=" className="card-img-top border border-white" alt="fotico" />
						<div className="card-body">
							<h5 className="card-title text-center text-light">PLAZA MAYOR, Madrid, España</h5>
							<p className="card-text text-light pt-4">Distancia: </p>
							<p className="card-text text-light">Tiempo: </p>
						</div>
					</div>
				</div> */}
			</div>
		</div>
	);
};
