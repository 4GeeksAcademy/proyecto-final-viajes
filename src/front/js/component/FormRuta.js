import React, { useContext, useEffect, useState } from "react";
import { Button, Form, FormControl, FormGroup, FormLabel, FormSelect } from "react-bootstrap";
import { Context } from "../store/appContext";
import Swal from 'sweetalert2'
import { useParams } from "react-router-dom";

const FormCiudad = () => {
    const [ruta, setRuta] = useState({})
    const [nombre, setNombre] = useState(ruta.ombre_de_ruta || "")
    const [distancia, setDistancia] = useState(ruta.distancia || "")
    const [imagen, setImagen] = useState(ruta.imagen || "")
    const [descripcion, setDescripcion] = useState(ruta.descripcion || "")
    const [tiempoDeRecorrido, setTiempoDerecorrido] = useState(ruta.tiempo_de_recorrido || "")
    const [ciudad, setCiudad] = useState(ruta.id_ciudad || "")
    const {store, actions} = useContext(Context)
    const token = localStorage.getItem("token")
    const {id} = useParams()
    const datos = {
        nombre_de_ruta: nombre,
        distancia: distancia,
        imagen: imagen,
        descripcion: descripcion,
        tiempo_de_recorrido: tiempoDeRecorrido,
        id_ciudad: ciudad
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        let user = localStorage.getItem("nombre")
        let nuevoToken = await actions.renovarToken(user)
        id ? 
        await actions.ditarRuta(datos, nuevoToken.token, id) :
        await actions.crearRuta(datos, nuevoToken.token)
        setNombre("")
        setDescripcion("")
        setDistancia("")
        setImagen("")
        setTiempoDerecorrido("")
        setCiudad(null)
        Swal.fire({
        position: "top-end",
        icon: "success",
        title: id ? "Ruta editada correctamente" : "Ruta agregada correctamente",
        showConfirmButton: false,
        timer: 1500
        });
    }

    const handleChangeNombre = (e) => {
        setNombre(e.target.value)
    }
    const handleChangeCiudad = (e) => {
        setPais(e.target.value)
    }
    const handleChangeDescripcion = (e) => {
        setDescripcion(e.target.value)
    }
    const handleChangeDistancia = (e) => {
        setDistancia(e.targetvalue)
    }
    const handleChangeImagen = (e) => {
        setImagen(e.target.value)
    }
    const handleChangeTiempo = (e) => {
        setTiempoDerecorrido(e.target.value)
    }

    useEffect(() => {
        async function fetchData() {
            id ? setRuta(await actions.getRuta(id)) : null
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
                        <FormLabel htmlFor="distancia" className="text-light fs-4">Distancia</FormLabel>
                        <FormControl size="lg" className="bg-black text-light" placeholder="Ingresa la distancia del recorrido" type="text" name="distancia" id="distancia" value={ciudad.distancia || distancia} onChange={e => handleChangeDistancia(e)} />
                    </FormGroup>
                    <FormGroup>
                        <FormLabel htmlFor="imagen" className="text-light fs-4">Imagen</FormLabel>
                        <FormControl size="lg" className="bg-black text-light" placeholder="Ingresa la url de la imagen" type="text" name="imagen" id="imagen" value={ciudad.imagen || imagen} onChange={e => handleChangeImagen(e)} />
                    </FormGroup>
                    <FormGroup>
                        <FormLabel htmlFor="descripcion" className="text-light fs-4">Descripcion de ruta</FormLabel>
                        <FormControl size="lg" className="bg-black text-light" placeholder="Ingresa una breve descripcion de la ruta" type="text" name="escripcion" id="scripcion" value={ciudad.descripcion || descripcion} onChange={e => handleChangeDescripcion(e)} />
                    </FormGroup>
                    <FormGroup>
                        <FormLabel htmlFor="tiempo" className="text-light fs-4">Tiempo de recorrido</FormLabel>
                        <FormControl size="lg" className="bg-black text-light" placeholder="Ingresa el tiempo de recorridode la ruta" type="text" name="tiempo" id="tiempo" value={ciudad.tirmpo_de_recorrido || tiempoDeRecorrido} onChange={e => handleChangeTiempo(e)} />
                    </FormGroup>
                    <FormGroup>
                        <FormLabel htmlFor="ciudad" className="text-light fs-4">Selecciona el país:</FormLabel>
                        <FormSelect id="ciudad" className="bg-black h-100 text-light" onChange={e => handleChangeCiudad(e)}>
                            <option>--Seleccione un país--</option>
                            {store.ciudades.map((ciudad, index) => (
                                <option key={index} value={ciudad.id}>{ciudad.nombre_de_ciudad}</option>
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