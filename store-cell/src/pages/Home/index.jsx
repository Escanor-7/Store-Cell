import React from "react";
import Carousel from '../../components/local/carousel';
import MiniBanners from '../../components/local/miniBanners';
import CardsScrool from '../../components/global/cardsScrool';

const Home = () => {

  return (
    <>
      <Carousel />
      <MiniBanners />
      <CardsScrool />
    </>
  )
}

export default Home;