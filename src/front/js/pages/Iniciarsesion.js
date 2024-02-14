import React, { useContext } from "react";
import "../../styles/home.css";

export const Iniciarsesion = () => {
	

	return (
		<div className= "formDiv menu" >

            <div>
            INICIAR  SESION 
            </div>
            
			<form className="form menu">
                <div class="mb-3">
                    <label for="email" class="form-label">CORREO</label>
                    <input type="email" class="form-control" id="email" aria-describedby="emailHelp" /> 
                </div>
                <div class="mb-3">
                    <label for="password" class="form-label">CONTRASEÑA</label>
                    <input type="password" class="form-control" id="password"/>
                </div>
        
        
                 <button type="submit" className="btn btn-secondary menu">INICIAR SESION</button>
            </form>
		</div>
	);
};