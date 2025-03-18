import React from 'react';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import {darkTheme} from './utils/Themes';  
import { BrowserRouter } from "react-router-dom";
import './App.css'
import Navbar from './components/Navbar';
import Hero from './components/section/hero';
import Skills from './components/section/Skills';
import Experience from './components/section/Experience';
import Projects from './components/section/Project';

import Contact from './components/section/Contact';
import Bottom from './components/section/Bottom';


const Body = styled.div`

   background-color: ${({theme}) => theme.bg};
   color: ${({theme}) => theme.text_primary};
   width: 100%;
   height: 90vh;
   overflow-x: hidden;
   position: relative;
`;
const Wrapper = styled.div`
  padding-bottom: 100px;
  background: linear-gradient(
      38.73deg,
      rgba(204, 0, 187, 0.15) 0%,
      rgba(201, 32, 184, 0) 50%
    ),
    linear-gradient(
      141.27deg,
      rgba(0, 70, 209, 0) 50%,
      rgba(0, 70, 209, 0.15) 100%
    );
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;
function App() {

   
  return (
    <ThemeProvider theme ={darkTheme}>
      <BrowserRouter>
        <Navbar />
        <Body>
           
            <Hero />
            <Wrapper>
            <Skills />
            <Experience />
            </Wrapper>
            <Projects />
            <Wrapper>
              
              <Contact />
            </Wrapper>
           <Bottom />
        </Body>
      </BrowserRouter>
    </ThemeProvider>
    
    
  )
}

export default App
