import React from "react";
import ButtonHome from '../../components/global/buttonHome';
import './Home.css';

const Home = () => {

    return (

        <>

            <div className='home-container'>
                <ButtonHome
                    text="Texto"
                    variant="button-cart"
                    icon="bi bi-cart"
                />
                <h1>Home</h1>
            </div>
        </>
    )
}

export default Home;