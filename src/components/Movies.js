import React ,{useEffect,useState} from 'react'
import styled, { useTheme } from 'styled-components'
import NewDisney from './NewDisney'
import Recommends from './Recommends'
import Originals from './Originals'
import Trending from './Trending'
import {Link} from "react-router-dom"
import {useDispatch,useSelector} from "react-redux"
import db from "../firebase"
import {setMovies} from "../features/movie/movieSlice"
import {selectUserName} from "../features/user/userSlice"



function Movies() {

  const dispatch = useDispatch()
  const userName = useSelector(selectUserName)
  let recommends = []
  let newDisney = []
  let originals = []
  let trending = []


  useEffect(()=>{
    db.collection("movies").onSnapshot((snapshot)=>{
      snapshot.docs.map(item=>{
        let data = item.data()
        data.id = item.id
        switch(item.data().type){
          case "recommend":
            recommends.push(data)
          case "new":
            newDisney.push(data)
            break;
          case "original":
            originals.push(data)
            break;
          case "trending":
            trending.push(data)
            break;
        }
      })
    
    dispatch(
      setMovies({
        recommend:recommends,
        newDisney:newDisney,
        original:originals,
        trending:trending
    }))
  })
  },[])

  return (
    <Container>
        <Recommends/>
        <NewDisney/>
        <Originals/>
        <Trending/>
    </Container>
  )
}

export default Movies

const Container = styled.div`
    
`