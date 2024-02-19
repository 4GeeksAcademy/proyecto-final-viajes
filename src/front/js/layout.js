import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { InicioBusqueda } from "./pages/InicioBusqueda";
import { GaleriaTours } from "./pages/GaleriaTours";
import { MisRutas } from "./pages/MisRutas";
import  {Iniciarsesion} from "./pages/Iniciarsesion";
import {Registrarme} from "./pages/Registrarme";
import injectContext from "./store/appContext";

import { Footer } from "./component/footer";
import Header from "./component/Header";
import Administrar from "./pages/Administrar";
import Paises from "./pages/Paises";
import FormPais from "./component/FormPais";
import Ciudades from "./pages/Ciudades";
import AdminRutas from "./pages/AdminRutas";

//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    return (
        <div>
            <BrowserRouter basename={basename}>

                    <Header />
                    <Routes>
                        <Route element={<InicioBusqueda />} path="/" />
                        <Route element={<GaleriaTours />} path="/tours/:id" />
                        <Route element={<MisRutas />} path="/misrutas" />
                        <Route element={<Iniciarsesion />} path="/iniciarsesion" />
                        <Route element={<Registrarme />} path="/registrarme" />
                        <Route element={<Administrar />} path="/admin" />
                        <Route element={<Paises />} path="/admin/paises" />
                        <Route element={<FormPais />} path="/crearPais" />
                        <Route element={<Ciudades />} path="admin/ciudades" />
                        <Route element={<AdminRutas />} path="admin/rutas" />
                    </Routes>
                    <Footer />
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
