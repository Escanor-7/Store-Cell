import React from "react";
import StoreCell from '../../../img/Store-cell.png';
import  './Header.css';


const Header = () => {

    return (

        <nav className="navbar navbar-expand-lg stretch-top bg-primary-color" id="navbar">
            <div className="container-fluid">
               <a href="/Home" className="navbar-brand primary-color">
                 <img src={StoreCell} alt='Storecell'/>
                 <span>StoreCell</span>
               </a>

                <button
                 className="navbar-toggler"
                 type="button"
                 data-bs-toggle="collapse"
                 data-bs-target="#navbar-items"
                 aria-controls="navbar-items"
                 aria-expanded="false"
                 aria-label="Toggle navgation"
                 >
                    <i className="bi bi-list"></i>

                </button>
                    <div classname="collapse navbar-collapse" id="navbar-items">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-items">
                                <a href="#" className="nav-link active primary-color" aria-current="page">Inicio</a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link primary-color" aria-current="page">Smartphones</a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link primary-color" aria-current="page">Meus Pedidos</a>
                            </li>
                        </ul>
                    </div>

                    <div className="nav-search input-group navbar mb-5">
                       <input type="search" className="form-control" placeholder="Search..." aria-label="Search"
                                aria-describedby="search-addon"/>
                                <span className="input-group-text navbar" id="search-addon">
                                  <i className="bi bi-search"></i>
                                </span>
                             
                    </div>
                    
                   
                    <i className="bi bi-person-circle nav-icone mb-4"></i>
                    <a href="#" className="nav-link primary-color nav-login mb-4" aria-current="page">Conecte-se</a>
                    <a href="#" className="mb-4">
                    <i className="bi bi-bag"></i>
                    </a>
                   
                
           </div>
        </nav>

    )
}

export default Header;