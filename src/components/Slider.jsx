import React from 'react';
import styled from 'styled-components';
import {Apple} from '@material-ui/icons';
import {Lap} from "../responsive";
import {Ipad} from "../responsive";
import {Mobile} from "../responsive";
import {Iphone} from "../responsive";

const Container = styled.div`
    width:70%;
    height:300px;
    background-color:black;
    margin:0 3px 0 50px;
    display:flex;
    justify-content:center;
    align-items:center;
    ${Lap({
        width:'100%',
      })}
    ${Ipad({
        flexDirection:'column',
      })}
      ${Iphone({
        height:'360px'
      })}
`
const Left = styled.div``
const Image = styled.img`
    width:450px;
    ${Ipad({
        width:'300px'
      })}
`
const Right = styled.div`
    color:white;
    margin-left:-40px;
`
const Watch = styled.div`
    text-align:center;
    margin-bottom:10px;
`
const Title = styled.h2`
    text-align:center;
    margin-bottom:10px;
`
const ContainerButton = styled.div`
    text-align:center;
`
const ButtonSm = styled.button`
    border:none;
    border-radius:10px;
    background-color:rgb(1 113 227);
    color:white;
    cursor:pointer;
    padding:4px 8px;
`
const ButtonLg = styled.button`
    border:none;
    background-color:transparent;
    color:rgb(1 113 227);
    cursor:pointer;
`
const Slider = () => {
    return (
        <Container>
           <Left>
              <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2ogOsFQl6f8nTIrsYX846VH4vtsQu32EezA&usqp=CAU" />  
            </Left>
            <Right>
               <Watch>
               <Apple /> WATCH SERIES
               </Watch> 
               <Title>The future of health <br /> is on your Wrist.</Title>
               <ContainerButton>
                  <ButtonSm>Buy</ButtonSm>
                  <ButtonLg>Learn More &gt;</ButtonLg>
               </ContainerButton>
            </Right>
        </Container>
    )
}

export default Slider