import React from "react";
import StoreCell from '../../../img/store-cell.png'; 
import  './Header.css';


const Header = () => {

    return (

        <nav class="navbar navbar-expand-lg stretch-top bg-primary-color" id="navbar">
            <div class="container-fluid">
               <a href="/Home" class="navbar-brand primary-color">
                <img src={StoreCell} alt='Storecell'/>
                <span>StoreCell</span>
               </a>
                <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbar-items"
                aria-controls="navbar-items"
                aria-expanded="false"
                aria-label="Toggle navgation"
                >
                    <i class="bi bi-list"></i>

                </button>
                    <div class="collapse navbar-collapse" id="navbar-items">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-items">
                                <a href="#" class="nav-link active primary-color" aria-current="page">Inicio</a>
                            </li>
                            <li class="nav-item">
                                <a href="#" class="nav-link primary-color" aria-current="page">Smartphones</a>
                            </li>
                            <li class="dropdown" >
                                <button class="btn btn-secondary-whith dropdown-toggle" type="button" id="dropdownMenuButto" data-bs-toggle="dropdown" aria-expanded="false">
                                    Marcas
                                </button>
                                <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton">
                                <li><a class="dropdown-item primary-color" href="#">Samsung</a></li>
                                <li><a class="dropdown-item primary-color"  href="#">Aphone</a></li>
                                <li><a class="dropdown-item primary-color" href="#">Xiaomi</a></li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <a href="#" class="nav-link primary-color" aria-current="page">Meus Pedidos</a>
                            </li>
                        </ul>
                        
                        <div class="input-group">
                            <input type="search" class="form-control rounded-1 me-2" placeholder="Search" aria-label="Search"
                             aria-describedby="search-addon"  />
                             <p>
                            <a href="#" class="btn btn-link btn-custom" ></a>
                            <span class="glyphicon glyphicon-bi bi-search me-4 btn-icone">
                            </span>
                            </p>
                        </div>

                    </div>
                    
                    <i class="bi bi-person-circle nav-icone"></i>
                    <a href="#" class="nav-link primary-color nav-login" aria-current="page">Conecte-se</a>
                    <a href="#" class="">
                    <i class="bi bi-bag"></i>
                    </a>
                
           </div>
        </nav>

    )
}

export default Header;