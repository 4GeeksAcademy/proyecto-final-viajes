import React, { useContext } from "react";
import "../../styles/home.css";

export const Iniciarsesion = () => {
	

	return (
		<div>
			<form>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">CORRE</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" /> 
           
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">CONTRASEÑA</label>
            <input type="password" class="form-control" id="exampleInputPassword1"/>
        </div>
        
        
        <button type="submit" class="btn btn-primary">INICIAR SESION</button>
    </form>

		</div>
	);
};