import React, { useContext, useEffect, useState } from "react";
import { Button, Form, FormControl, FormGroup, FormLabel } from "react-bootstrap";
import { Context } from "../store/appContext";
import Swal from 'sweetalert2'
import { useParams } from "react-router-dom";

const FormPais = () => {
    const [pais, setPais] = useState({})
    const [nombre, setNombre] = useState(pais.nombre_de_pais || "")
    const {store, actions} = useContext(Context)
    const token = localStorage.getItem("token")
    const {id} = useParams()

    const handleSubmit = async (e) => {
        e.preventDefault()
        let user = localStorage.getItem("nombre")
        let nuevoToken = await actions.renovarToken(user)
        id ? 
        await actions.editarPais(nombre, nuevoToken.token, id) :
        await actions.crearPais(nombre, nuevoToken.token)
        setNombre("")
        Swal.fire({
        position: "top-end",
        icon: "success",
        title: id ? "Pais editado correctamente" : "Pais agregado correctamente",
        showConfirmButton: false,
        timer: 1500
        });
    }

    const handleChange = (e) => {
        setPais({})
        setNombre(e.target.value)
    }
    useEffect(async () => {
        id ? setPais(await actions.getPais(id)) : null
    }, [])

    if(token) {
        return (
            <div className="bg-black pt-5" style={{"height": "100vh"}}>
                <Form onSubmit={e => handleSubmit(e)} className="p-4 w-75 border border-light border-2 rounded mx-auto">
                    <FormGroup>
                        <FormLabel htmlFor="nombre" className="text-light fs-4">Nombre de Pais</FormLabel>
                        <FormControl size="lg" className="bg-black text-light" placeholder="Ingresa el nombre del pais" type="text" name="nombre" id="nombre" value={pais.nombre_de_pais || nombre} onChange={e => handleChange(e)} />
                    </FormGroup>
                    <Button variant="secondary" type="submit" className="w-100 my-3">Crear</Button>
                </Form>
                <Button variant="outline-primary" href="/admin/paises" className="my-5 w-25 mx-5">Volver</Button>
            </div>
        )
    }
}

export default FormPais