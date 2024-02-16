import React from "react";
import "../../styles/home.css";
import Jumbotron from "../component/Jumbotron";

export const InicioBusqueda = () => {

	return (
		<div className="bg-black">
			<div className="container-fluid">
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
				
				<div className="card-group row menu mx-5 py-5">

					<div className="col d-flex servicio1">
						<div className="card bg-black">
							<img src="https://i.ibb.co/3c5BNGH/pexels-monstera-production-7412098.jpg" className="card-img-top border border-2 border-white rounded-1" alt="fotico" />
							<div className="card-body">
								<h5 className="card-title text-light">BUSCA</h5>
								<p className="card-text text-light">El pais y la ciudad de tu preferencia.</p>
							</div>
						</div>
					</div>

					<div className="col d-flex servicio2">
						<div className="card bg-black">
							<img src="https://i.ibb.co/jGbxYZ7/pexels-andrea-piacquadio-826349.jpg" className="card-img-top border border-2 border-white rounded-1" alt="fotico" />
							<div className="card-body">
								<h5 className="card-title text-light">ELIGE O GUARDA</h5>
								<p className="card-text text-light">Entre una serie de tours preestablecidos para garantizar tu comodidad.</p>
							</div>
						</div>
					</div>

					<div className="col d-flex servicio3">
						<div className="card bg-black">
							<img src="https://i.ibb.co/0J1BtSW/pexels-andrea-piacquadio-837129.jpg" className="card-img-top border border-2 border-white" alt="fotico" />
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

					<div className="col border border-3 border-white mx-5 redondeado my-5">
						<div className="bg-black text-light text-center mes redondeado">
							1 MES
						</div>
						<div className="bg-white text-center mensualidad rounded-bottom">
							1,99 $ / AL MES
						</div>
					</div>
					<div className="col border border-3 border-white mx-5 redondeado my-5">
						<div className="bg-black text-light text-center mes redondeado">
							3 MESES
						</div>
						<div className="bg-white text-center mensualidad rounded-bottom">
							4,99 $ / AL MES
						</div>
					</div>
					<div className="col border border-3 border-white mx-5 redondeado my-5">
						<div className="bg-black text-light text-center mes redondeado">
							1 AÑO
						</div>
						<div className="bg-white text-center mensualidad rounded-bottom">
							19,99 $ / AL MES
						</div>
					</div>

				</div>
			</div>
		</div>
	);
};