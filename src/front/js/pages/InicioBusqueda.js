import React from "react";
import "../../styles/home.css";
import Jumbotron from "../component/Jumbotron";

export const InicioBusqueda = () => {

	return (
		<div className="bg-black">
			{/* BUSQUEDA */}
			<Jumbotron />


			{/* HOMBRE CAMINANDO */}
			<figure className="text-center py-5">
				<i className="fa-solid fa-person-walking text-light display-2"></i>
				<blockquote className="blockquote text-light py-4">
					<p className="menu">"Hacemos tu viaje mas interesante"</p>
				</blockquote>
			</figure>

			{/* SERVICIOS */}
			<p className="servicios menu text-light">SERVICIOS</p>


			<div className="card-group row menu mx-auto py-5">
				<div className="col-4 d-flex servicio1">
					<div className="card bg-black">
						<img src="https://img.freepik.com/fotos-premium/busqueda-datos_441797-9884.jpg" className="card-img-top border border-white " alt="fotico" />
						<div className="card-body">
							<h5 className="card-title text-light">BUSCA</h5>
							<p className="card-text text-light">El pais y la ciudad de tu elección.</p>
						</div>
					</div>
				</div>

				<div className="col-4 d-flex servicio2">
					<div className="card bg-black">
						<img src="https://img.freepik.com/vector-premium/concepto-forma-eleccion_165488-2881.jpg" className="card-img-top border border-white" alt="fotico" />
						<div className="card-body">
							<h5 className="card-title text-light">ELIGE O GUARDA</h5>
							<p className="card-text text-light">Entre una serie de tours preestablecidos para tu comodidad.</p>
						</div>
					</div>
				</div>
				<div className="col-4 d-flex servicio3">
					<div className="card bg-black">
						<img src="https://blogs.incarail.com/hubfs/tips-para-disfrutar-tus-vacaciones.jpg" className="card-img-top border border-white" alt="fotico" />
						<div className="card-body">
							<h5 className="card-title text-light">DISFRUTA</h5>
							<p className="card-text text-light">Y pasa un excelente viaje!</p>
						</div>
					</div>
				</div>
			</div>

			{/* PLANES */}
			<p className="servicios menu text-light">PLANES</p>

			<div className="container-fluid row menu ">

				<div className="col-3 border border-3 border-white mx-5 redondeado my-5">
					<div className="bg-black text-light text-center mes redondeado">
						1 MES
					</div>
					<div className="bg-white text-center mensualidad rounded-bottom">
						1,99 $ / AL MES
					</div>
				</div>
				<div className="col-3 border border-3 border-white mx-5 redondeado my-5">
					<div className="bg-black text-light text-center mes redondeado">
						3 MESES
					</div>
					<div className="bg-white text-center mensualidad rounded-bottom">
						4,99 $ / AL MES
					</div>
				</div>
				<div className="col-3 border border-3 border-white mx-5 redondeado my-5">
					<div className="bg-black text-light text-center mes redondeado">
						1 AÑO
					</div>
					<div className="bg-white text-center mensualidad rounded-bottom">
						19,99 $ / AL MES
					</div>
				</div>
				
			</div>
		</div>
	);
};