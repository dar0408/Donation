import logo from './logo.svg';
import './App.css';
import Nav from './Nav';
import Header2 from './Header2';
import Home from './Home';
import About from './About';
import Cause from './Cause';
import React from 'react';
import Frame from './Frame';
import News from './News';
import Footer from './Footer';
import Event from './Event';
import Ribbon from './images/ribbon-1402015_960_720.png';
import { Route,Routes,NavLink,Link } from 'react-router-dom';
import MainHeader from './MainHeader';
import Home2 from './Home2';


function App() {
  return (
    <div className="App">
      <Nav/>
      <Header2/>   
    
    </div>
  );
}

export default App;
