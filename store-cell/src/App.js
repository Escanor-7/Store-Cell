import React from "react";
import { ThemeProvider } from "styled-components";
import theme from './designSystem/designSystem.js';
import Header from './components/local/header/index';
import Login from './pages/Login/index';
import Carrinho from './pages/Carrinho/index';
import Home from "./pages/Home";
// Este componente App é onde vamos importar as páginas e criar nossas rotas

function App() {

    return (
        <>
        
            {/*...*/}
            <ThemeProvider theme={theme}  >
                {/*<Header />
                <Home />
                 <Login /> */}
                <Carrinho/>
            </ThemeProvider>
        </>
    )
}

export default App;