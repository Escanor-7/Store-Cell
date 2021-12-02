import React from "react";
import Header from './components/local/header/index';
import Carousel from '../src/components/local/carousel';
import MiniBanners from '../src/components/local/miniBanners';
import CardsScrool from './components/global/cardsScrool';
import theme from './designSystem/designSystem';
import { ThemeProvider } from "styled-components";

function App() {
    return (
        <>
            <ThemeProvider theme={theme} >
                <Header />
                <Carousel />
                <MiniBanners />
                <CardsScrool />
            </ThemeProvider>
        </>
    )
}

export default App;