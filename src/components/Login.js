import { toHaveStyle } from '@testing-library/jest-dom/dist/matchers'
import React from 'react'
import styled from 'styled-components'

function Login() {
  return (
    <Container>
      <CTA>
        <CTAlogoOne src="/images/cta-logo-one.svg"/>
        <SignUp>GET ALL THERE</SignUp>
        <Description>
        Get Premier Access to Raya and the Last Dragon for an additional fee with a Disney+ subscription. As of 03/26/21, the price of Disney+ and The Disney Bundle will increase by $1.
        </Description>
        <CTAlogoTwo src="/images/cta-logo-two.png"/>
      </CTA>
    </Container>
  )
}

export default Login

const Container = styled.div`

    &::before{
        background-image: url('/images/login-background.jpg');
        background-size:cover;
        background-position: top;
        content: "";
        position: fixed;
        right: 0px;
        left:0px;
        top:70px;
        bottom: 0px;
        z-index: -1;
        opacity: 0.8;
    }
`
const CTA = styled.div`
    max-width: 650px;
    position: relative;
    margin:100px auto ;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const CTAlogoOne = styled.img`

`

const SignUp = styled.a`
    text-align: center;
    font-weight: bolder;
    background-color: #0063e5;
    border-radius: 5px;
    padding: 15px 0px;
    margin-top: 10px;
    cursor: pointer;
    font-size: 18px;
    transition: 250ms;
    letter-spacing: 1.5px;
    width: 100%;
    &:hover{
        background-color: #0483ee;
    }
`

const Description = styled.div`
    margin-top: 10px;
    font-size: 11px;
    letter-spacing: 1.5px;
    text-align: center;
    line-height: 1.5;
`

const CTAlogoTwo = styled.img`
    margin-top:15px;
    width: 90%;
`