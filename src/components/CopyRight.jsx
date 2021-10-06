import React from 'react';
import styled from "styled-components";
import {Ipad} from "../responsive";

const Container = styled.div`
    display:flex;
    justify-content:space-between;
    padding:18px;
    border-top:1px solid rgb(246 247 248);
    color:rgb(193 200 206);
`
const paragph = styled.p`
`
const Payment = styled.img`
    width:25%;
    ${Ipad({
        width:'40%',
    })}
`
const CopyRight = () => {
    return (
        <Container>
            <paragph> &Copy; 2021 Lorem Ipsum is simply dummy text</paragph>
            <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/> 
        </Container>
    )
}
export default CopyRight
