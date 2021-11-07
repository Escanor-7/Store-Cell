import React from 'react';
import * as S from './Carousel.styles.js';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const Carousel = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1

    };
    return (


        <div>
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
        </div>







    );
}


export default Carousel;

{/*                 
                    <button class="carousel-control-prev" type="button" data-bs-target="#Slider" data-bs-slide="prev">
                        <span className="bi bi-chevron" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button type="button" data-bs-target="#Slider" data-bs-slide="next">
                        <span className="bi bi-chevron-compact-right" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
*/}
{/*                 
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#Slider" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#Slider" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#Slider" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
*/}