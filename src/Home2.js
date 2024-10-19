import React from 'react';
import Nav from './Nav';
import Header from './Header2';
import Home from './Home';
import About from './About';
import Cause from './Cause';
import Frame from './Frame';
import News from './News';
import Footer from './Footer';
import Event from './Event';
import Ribbon from './images/ribbon-1402015_960_720.png';

import MainHeader from './MainHeader';

import { Outlet } from 'react-router-dom';
const Home2 = () => {
    return(
        <div> 
            {/* <Header/> */}
            
            <Home/>
            <About/>
            <Frame/>
            <Cause/>
            <Event/>
            <News/>
            <Footer/>
        </div>
    )
}
export default Home2;