import React from "react";
import { ThemeProvider } from "styled-components";
import theme from './designSystem/designSystem.js';
import Header from './components/local/header/index';
<<<<<<< HEAD
import Footer from './components/local/footer/index'
// Pode importar o footer aqui
import Carousel from '../src/components/local/carousel';
import MiniBanners from '../src/components/local/miniBanners';
import CardsScrool from './components/global/cardsScrool';
=======
import Login from './pages/Login/index';
import Home from "./pages/Home";
import Checkout from './pages/Checkout/index'
>>>>>>> adb7add9ebc4a86fda8ea843db05ab603d9d7c21
// Este componente App é onde vamos importar as páginas e criar nossas rotas

function App() {

    return (
        <>
<<<<<<< HEAD
            
            <Header/>
            <Carousel/>
            <MiniBanners/>
            <CardsScrool/>

            <Footer/>
=======
            <ThemeProvider theme={theme}  >
                 <Header />
                {/*<Home /> 
                <Login />*/}
                <Checkout/>
            </ThemeProvider>
>>>>>>> adb7add9ebc4a86fda8ea843db05ab603d9d7c21
        </>
    )
}

export default App;