import React from 'react'
import styled from 'styled-components'

function Viewers() {
  return (
    <Container>
      <Wrap>
        <img src='/images/viewers-disney.png'></img>
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src='/videos/1564674844-disney.mp4' type='video/mp4'></source>
        </video>
      </Wrap>
      <Wrap>
        <img src='/images/viewers-marvel.png'></img>
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src='videos\1564676115-marvel.mp4'></source>
        </video>
      </Wrap>
      <Wrap>
        <img src='/images/viewers-national.png'></img>
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src='videos\1564676296-national-geographic.mp4'></source>
        </video>
      </Wrap>
      <Wrap>
        <img src='/images/viewers-pixar.png'></img>
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src='videos\1564676714-pixar.mp4'></source>
        </video>
      </Wrap>
      <Wrap>
        <img src='/images/viewers-starwars.png'></img>
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src='videos\1608229455-star-wars.mp4'></source>
        </video>
      </Wrap>
    </Container>
  )
}

export default Viewers

const Container = styled.div`
    margin-top: 60px;
    display: grid;
    grid-template-columns: repeat(5,minmax(0,1fr));
    grid-gap: 25px;
    @media (max-width:800px){
      grid-template-columns: repeat(2,minmax(0,1fr));
    }
`
const Wrap = styled.div`
    border: 3px solid rgba(249,249,249,0.1);
    border-radius : 10px;
    box-shadow: rgb(0 0 0 /69%) 0px 26px 30px -10px,
    rgb(0 0 0 /73%) 0px 16px 10px -10px;
    //transition: all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
    transition-duration:500ms;
    position: relative;
    

    img{
        inset: 0px;
        width: 100%;
        height: 100%;
        
    }

    video{
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      bottom:0;
      right: 0;
      left: 0;
      z-index: -1;
      border-radius:10px;
      opacity: 0;
    }

    &:hover{
        box-shadow: rgb(0 0 0 /80%) 0px 40px 58px -16px,
        rgb(0 0 0 /72%) 0px 30px 22px -10px;
        cursor: pointer;
        transform: scale(1.05);
        border-color: rgba(249,249,249,0.8);
        video{
          opacity: 1;
        }
    }
`
