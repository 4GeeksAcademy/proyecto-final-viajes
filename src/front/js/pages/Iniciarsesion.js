import React, { useContext } from "react";
import "../../styles/home.css";

export const Iniciarsesion = () => {
	

	return (
		<div className="bg-black">


            <p className="servicios menu text-light py-5">INICIAR SESION</p>
            
			<form className="form menu rounded-3">
                <div class="mb-3 pb-3">
                    <label for="email" class="form-label pb-2 fs-6">CORREO</label>
                    <input type="email" class="form-control pb-2" id="email" aria-describedby="emailHelp" /> 
                </div>
                <div class="mb-3 pb-3">
                    <label for="password" class="form-label pb-2 fs-6">CONTRASEÑA</label>
                    <input type="password" class="form-control" id="password"/>
            
			<form className="form menu">
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">CORREO</label>
                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" /> 
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">CONTRASEÑA</label>
                    <input type="password" className="form-control" id="password"/>
                </div>
                 <button type="submit" className="btn btn-secondary menu fs-6">INICIAR SESION</button>
            </form>
		</div>
	);
};