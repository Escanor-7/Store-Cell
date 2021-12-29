import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './MiniBanners.styles.js';

const MiniBanners = () => {

    return (

        <S.Container>
            <Link to='/products/iphone' style={{ textDecoration: 'none' }} >
                <S.Card>
                    <img src="./img/MiniBanners.img/LogoApple.jpg" alt="" />
                    <h3>Iphone</h3>
                </S.Card>
            </Link>

            <S.Card>
                <img src="./img/MiniBanners.img/LogoSamsung.png" alt="" />
                <h3>Samsung</h3>
            </S.Card>

            <S.Card>
                <img src="./img/MiniBanners.img/LogoXiaomi.png" alt="" />
                <h3>Xiaomi</h3>
            </S.Card>
        </S.Container>
    )
}


export default MiniBanners;