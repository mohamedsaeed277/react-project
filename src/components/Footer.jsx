import { Facebook, Instagram, LinkedIn, MailOutline, Phone, Room, Twitter } from "@material-ui/icons";
import styled from "styled-components";
import {Ipad} from "../responsive";
import {Mobile} from "../responsive";
import {Iphone} from "../responsive";


const Container = styled.div`
    display:flex;
    ${Ipad({
        flexDirection:'column',
        width:'220%'
    })}
`
const Left = styled.div`
    flex:1;
    display:flex;
    flex-direction:column;
    padding:20px;
`
const Logo = styled.h1``
const Image = styled.img`
`
const Desc = styled.p`
    margin:20px 0px;
    color:#545454;
`
const SocialContainer = styled.div`
    display:flex;
`
const SocialIcon = styled.div`
    width:40px;
    height:40px;
    border-radius:50%;
    color:white;
    margin:5px;
    cursor:pointer;
    display:flex;
    justify-content:center;
    align-items:center;
    background-color: #${props => props.color}
`

const Center = styled.div`
    flex:1;
    padding:20px;
    ${Iphone({
        display:'none'
    })}
`
const Title = styled.h3`
    margin-bottom:30px;
`
const List = styled.ul`
    margin:0;
    padding:0;
    list-style:none;
    display:flex;
    flex-wrap:wrap;
`
const ListItem = styled.li`
    width:50%;
    margin-bottom:10px;
`

const Right = styled.div`
    flex:1;
    padding:20px;
    ${Iphone({
        backgroundColor:'#fef9f9'
    })}
`
const ContactItem = styled.div`
    margin-bottom:20px;
    display:flex;
    align-items:center;
`

const Footer = () => {
    return (
        <Container>
           <Left>
             <Logo><Image src="https://mezostore.blob.core.windows.net/landing-page/Header-Logo-min.png" /> </Logo>
             <Desc>
             Dummies has always stood for taking on complex
              concepts and making them easy to understand.
               Dummies helps everyone be more knowledgeable.
             </Desc>
           </Left>
           <Center>
             <Title>Follow Us</Title>
             <Desc>Dummies has always stood for taking on complex Dummies has always stood.</Desc>
             <SocialContainer>
                <SocialIcon color="3B5999">
                    <Facebook/>    
                </SocialIcon>
                <SocialIcon color="E4405f">
                    <LinkedIn/>    
                </SocialIcon>
                <SocialIcon color="55ACEE">
                    <Instagram/>    
                </SocialIcon>
                <SocialIcon color="E60023">
                    <Twitter/>   
                </SocialIcon> 
             </SocialContainer>
           </Center>
           <Right>
              <Title>Contact</Title>
              <ContactItem>
                <Room style={{marginRight:"10px"}} />  Elshorouk City, Cairo, Egypt
              </ContactItem>
              <ContactItem>
                <Phone style={{marginRight:"10px"}} />  +201090881597
              </ContactItem>   
              <ContactItem>
                <MailOutline style={{marginRight:"10px"}} />  sfdsdfqwe@icloud.com
              </ContactItem>  
            </Right> 
        </Container>
    )
}

export default Footer;
