import React from "react";
import * as S from './Header.styles.js';
import SideMenu from "../sideMenu/index.jsx";


const Header = () => {

    return (
        <S.Container>
            <S.MobileOptionsList>
                <SideMenu />
            </S.MobileOptionsList>
            <S.LogoContainer>
                <S.CardImg src="./img/Store-cell.png" alt="logoStoreCell" />
                <p>StoreCell</p>
            </S.LogoContainer>

            <S.Item href="#" >Smartphones</S.Item>
            <S.Item href="#" >Meus Pedidos</S.Item>

            <S.SearchBar action="#">
                <S.searchInput type="text" className="search-input" placeholder="O que deseja encontrar ?" />

                <S.searchBtn className="search-btn">
                    <i className="bi bi-search"></i>
                </S.searchBtn>
            </S.SearchBar>

            <S.login className="login">
                <S.BiPerson className="bi bi-person-fill" />
                <a>Login</a>
            </S.login>
            <S.BiBag className="bi bi-bag" />
        </S.Container>
    )
}

export default Header;