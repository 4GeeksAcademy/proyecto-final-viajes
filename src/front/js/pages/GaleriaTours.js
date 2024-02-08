import React from "react";
import "../../styles/home.css";

export const GaleriaTours = () => {

	return (
		<div className="bg-black">

			{/* SERVICIOS */}
			<p className="RUTAS menu text-light">RUTAS DISPONIBLES</p>

			<div className="d-flex justify-content-end px-5 mx-5">
				<p className="ordenar bg-light">
					<i class="fa-solid fa-list"></i>
					ORDENAR
				</p>
			</div>

			<div className="card-group row menu mx-auto py-5">
				<div className="col-4 d-flex RUTA">
					<div className="card bg-black">
						<img src="https://media.istockphoto.com/id/1285957020/es/foto/explosi%C3%B3n-de-una-bombilla-el%C3%A9ctrica-tradicional-disparo-tomado-a-alta-velocidad.jpg?s=612x612&w=0&k=20&c=TC2l24YAi38mV1AYLAX0vVz3GLJPqop8b_g_ZUD-DyM=" className="card-img-top border border-white " alt="fotico" />
						<div className="card-body">
							<h4 className="card-title text-center text-light">PLAZA MAYOR</h4>
							<p className="card-text text-light pt-4">Distancia: </p>
							<p className="card-text text-light">Tiempo: </p>

						</div>
					</div>
				</div>

				<div className="col-4 d-flex RUTA">
					<div className="card bg-black">
						<img src="https://media.istockphoto.com/id/1285957020/es/foto/explosi%C3%B3n-de-una-bombilla-el%C3%A9ctrica-tradicional-disparo-tomado-a-alta-velocidad.jpg?s=612x612&w=0&k=20&c=TC2l24YAi38mV1AYLAX0vVz3GLJPqop8b_g_ZUD-DyM=" className="card-img-top border border-white" alt="fotico" />
						<div className="card-body">
							<h4 className="card-title text-center text-light">PLAZA MAYOR</h4>
							<p className="card-text text-light pt-4">Distancia: </p>
							<p className="card-text text-light">Tiempo: </p>
						</div>
					</div>
				</div>
				<div className="col-4 d-flex RUTA">
					<div className="card bg-black">
						<img src="https://media.istockphoto.com/id/1285957020/es/foto/explosi%C3%B3n-de-una-bombilla-el%C3%A9ctrica-tradicional-disparo-tomado-a-alta-velocidad.jpg?s=612x612&w=0&k=20&c=TC2l24YAi38mV1AYLAX0vVz3GLJPqop8b_g_ZUD-DyM=" className="card-img-top border border-white" alt="fotico" />
						<div className="card-body">
							<h4 className="card-title text-center text-light">PLAZA MAYOR</h4>
							<p className="card-text text-light pt-4">Distancia: </p>
							<p className="card-text text-light">Tiempo: </p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
