import React from "react";
import * as S from './Header.styles.js';


const Header = () => {

    return (

        <S.Container>
            <div>
                <S.CardImg src="./img/Store-cell.png" alt="logoStoreCell" />
            </div>
            <div>
                <S.StoreCell>
                    StoreCell
                </S.StoreCell>
            </div>
            <nav>
                <S.ul>
                    <S.li>
                        <S.a href="#">Home</S.a>
                    </S.li>
                    <S.li>
                        <S.a href="#">Smartphones</S.a>
                    </S.li>
                    <S.li>
                        <S.a href="#">Meus Pedidos</S.a>
                    </S.li>
                </S.ul>
            </nav>

            <form action="#">
                <S.searchInput type="text" className="search-input" placeholder="Search" />

                <S.searchBtn className="search-btn">
                    <i className="bi bi-search"></i>
                </S.searchBtn>
            </form>

            <nav>
                <S.login className="login">
                    <S.li>
                        <S.biPerson className="bi bi-person-fill"></S.biPerson>
                        <S.a href="#">Login</S.a>
                        <S.biBag className="bi bi-bag"></S.biBag>
                    </S.li>
                </S.login>
            </nav>

        </S.Container>
    )
}

export default Header;