import React, { useContext } from "react";
import "../../styles/home.css";

export const Registrarme = () => {
	

	return (
		<div className="formDiv menu">

            <div>
				<p className="servicios menu text-light py-5">REGISTRARME</p>
            </div>
            
			<form className="form menu rounded-3">

				<div class="mb-3 pb-3">
           			<label for="nombre" class="form-label">NOMBRE</label>
            		<input type="text" class="form-control" id="nombre" />   
        		</div>

				<div class="mb-3 pb-3">
           			<label for="apellidos" class="form-label">APELLIDOS</label>
            		<input type="text" class="form-control" id="apellidos" />   
        		</div>

				<div class="mb-3 pb-3">
					<label for="email" class="form-label">CORREO</label>
					<input type="email" class="form-control" id="email" aria-describedby="emailHelp" />   
				</div>

				<div class="mb-3 pb-3">
           			<label for="edad" class="form-label">EDAD</label>
            		<input type="number" class="form-control" id="edad" />   
        		</div>

				<div class="mb-3 pb-3">
					<label for="password" class="form-label">CONTRASEÑA</label>
					<input type="password" class="form-control" id="password"/>
				</div>
				
				<div class="mb-3 pb-3">
					<label for="pais_de_residencia" class="form-label">PAIS DE RESIDENCIA</label>
					<input type="text" class="form-control" id="pais_de_residencia"/>
				</div>
        
        		<button type="submit" className="btn btn-secondary menu fs-6">REGISTRARME</button>
    		</form>

		</div>
	);
};
