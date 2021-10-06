import { ShoppingCart, Phone, Search } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';
import {Ipad} from "../responsive";
import {Mobile} from "../responsive";
import {Iphone} from "../responsive";


const Container = styled.div`
    background-color:#113f87;
    height:200px;
    ${Ipad({
      height:'300px'
    })}
    ${Iphone({
      width:'215%'
    })}
`
const Wrapper = styled.div`
    display:flex;
    justify-content:space-around;
    color:white;
    padding:30px;
    ${Ipad({
      flexDirection:'column',
      alignItems:'center'
    })}

`
const Left = styled.div`
    display:flex;
    align-items:center;
    ${Ipad({
      marginBottom:'30px'
    })}
  `
const Image = styled.img``

const Right = styled.div`
    display:flex;
    flex-direction:column;
`
const Top = styled.div`
   display:flex;
`
const Paragraph = styled.p`
    display:flex;
    justify-content:space-between;
    align-items:center;
    ${Mobile({
      display:'none'
    })}
`
const OrderList = styled.ul`
    display:flex;
    justify-content:space-between;
    align-items:center;
`
const ListStyle = styled.li`
    list-style:none;
    margin-left:20px;
    cursor:pointer;
    ${Ipad({
      fontSize:'13px'
    })}
`
const ParNumber = styled.div`
    display:flex;
    align-items:center;
`
const Number = styled.span`
    margin-left:8px
`
const Center = styled.div`
    margin-top:25px;
    display:flex;
`
const SearchContainer = styled.div`
    border:1px solid lightgray;
    border-radius:5px;
    background-color:white;
    width:360px;
    display:flex;
    align-items:center;
    padding:9px 20px;
    margin-right:12px;
    ${Mobile({
      width:'270px'
    })}
`
const Input = styled.input`
    border:none;
    outline:none;
`
const Button = styled.button`
    border:none;
    border-radius:2px;
    background-color:#60a5ca;
    display:flex;
    align-items:center;
    color:white;
    padding:10px 20px;
    cursor:pointer;
`
const ButtonSm = styled.button`
    border:none;
    background-color:#0078b1;
    display:flex;
    align-items:center;
    color:white;
    padding:10px 20px;
    cursor:pointer;
`

const Bottom = styled.div`
    margin-top:25px;
    ${Mobile({
      marginLeft:'50px'
    })}
`
const Select = styled.select`
    background-color:transparent;
    outline:none;
    border:none;
    color:white
`
const Option = styled.option``

const Navbar = () => {
    return (
        <Container>
          <Wrapper>
            <Left>
              <Image src="https://mezostore.blob.core.windows.net/landing-page/Header-Logo-min.png" />  
            </Left>
            <Right>
              <Top>
                <Paragraph>Lorem Ipsum</Paragraph>
                <OrderList>
                <ListStyle>
                  <ParNumber>
                  <Phone /> <Number>080-97653890</Number>
                  </ParNumber>
                </ListStyle>
                  <ListStyle>Shipping</ListStyle>
                  <ListStyle>Blog</ListStyle>
                  <ListStyle>Company</ListStyle>
                  <ListStyle>My account</ListStyle>
                </OrderList>
              </Top>
              <Center>
                <SearchContainer>
                  <Search style={{color:'Gray', fontSize:'18px'}} />
                  <Input placeholder="Search" />
                </SearchContainer>
                <Button>
                  <ShoppingCart />
                  MY CART
                </Button>
                <ButtonSm>
                  12
                </ButtonSm>
              </Center>
              <Bottom>
                <Select>
                  <Option disabled selected>Super Deals</Option>  
                    <Option>Super Deals 1</Option>  
                    <Option>Super Deals 2</Option>  
                  </Select>
                  <Select>
                  <Option disabled selected>Featured Brands</Option>  
                    <Option>Featured Brands 1</Option>  
                    <Option>Featured Brands 2</Option>  
                  </Select>
                  <Select>
                  <Option disabled selected>Collections</Option>  
                    <Option>Collections 1</Option>  
                    <Option>Collections 2</Option>  
                  </Select>
                  <Select>
                  <Option disabled selected>Bestelling</Option>  
                    <Option>Bestelling 1</Option>  
                    <Option>Bestelling 2</Option> 
                  </Select>
              </Bottom>
            </Right>
          </Wrapper>  
        </Container>
    )
}
export default Navbar
