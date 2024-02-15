import React, { useContext, useEffect, useState } from "react";
import "../../styles/home.css";
import { Image } from "react-bootstrap";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

export const Iniciarsesion = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const { store, actions } = useContext(Context)
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (email != "" && password != "") {
            let response = await actions.login(email, password)
            if (response) {
                navigate("/")
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Nombre de usuario o contraseña incorrectos"
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
        <div className="bg-black">


            <p className="servicios menu text-light py-5">INICIAR SESION</p>

            {/* <form className="form menu rounded-3">
                <div class="mb-3 pb-3">
                    <label for="email" class="form-label pb-2 fs-6">CORREO</label>
                    <input type="email" class="form-control pb-2" id="email" aria-describedby="emailHelp" /> 
                </div>
                <div class="mb-3 pb-3">
                    <label for="password" class="form-label pb-2 fs-6">CONTRASEÑA</label>
                    <input type="password" class="form-control" id="password"/> */}

            <form onSubmit={e => handleSubmit(e)} className="form menu">
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">CORREO</label>
                    <input type="email" value={email} onChange={e => setEmail(e.target.value)} className="form-control" id="email" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">CONTRASEÑA</label>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} className="form-control" id="password" />
                    <button type="submit" className="btn btn-secondary menu fs-6 mt-5">INICIAR SESION</button>
                </div>
            </form>
        </div>

    );
};