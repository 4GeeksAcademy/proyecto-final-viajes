import React, { useContext, useState } from "react";
import { Button, Form, FormControl, FormGroup, FormLabel } from "react-bootstrap";
import { Context } from "../store/appContext";

const FormPais = () => {
    const [nombre, setNombre] = useState("")
    const {store, actions} = useContext(Context)

    const handleSubmit = (e) => {
        e.preventDefault()
        actions.crearPais(nombre)
    }

    return (
        <div className="bg-black p-4 d-flex align-items-center" style={{"height": "100vh"}}>
            <Form onSubmit={e => handleSubmit(e)} className="p-4 w-75 border border-light border-2 rounded my-4 mx-auto">
                <FormGroup>
                    <FormLabel htmlFor="nombre" className="text-light fs-4">Nombre de Pais</FormLabel>
                    <FormControl size="lg" className="bg-black text-light" placeholder="Ingresa el nombre del pais" type="text" name="nombre" id="nombre" value={nombre} onChange={e => setNombre(e.target.value)} />
                </FormGroup>
                <Button variant="secondary" type="submit" className="w-100 my-3">Crear</Button>
            </Form>
        </div>
        
    )
}

export default FormPais