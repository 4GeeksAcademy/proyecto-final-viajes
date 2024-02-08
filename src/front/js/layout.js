import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { InicioBusqueda } from "./pages/InicioBusqueda";
import { GaleriaTours } from "./pages/GaleriaTours";
import { MisRutas } from "./pages/MisRutas";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    return (
        <div>
            <BrowserRouter basename={basename}>
                    <Navbar />
                    <Routes>
                        <Route element={<InicioBusqueda />} path="/" />
                        <Route element={<GaleriaTours />} path="/tours" />
                        <Route element={<MisRutas />} path="/misrutas" />
                    </Routes>
                    <Footer />
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
