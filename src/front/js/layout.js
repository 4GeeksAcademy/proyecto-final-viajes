import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Formularioregistrarme } from "./pages/formularioregistrarme";
import { Formularioiniciarsesion } from "./pages/formularioiniciarsesion";
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
                        <Route element={<Formularioregistrarme />} path="/1" />
                        <Route element={<Formularioiniciarsesion />} path="/2" />
                        <Route element={<h1>Not found!</h1>} />
                    </Routes>
                    <Footer />
                
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
