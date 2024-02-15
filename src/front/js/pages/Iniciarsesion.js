import React, { useContext } from "react";
import "../../styles/home.css";

export const Iniciarsesion = () => {
	

	return (
		<div className= "formDiv menu" >

            <div className="text-center">
                <Image 
            INICIAR  SESION 
            </div>
            
			<form className="form menu">
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">CORREO</label>
                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" /> 
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">CONTRASEÑA</label>
                    <input type="password" className="form-control" id="password"/>
                </div>
        
        
                 <button type="submit" className="btn btn-secondary menu">INICIAR SESION</button>
            </form>
		</div>
	);
};