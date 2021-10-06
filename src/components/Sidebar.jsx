import React from 'react';
import styled from 'styled-components';
import Box from '@material-ui/core/Box';
import Slider from '@material-ui/core/Slider';
import { pink } from '@material-ui/core/colors';
import Radio from '@material-ui/core/Radio';
import {Rating} from '@material-ui/lab';
import { makeStyles } from '@material-ui/core/styles';

const Container = styled.div``
const Wrapper = styled.div`
    flex:1;
`
const Accesories = styled.div`
    background-color:rgb(246 247 248);
    padding:20px;
    margin-bottom:30px;
`
const Title = styled.h3`
    margin-bottom:14px;
`
const OrderList = styled.ul`
    margin-left:-38px;
`
const ListStyle = styled.li`
    list-style:none;
    cursor:pointer;
    display:flex;
    justify-content:space-between;
    margin-bottom:14px;

    &:hover{
        color:rgb(16 174 183);
    }
`
const Lorem = styled.span``

const Price = styled.div`
    background-color:rgb(246 247 248);
    padding:20px;
    margin-bottom:30px;
`
const Colors = styled.div`
    background-color:rgb(246 247 248);
    padding:20px;
    margin-bottom:30px;
`
const Brand = styled.div`
    background-color:rgb(246 247 248);
    padding:20px;   
    margin-bottom:30px;
`
const Ratting = styled.div`
    background-color:rgb(246 247 248);
    padding:20px;   
    margin-bottom:30px;
`
const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      '& > * + *': {
        marginTop: theme.spacing(1),
      },
    },
  }));
const Button = styled.button`
    background-color:rgb(246 247 248);
    padding:20px 108px;
    border:none;
    cursor:pointer;
    font-size:16px;
`


function valuetext(value) {
    return `${value}°C`;
  }

const Sidebar = () => {
    // For Make Ranger
    const [value, setValue] = React.useState([20, 100]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    //For Choose Color
    const [selectedValue, setSelectedValue] = React.useState('a');

    const handleChange2 = (event) => {
      setSelectedValue(event.target.value);
    };
  
    const controlProps = (item) => ({
      checked: selectedValue === item,
      onChange: handleChange2,
      value: item,
      name: 'color-radio-button-demo',
      inputProps: { 'aria-label': item },
    });

   // For Make Rating
    const classes = useStyles();

    return (
        <Container>
          <Wrapper>
            <Accesories>
               <Title>ACCESORIES</Title> 
               <OrderList>
                  <ListStyle>
                     <Lorem>Lorem Ipsum</Lorem> 
                     <Lorem>2</Lorem> 
                  </ListStyle> 
                  <ListStyle>
                     <Lorem>Lorem Ipsum</Lorem> 
                     <Lorem>23</Lorem> 
                  </ListStyle> 
                  <ListStyle>
                     <Lorem>Lorem Ipsum</Lorem> 
                     <Lorem>22</Lorem> 
                  </ListStyle> 
                  <ListStyle>
                     <Lorem>Lorem Ipsum</Lorem> 
                     <Lorem>25</Lorem> 
                  </ListStyle> 
                  <ListStyle>
                     <Lorem>Lorem Ipsum</Lorem> 
                     <Lorem>27</Lorem> 
                  </ListStyle> 
                  <ListStyle>
                     <Lorem>Lorem Ipsum</Lorem> 
                     <Lorem>28</Lorem> 
                  </ListStyle> 
                  <ListStyle>
                     <Lorem>Lorem Ipsum</Lorem> 
                     <Lorem>29</Lorem> 
                  </ListStyle> 
               </OrderList>
            </Accesories>
            <Price>
              <Title>PRICES</Title>
              <OrderList>
                <ListStyle>
                    <Lorem>Ranger</Lorem> 
                    <Lorem>$13.99 - $25.99</Lorem> 
                </ListStyle>  
              </OrderList>
              <Box sx={{ width: 200 }}>
                <Slider
                 getAriaLabel={() => 'Temperature range'}
                 value={value}
                 onChange={handleChange}
                 valueLabelDisplay="auto"
                 getAriaValueText={valuetext}
                />
              </Box>
            </Price>
            <Colors>
              <Title>COLOR</Title>
              <div>
                <Radio {...controlProps('a')} style={{color:'red'}} />
                <Radio {...controlProps('b')} color="secondary" style={{color:'blue'}} />
                <Radio {...controlProps('c')} color="success" style={{color:'black'}} />
                <Radio {...controlProps('d')} color="default" style={{color:'yellow'}} />
                <Radio  style={{color:'green'}}
                    {...controlProps('e')}
                    sx={{
                    color: pink[800],
                    '&.Mui-checked': {
                        color: pink[600],
                    },
                    }}
                />
             </div>
            </Colors>
            <Brand>
              <Title>BRAND</Title> 
              <OrderList>
                <ListStyle>
                    <Lorem>Lorem Ipsum</Lorem> 
                    <Lorem>99</Lorem> 
                </ListStyle> 
                <ListStyle>
                    <Lorem>Lorem Ipsum</Lorem> 
                    <Lorem>99</Lorem> 
                </ListStyle> 
                <ListStyle>
                    <Lorem>Lorem Ipsum</Lorem> 
                    <Lorem>99</Lorem> 
                </ListStyle> 
                <ListStyle>
                    <Lorem>Lorem Ipsum</Lorem> 
                    <Lorem>99</Lorem>
                </ListStyle> 
               </OrderList>
            </Brand>
            <Ratting>
              <Title>RATING</Title>
              <div className={classes.root}>
                <Rating name="size-large" defaultValue={5} size="large" />
                <Rating name="size-large" defaultValue={4} size="large" />
                <Rating name="size-large" defaultValue={3} size="large" />
                <Rating name="size-large" defaultValue={2} size="large" />
              </div>
            </Ratting>
            <Button>MORE</Button>
          </Wrapper>  
        </Container>
    )
}

export default Sidebar
