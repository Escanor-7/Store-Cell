import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from './designSystem/designSystem.js';
import Header from './components/local/header/index.jsx';
import Login from './pages/Login/index';
import Register from './pages/Register/index.jsx';
import Cart from './pages/Cart/index';
import Home from "./pages/Home";
import Checkout from './pages/Checkout/index'
import Requests from "./pages/Requests/index.jsx";
import Footer from './components/local/footer/index';

// Este componente App é onde vamos importar as páginas e criar nossas rotas

const RoutesComponent = () => {


    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Header />/
                <Routes>
                    <Route path='/home' element={<Home />} />
                    // <Route path='/login' element={<Login />} />
                    // <Route path='/register' element={<Register />} />
                    // <Route path='/cart' element={<Cart />} />
                    // <Route path='/checkout' element={<Checkout />} />
                    // <Route path='/requests' element={<Requests />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </ThemeProvider>
    )
}

export default RoutesComponent;