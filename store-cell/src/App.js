import React from "react";
import Header from './components/local/header/index';
import Carousel from '../src/components/local/carousel';
import MiniBanners from '../src/components/local/miniBanners';
import CardsScrool from './components/global/cardsScrool';
import theme from './designSystem/designSystem';
import { ThemeProvider } from "styled-components";
import Login from './pages/Login/index';
// Este componente App é onde vamos importar as páginas e criar nossas rotas

function App() {
    return (
        <>
            
            <Header/>
            <Carousel/>
            <MiniBanners/>
            <CardsScrool/>
            <Login/>

            {/*...*/}
        </>
    )
}

export default App;