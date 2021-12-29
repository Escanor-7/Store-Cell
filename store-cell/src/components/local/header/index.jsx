import React from "react";
import { Link } from "react-router-dom";
import * as S from './Header.styles.js';
import SideMenu from "../sideMenu/index.jsx";


const Header = () => {

    return (
        <S.Container>
            <S.MobileOptionsList>
                <SideMenu />
            </S.MobileOptionsList>

            <Link to="home" style={{ textDecoration: 'none' }} >
                <S.LogoContainer>
                    <S.CardImg src="./img/Store-cell.png" alt="logoStoreCell" />
                    <p>StoreCell</p>
                </S.LogoContainer>
            </Link>

            <S.Item href="#" >Smartphones</S.Item>
            <Link to="requests" style={{ textDecoration: 'none' }} >
                <S.Item href="#" >Meus Pedidos</S.Item>
            </Link>

            <S.SearchBar action="#">
                <S.searchInput type="text" className="search-input" placeholder="O que deseja encontrar ?" />

                <S.searchBtn className="search-btn">
                    <i className="bi bi-search"></i>
                </S.searchBtn>
            </S.SearchBar>

            <S.login className="login">

                <Link to="login" style={{ textDecoration: 'none' }} >
                    <S.BiPerson className="bi bi-person-fill" />
                    <a>Login</a>
                </Link>

            </S.login>

            <Link to="cart" style={{ textDecoration: 'none' }} >
                <S.BiBag className="bi bi-bag" />
            </Link>

        </S.Container>
    )
}

export default Header;