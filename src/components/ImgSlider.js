import React from 'react'
import Slider from 'react-slick';
import styled from 'styled-components';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function ImgSlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay : 1
      };

  return (
    <Carousel {...settings}>
      <Wrap>
        <img src='/images/slider-badag.jpg'></img>
      </Wrap>
      <Wrap>
        <img src='/images/slider-badging.jpg'></img>
      </Wrap>
      <Wrap>
        <img src='/images/slider-scale.jpg'></img>
      </Wrap>
      <Wrap>
        <img src='/images/slider-scales.jpg'></img>
      </Wrap>
    </Carousel>
  )
}

export default ImgSlider

const Carousel = styled(Slider)`
    margin-top : 20px;
    
    ul li button{
        &::before{
            color: rgb(150,158,171);
            font-size: 10px;
        }
    }

    li.slick-active button::before{
        color: white;
    }

    .slick-list{
        overflow: visible;
    }

    button{
        z-index: 1;
    }
`
const Wrap = styled.div`
    img{
        cursor:pointer;
        border: 6px solid transparent;
        width : 100%; 
        height : 100%;
        border-radius : 8px;
        box-shadow: rgb(0 0 0 /69%) 0px 26px 30px -10px,
        rgb(0 0 0 /73%) 0px 16px 10px -10px;
        transition-duration: 400ms;

        &:hover{
            border: 4px solid rgba(249,249,249,0.8);
        }
    }
`
 