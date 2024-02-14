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
						<img src="https://media.istockphoto.com/id/1285957020/es/foto/explosi%C3%B3n-de-una-bombilla-el%C3%A9ctrica-tradicional-disparo-tomado-a-alta-velocidad.jpg?s=612x612&w=0&k=20&c=TC2l24YAi38mV1AYLAX0vVz3GLJPqop8b_g_ZUD-DyM=" className="card-img-top border border-white " alt="fotico" />
						<div className="card-body">
							<h5 className="card-title text-center text-light">ORGANIZAMOS</h5>
							<p className="card-text text-light">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
						</div>
					</div>
				</div>

				<div className="col-4 d-flex servicio2">
					<div className="card bg-black">
						<img src="https://media.istockphoto.com/id/1285957020/es/foto/explosi%C3%B3n-de-una-bombilla-el%C3%A9ctrica-tradicional-disparo-tomado-a-alta-velocidad.jpg?s=612x612&w=0&k=20&c=TC2l24YAi38mV1AYLAX0vVz3GLJPqop8b_g_ZUD-DyM=" className="card-img-top border border-white" alt="fotico" />
						<div className="card-body">
							<h5 className="card-title text-center text-light">SERVICIO 1</h5>
							<p className="card-text text-light">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
						</div>
					</div>
				</div>
				<div className="col-4 d-flex servicio3">
					<div className="card bg-black">
						<img src="https://media.istockphoto.com/id/1285957020/es/foto/explosi%C3%B3n-de-una-bombilla-el%C3%A9ctrica-tradicional-disparo-tomado-a-alta-velocidad.jpg?s=612x612&w=0&k=20&c=TC2l24YAi38mV1AYLAX0vVz3GLJPqop8b_g_ZUD-DyM=" className="card-img-top border border-white" alt="fotico" />
						<div className="card-body">
							<h5 className="card-title text-center text-light">SERVICIO 1</h5>
							<p className="card-text text-light">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
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
						7,99 $ / AL MES
					</div>
				</div>
				<div className="col-3 border border-3 border-white mx-5 redondeado my-5">
					<div className="bg-black text-light text-center mes redondeado">
						1 MES
					</div>
					<div className="bg-white text-center mensualidad rounded-bottom">
						7,99 $ / AL MES
					</div>
				</div>
				<div className="col-3 border border-3 border-white mx-5 redondeado my-5">
					<div className="bg-black text-light text-center mes redondeado">
						1 MES
					</div>
					<div className="bg-white text-center mensualidad rounded-bottom">
						7,99 $ / AL MES
					</div>
				</div>
				
			</div>
		</div>
	);
};