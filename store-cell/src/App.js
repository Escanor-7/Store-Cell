import React from "react";
import Header from './components/local/header/index';
// Pode importar o footer aqui
import Home from '../src/pages/Home/index';

// Este componente App é onde vamos importar as páginas e criar nossas rotas

function App() {
    return (
        <>
            <Header />
            <Home />
            {/* Usar o footer aqui */}
        </>
    )
}

export default App;