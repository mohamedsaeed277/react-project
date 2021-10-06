import React from 'react';
import styled from 'styled-components';
import {Iphone} from "../responsive";


const Container = styled.div`
    background-color:rgb(246 247 248);
    margin-top:60px;
    margin-bottom:60px;
    padding:30px;
    display:flex;
    justify-content:center;
    align-items:center;
    ${Iphone({
        width:'200%'
      })}
`
const Paragrap = styled.span`
    color:rgb(16 174 183);
`

const Newsletter = () => {
    return (
        <Container>
            1-16 of 0ver 2,000 results for "<Paragrap>Laptop</Paragrap>"
        </Container>
    )
}

export default Newsletter
