import React from 'react';
import * as S from './MiniBanners.styles.js';

const MiniBanners = () => {

    return (

        <S.Container>
            <S.Card>
                <img src="./img/MiniBanners.img/LogoApple.jpg" alt="" />
                <h3>Iphone</h3>
            </S.Card>

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