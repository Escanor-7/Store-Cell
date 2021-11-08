import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import * as S from './CardsScrool.styles.js';

const CardsScrool = () => {
    var settings = {
        dots: false,
        className: 'slider',
        infinite: true,
        slidesToShow: 4,
        speed: 1000,
    }
    return (
        <S.Container>
            <Slider {...settings}>
                    <S.Card>
                        <img src="./img/CardCell.img/Cell-Samsung/Samsung01.jpg" alt="" />
                        <S.Description>
                            <h5 href="#">Smartphone Samsung Galaxy S20</h5>
                            <p>R$ 2.099,00 </p>
                            <button className="btn btn-dark" href="#">Comprar</button>
                        </S.Description>
                    </S.Card>
                
                
                    <S.Card>
                        <img src="./img/CardCell.img/Cell-Samsung/Samsung01.jpg" alt="" />
                        <S.Description>
                            <h5 href="#">Smartphone Samsung Galaxy S20</h5>
                            <p>R$ 2.099,00 </p>
                            <button className="btn btn-dark" href="#">Comprar</button>
                        </S.Description>
                    </S.Card>
               
                
                    <S.Card>
                        <img src="./img/CardCell.img/Cell-Samsung/Samsung01.jpg" alt="" />
                        <S.Description>
                            <h5 href="#">Smartphone Samsung Galaxy S20</h5>
                            <p>R$ 2.099,00 </p>
                            <button className="btn btn-dark" href="#">Comprar</button>
                        </S.Description>
                    </S.Card>
                
                
                    <S.Card>
                        <img src="./img/CardCell.img/Cell-Samsung/Samsung01.jpg" alt="" />
                        <S.Description>
                            <h5 href="#">Smartphone Samsung Galaxy S20</h5>
                            <p>R$ 2.099,00 </p>
                            <button className="btn btn-dark" href="#">Comprar</button>
                        </S.Description>
                    </S.Card>
                
                
                    <S.Card>
                        <img src="./img/CardCell.img/Cell-Samsung/Samsung01.jpg" alt="" />
                        <S.Description>
                            <h5 href="#">Smartphone Samsung Galaxy S20</h5>
                            <p>R$ 2.099,00 </p>
                            <button className="btn btn-dark" href="#">Comprar</button>
                        </S.Description>
                    </S.Card>
                
            </Slider>
        </S.Container>
    );
}


export default CardsScrool;