import React from 'react'
import styled from 'styled-components'
import {Link} from "react-router-dom"
import {useSelector} from "react-redux"
import {selectNewDisney} from "../features/movie/movieSlice"


function NewDisney() {
  const movies = useSelector(selectNewDisney)
  return (
    <Container>
      <h4>New to Disney+</h4>
      <Content>
        {movies &&
         movies.map((movie, key) => (
            <Wrap key={key}>
                <Link to={`/detail/` + movie.id}>
                    <img src={movie.cardImg} alt={movie.id} />
                </Link>
            </Wrap>
        ))}
      </Content>
    </Container>
  )
}

export default NewDisney

const Container = styled.div`
    margin-top: 45px;
    margin-bottom: 50px;
`

const Content = styled.div`
    display: grid;
    grid-template-columns: repeat(4,minmax(0,1fr));
    grid-gap: 40px;
    @media (max-width:800px){
      grid-template-columns: repeat(2,minmax(0,1fr));
    }
`

const Wrap = styled.div`
    border: 4px solid rgba(152,151,23,0);
    border-radius : 10px;
    box-shadow: rgb(0 0 0 /69%) 0px 26px 30px -10px,
    rgb(0 0 0 /73%) 0px 16px 10px -10px;
    transition-duration:500ms;
    margin: 10px;
    img{
        width:100%;
        height: 100%;
        border-radius : 10px;
    }

    &:hover{
        box-shadow: rgb(0 0 0 /80%) 0px 40px 58px -16px,
        rgb(0 0 0 /72%) 0px 30px 22px -10px;
        cursor: pointer;
        transform: scale(1.05);
        border-color: rgba(249,249,249,0.8);
    }
    
`
