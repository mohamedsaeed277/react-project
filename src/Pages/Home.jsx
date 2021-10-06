import React from 'react';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import Sidebar from '../components/Sidebar';
import Slider from '../components/Slider';
import styled from 'styled-components';
import Parent from '../Parent';
import Footer from '../components/Footer';
import CopyRight from '../components/CopyRight';

const Container = styled.div``
const Separet = styled.div`
  display:flex;
`
const SeparetCulmn = styled.div`
  display:flex;
  flex-direction:column;
`

const Home = () => {
    return (
        <Container>
          <Navbar />
          <Newsletter />
          <Separet>
           <Sidebar />
           <SeparetCulmn>
           <Slider />
           <Parent />
           </SeparetCulmn>
          </Separet>
          <Footer />
          <CopyRight />
        </Container>
    )
}

export default Home
