import React from 'react'
import styled  from 'styled-components'

function Header() {
  return (
    <Nav>
      <Logo src="/images/logo.svg"/>
      <NavMenu>
        <a>
            <img src="images\home-icon.svg"/>
            <span>HOME</span>
        </a>
        <a>
            <img src="images\search-icon.svg"/>
            <span>SEARCH</span>
        </a>
        <a>
            <img src="images\watchlist-icon.svg"/>
            <span>WATCHLIST</span>
        </a>
        <a>
            <img src="images\original-icon.svg"/>
            <span>ORIGINALS</span>
        </a>
        <a>
            <img src="images\movie-icon.svg"/>
            <span>MOVIES</span>
        </a>
        <a>
            <img src="images\series-icon.svg"/>
            <span>SERIES</span>
        </a>
      </NavMenu>
      <Wrap>Eric</Wrap>
      <UserImg src="\images\240723121_4301681869915827_5728591322097657989_n.jpg"></UserImg>
    </Nav>
    
  )
}

export default Header

const Nav = styled.nav`
    height : 70px;
    background : #090b13;
    display : flex;
    align-items : center;
    padding : 0 36px;
`
const Logo = styled.img`
    cursor : pointer;
    width : 80px;
`
const NavMenu = styled.div`
    display : flex;
    flex : 1;
    margin-left : 25px;
    align-items : center;
    a{
        display : flex;
        align-items : center; 
        padding : 0 20px;
        cursor : pointer;
        
        img{
            height : 25px;
        }

        span{
            font-size : 13px;
            letter-spacing : 1.42px;
            position : relative;

            &:after{
                content : "";
                height : 1.5px;
                background : white;
                position : absolute;
                left : 0;
                right : 0;
                bottom : -5px;
                opacity : 0;
                transform : scaleX(0);
            }
        }

        &:hover{
            span:after{
                transform : scaleX(1);
                opacity : 1 ;
                transition : all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
            }
        }
    }
`

const UserImg = styled.img`
    width : 48px;
    height : 48px;
    border-radius : 50%;
    cursor : pointer;

    &:before{
        content: "Eric";
        color: white;
    }
`

const Wrap = styled.div`
    margin-right: 20px;
`
