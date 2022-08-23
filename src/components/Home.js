import React , {useEffect} from 'react'
import styled from 'styled-components'
import ImgSlider from './ImgSlider'
import Viewers from './Viewers'
import Movies from './Movies'


function Home() {

  return (
    <Container>
      <ImgSlider/>
      <Viewers/>
      <Movies/>
    </Container>
  )
}

export default Home

const Container = styled.main`
    overflow-x: hidden;
    background : url("./images/home-background.png")  center center / cover
    no-repeat fixed;
    padding : 0 calc(3.5vw + 5px); 

`
//min-height : calc(100vh - 70px);