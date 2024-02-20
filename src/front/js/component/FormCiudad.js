import React, { useContext, useEffect, useState } from "react";
import { Button, Form, FormControl, FormGroup, FormLabel, FormSelect } from "react-bootstrap";
import { Context } from "../store/appContext";
import Swal from 'sweetalert2'
import { useParams } from "react-router-dom";

const FormCiudad = () => {
    const [ciudad, setCiudad] = useState({})
    const [nombre, setNombre] = useState(ciudad.nombre_de_ciudad || "")
    const [pais, setPais] = useState(ciudad.id_pais || null)
    const {store, actions} = useContext(Context)
    const token = localStorage.getItem("token")
    const {id} = useParams()
    const datos = {
        nombre_de_ciudad: nombre,
        id_pais: pais
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        let user = localStorage.getItem("nombre")
        let nuevoToken = await actions.renovarToken(user)
        id ? 
        await actions.editarCiudad(datos, nuevoToken.token, id) :
        await actions.crearCiudad(datos, nuevoToken.token)
        setNombre("")
        Swal.fire({
        position: "top-end",
        icon: "success",
        title: id ? "Ciudad editada correctamente" : "Ciudad agregada correctamente",
        showConfirmButton: false,
        timer: 1500
        });
    }

    const handleChangeNombre = (e) => {
        setNombre(e.target.value)
    }
    const handleChangePais = (e) => {
        setPais(e.target.value)
    }

    useEffect(() => {
        async function fetchData() {
            id ? setCiudad(await actions.getCiudad(id)) : null
        }
        fetchData()
    }, [])

    if(token) {
        return (
            <div className="bg-black pt-5" style={{"height": "100vh"}}>
                <Form onSubmit={e => handleSubmit(e)} className="p-4 w-75 border border-light border-2 rounded mx-auto">
                    <FormGroup>
                        <FormLabel htmlFor="nombre" className="text-light fs-4">Nombre de Ciudad</FormLabel>
                        <FormControl size="lg" className="bg-black text-light" placeholder="Ingresa el nombre de la ciudad" type="text" name="nombre" id="nombre" value={ciudad.nombre_de_ciudad || nombre} onChange={e => handleChangeNombre(e)} />
                    </FormGroup>
                    <FormGroup>
                        <FormLabel htmlFor="nombre" className="text-light fs-4">Selecciona el país:</FormLabel>
                        <FormSelect className="bg-black h-100 text-light" onChange={e => handleChangePais(e)}>
                            <option>--Seleccione un país--</option>
                            {store.paises.map((pais, index) => (
                                <option key={index} value={pais.id}>{pais.nombre_de_pais}</option>
                            ))}
                        </FormSelect>
                    </FormGroup>
                    <Button variant="secondary" type="submit" className="w-100 my-3">Crear</Button>
                </Form>
                <Button variant="outline-primary" href="/admin/ciudades" className="my-5 w-25 mx-5">Volver</Button>
            </div>
        )
    }
}

export default FormCiudad