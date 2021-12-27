import React from 'react';
import * as S from './Carousel.styles.js';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const Carousel = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1

    };
    return (


        <S.Container>
            <Slider {...settings}>

                <div class="carousel-item active">
                    <S.Banner src="./img/Banner.img/BannerIphone.png" alt="Banner 1" />
                </div>
                <div class="carousel-item">
                    <S.Banner src="./img/Banner.img/BannerSamsung.jpg" alt="Banner 2" />
                </div>
                <div class="carousel-item">
                    <S.Banner src="./img/Banner.img/BannerXiaomin.png" alt="Banner 3" />
                </div>

            </Slider>
        </S.Container>







    );
}


export default Carousel;

