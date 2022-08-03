import React from 'react'
import styled from 'styled-components'

function Detail() {
  return (
    <Container>
      <Background>
        <img src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4F39B7E16726ECF419DD7C49E011DD95099AA20A962B0B10AA1881A70661CE45/scale?width=1440&aspectRatio=1.78&format=jpeg'></img>
      </Background>
      <ImageTitle>
        <img src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D7AEE1F05D10FC37C873176AAA26F777FC1B71E7A6563F36C6B1B497CAB1CEC2/scale?width=1440&aspectRatio=1.78'></img>
      </ImageTitle>
      <Controls>
        <PlayButton>
            <img src='/images/play-icon-black.png'></img>
            <span>PLAY</span>
        </PlayButton>
        <TrailerButton>
            <img src='/images/play-icon-white.png'></img>
            <span>TRAILER</span>
        </TrailerButton>
        <AddButton>
            +
        </AddButton>
        <GroupButton>
            <img src='/images/group-icon.png'></img>
        </GroupButton>
      </Controls>
      <Subtitle>
        喜劇、動畫
      </Subtitle>
      <Description>
        包子動畫
      </Description>
    </Container>
  )
}

export default Detail

const Container = styled.div`
    position: relative;
`
const Background = styled.div`
    z-index: -1;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    img{
        height: 100%;
        width: 100%;
        object-fit: cover;
    }
`
const ImageTitle = styled.div`
    height: 30vh;
    width: 35vw;
    min-height: 170px;
    min-width: 200px;
    margin-top: 10vh;
    img{
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`

const Controls = styled.div`
    display: flex;
    align-items: center;
    margin-left:6vw;
    margin-top: 7vh;

`
const PlayButton =styled.button`
    border-radius: 4px;
    font-size: 15px;
    padding: 0px 24px;
    margin-right: 16px;
    display: flex;
    align-items: center;
    height:56px;
    background-color: rgb(249,249,249);
    border: none;
    letter-spacing: 1.5px;
    cursor: pointer;
    transition-duration: 250ms;
    &:hover{
        background-color: rgb(198,198,198);
    }
`

const TrailerButton = styled(PlayButton)`
    background-color: rgba(0,0,0,0.4);
    border: 1px solid rgb(249,249,249);
    color: rgb(249,249,249);
    &:hover{
        background-color: rgba(200,200,200,0.6);
    }
`

const AddButton = styled.button`
    width:44px;
    height: 44px;
    margin-right: 16px;
    font-size: 35px;
    border-radius: 50%;
    border:2px solid white;
    background: rgba(0,0,0,0.6);
    color: white;
    cursor: pointer;
    &:hover{
        background-color: rgba(230,230,230,0.6);
    }
`

const GroupButton = styled(AddButton)`
    background-color: rgba(0,0,0,0.9);
    img{
        width:100%;
        height: 100%;
        object-fit: cover;
    }
`

const Subtitle = styled.div`
    color:rgb(249,249,249);
    margin-left:6vw;
    margin-top: 25px;
    font-size: 15px;
    
`

const Description = styled.div`
    margin-left:6vw;
    margin-top: 16px;
    font-size: 18px;
`