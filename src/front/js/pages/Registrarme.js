import React, { useContext, useState } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
// import Swal from 'sweetalert2'

export const Registrarme = () => {
	const [nombre, setNombre] = useState("")
	const [apellidos, setApellidos] = useState("")
	const [email, setEmail] = useState("")
	const [edad, setEdad] = useState(undefined)
	const [password, setPassword] = useState("")
	const [residencia, setresidencia] = useState("")
	const {store, actions} = useContext(Context)
	const navigate = useNavigate()

	const user = {
		nombre: nombre,
		apellidos: apellidos,
		email: email,
		edad: edad,
		password: password,
		pais_de_residencia: residencia,
		is_active: true,
		rol: 0,
		fecha_de_registro: "2024"
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
		if(nombre != "" && apellidos != "" && email != "" && edad != "" && password != "" && residencia != "") {
			let res = await actions.createUser(user)
			if(res) {
				Swal.fire({
					position: "top-end",
					icon: "success",
					title: "El usuario ha sido creado",
					showConfirmButton: false,
					timer: 1500
				  });
				navigate("/iniciarsesion")
			}else {
				Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Registro erroneo"
                });
			}
		}else {
			Swal.fire({
				icon: "error",
				title: "Oops...",
				text: "Todos los campos son obligatorios"
			});
		}
	}

	return (
		<div className="formDiv menu">

            <div>
				<p className="servicios menu text-light py-5">REGISTRARME</p>
            </div>
            
			<form onSubmit={e => handleSubmit(e)} className="form menu">

				<div className="mb-3">
           			<label htmlFor="nombre" className="form-label">NOMBRE</label>
            		<input type="text" value={nombre} onChange={e => setNombre(e.target.value)} className="form-control" id="nombre" />   
        		</div>

				<div className="mb-3">
           			<label htmlFor="apellidos" className="form-label">APELLIDOS</label>
            		<input type="text" value={apellidos} onChange={e => setApellidos(e.target.value)} className="form-control" id="apellidos" />   
        		</div>

				<div className="mb-3">
					<label htmlFor="email" className="form-label">CORREO</label>
					<input type="email" value={email} onChange={e => setEmail(e.target.value)} className="form-control" id="email" aria-describedby="emailHelp" />   
				</div>

				<div className="mb-3">
           			<label htmlFor="edad" className="form-label">EDAD</label>
            		<input type="number" value={edad} onChange={e => setEdad(e.target.value)} className="form-control" id="edad" />   
        		</div>

				<div className="mb-3">
					<label htmlFor="password" className="form-label">CONTRASEÑA</label>
					<input type="password" value={password} onChange={e => setPassword(e.target.value)} className="form-control" id="password"/>
				</div>
				
				<div className="mb-3">
					<label htmlFor="pais_de_residencia" className="form-label">PAIS DE RESIDENCIA</label>
					<input type="text" value={residencia} onChange={e => setresidencia(e.target.value)} className="form-control" id="pais_de_residencia"/>
				</div>
        
        		<button type="submit" className="btn btn-secondary menu fs-6">REGISTRARME</button>
    		</form>

		</div>
	);
};
