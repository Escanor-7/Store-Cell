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
        slidesToScroll: 4,
        speed: 1000,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 599,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            }
        ],
    }
    return (
        <S.Container>
            <Slider {...settings}>
                <S.Card>
                    <img src="./img/CardCell.img/Cell-Samsung/Samsung01.jpg" alt="Celular Samsung" />
                    <S.Description>
                        <h5 href="#">Smartphone Samsung Galaxy S20</h5>
                        <p>R$ 2.099,00 </p>
                        <button className="btn btn-dark" href="#">
                            <i className="bi bi-cart-check" />
                            Comprar
                        </button>
                    </S.Description>
                </S.Card>


                <S.Card>
                    <img src="./img/CardCell.img/Cell-Samsung/Samsung02.jpg" alt="" />
                    <S.Description>
                        <h5 href="#">Smartphone Samsung Galaxy A12</h5>
                        <p>R$ 1.079,00 </p>
                        <button className="btn btn-dark" href="#">
                            <i className="bi bi-cart-check" />
                            Comprar
                        </button>
                    </S.Description>
                </S.Card>


                <S.Card>
                    <img src="./img/CardCell.img/Cell-Samsung/Samsung03.jpg" alt="" />
                    <S.Description>
                        <h5 href="#">Smartphone Samsung Galaxy M12</h5>
                        <p>R$ 1.020,28 </p>
                        <button className="btn btn-dark" href="#">
                            <i className="bi bi-cart-check" />
                            Comprar
                        </button>
                    </S.Description>
                </S.Card>


                <S.Card>
                    <img src="./img/CardCell.img/Cell-Samsung/Samsung04.jpg" alt="" />
                    <S.Description>
                        <h5 href="#">Smartphone Samsung Galaxy A02s</h5>
                        <p>R$  809,00 </p>
                        <button className="btn btn-dark" href="#">
                            <i className="bi bi-cart-check" />
                            Comprar
                        </button>
                    </S.Description>
                </S.Card>


                <S.Card>
                    <img src="./img/CardCell.img/Cell-Samsung/Samsung05.jpg" alt="" />
                    <S.Description>
                        <h5 href="#">Smartphone Samsung Galaxy A32</h5>
                        <p>R$  1.415,88 </p>
                        <button className="btn btn-dark" href="#">
                            <i className="bi bi-cart-check" />
                            Comprar
                        </button>
                    </S.Description>
                </S.Card>
                <S.Card>
                    <img src="./img/CardCell.img/Cell-Samsung/Samsung06.jpg" alt="" />
                    <S.Description>
                        <h5 href="#">Smartphone Samsung Galaxy M62</h5>
                        <p>R$  1.655,08 </p>
                        <button className="btn btn-dark" href="#">
                            <i className="bi bi-cart-check" />
                            Comprar
                        </button>
                    </S.Description>
                </S.Card>
                <S.Card>
                    <img src="./img/CardCell.img/Cell-Samsung/Samsung07.jpg" alt="" />
                    <S.Description>
                        <h5 href="#">Smartphone Samsung Galaxy Note 20</h5>
                        <p>R$   3.495,08 </p>
                        <button className="btn btn-dark" href="#">
                            <i className="bi bi-cart-check" />
                            Comprar
                        </button>
                    </S.Description>
                </S.Card>
                <S.Card>
                    <img src="./img/CardCell.img/Cell-Samsung/Samsung08.jpg" alt="" />
                    <S.Description>
                        <h5 href="#">Smartphone Samsung Galaxy S21</h5>
                        <p>R$  4.369,08 </p>
                        <button className="btn btn-dark" href="#">
                            <i className="bi bi-cart-check" />
                            Comprar
                        </button>
                    </S.Description>
                </S.Card>

            </Slider>
            <hr />
            <Slider {...settings}>
                <S.Card>
                    <img src="./img/CardCell.img/Cell-Samsung/Samsung01.jpg" alt="Celular Samsung" />
                    <S.Description>
                        <h5 href="#">Smartphone Samsung Galaxy S20</h5>
                        <p>R$ 2.099,00 </p>
                        <button className="btn btn-dark" href="#">
                            <i className="bi bi-cart-check" />
                            Comprar
                        </button>
                    </S.Description>
                </S.Card>


                <S.Card>
                    <img src="./img/CardCell.img/Cell-Samsung/Samsung02.jpg" alt="" />
                    <S.Description>
                        <h5 href="#">Smartphone Samsung Galaxy A12</h5>
                        <p>R$ 1.079,00 </p>
                        <button className="btn btn-dark" href="#">
                            <i className="bi bi-cart-check" />
                            Comprar
                        </button>
                    </S.Description>
                </S.Card>


                <S.Card>
                    <img src="./img/CardCell.img/Cell-Samsung/Samsung03.jpg" alt="" />
                    <S.Description>
                        <h5 href="#">Smartphone Samsung Galaxy M12</h5>
                        <p>R$ 1.020,28 </p>
                        <button className="btn btn-dark" href="#">
                            <i className="bi bi-cart-check" />
                            Comprar
                        </button>
                    </S.Description>
                </S.Card>


                <S.Card>
                    <img src="./img/CardCell.img/Cell-Samsung/Samsung04.jpg" alt="" />
                    <S.Description>
                        <h5 href="#">Smartphone Samsung Galaxy A02s</h5>
                        <p>R$  809,00 </p>
                        <button className="btn btn-dark" href="#">
                            <i className="bi bi-cart-check" />
                            Comprar
                        </button>
                    </S.Description>
                </S.Card>


                <S.Card>
                    <img src="./img/CardCell.img/Cell-Samsung/Samsung05.jpg" alt="" />
                    <S.Description>
                        <h5 href="#">Smartphone Samsung Galaxy A32</h5>
                        <p>R$  1.415,88 </p>
                        <button className="btn btn-dark" href="#">
                            <i className="bi bi-cart-check" />
                            Comprar
                        </button>
                    </S.Description>
                </S.Card>
                <S.Card>
                    <img src="./img/CardCell.img/Cell-Samsung/Samsung06.jpg" alt="" />
                    <S.Description>
                        <h5 href="#">Smartphone Samsung Galaxy M62</h5>
                        <p>R$  1.655,08 </p>
                        <button className="btn btn-dark" href="#">
                            <i className="bi bi-cart-check" />
                            Comprar
                        </button>
                    </S.Description>
                </S.Card>
                <S.Card>
                    <img src="./img/CardCell.img/Cell-Samsung/Samsung07.jpg" alt="" />
                    <S.Description>
                        <h5 href="#">Smartphone Samsung Galaxy Note 20</h5>
                        <p>R$   3.495,08 </p>
                        <button className="btn btn-dark" href="#">
                            <i className="bi bi-cart-check" />
                            Comprar
                        </button>
                    </S.Description>
                </S.Card>
                <S.Card>
                    <img src="./img/CardCell.img/Cell-Samsung/Samsung08.jpg" alt="" />
                    <S.Description>
                        <h5 href="#">Smartphone Samsung Galaxy S21</h5>
                        <p>R$  4.369,08 </p>
                        <button className="btn btn-dark" href="#">
                            <i className="bi bi-cart-check" />
                            Comprar
                        </button>
                    </S.Description>
                </S.Card>

            </Slider>
        </S.Container>
    );
}


export default CardsScrool;