import Home2 from './Home2';
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
import React from 'react';
import Donation from './Donation';

import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
function Header2(){
    return(
        <Router>
        
            
<div className="header">
  <nav className="navbar navbar-expand-lg navbar-light px-4">
    <div className="container-fluid">
      <div className="ps-3 navbar-brand">
  <Link to="/">
    <img src={Ribbon} alt="Logo" className="img-fluid" style={{ verticalAlign: 'text-bottom' }} />
    <p className="d-inline-block align-text ps-3">
      <span className="text-danger fs-4" style={{ fontWeight: 700, fontFamily: '"Montserrat", sans-serif' }}>
        NON PROFIT
      </span>
      <br className="d-inline-block" />
      <span className="fs-5" style={{ fontWeight: 500, fontFamily: '"Montserrat", sans-serif', color: 'black' }}>
        ORGANISATION
      </span>
    </p>
  </Link>
</div>

      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-lg-0 fs-5 text-center " style={{fontWeight: 550}}>
          <li className="nav-item px-3">
            <Link to="/" className="nav-link active">Home</Link>
          </li>
          <li className="nav-item px-3">
            <Link to={"/About"} className="nav-link active">About</Link>
          </li>
          <li className="nav-item px-3">
            <Link to={"/Cause"} className="nav-link active">Cause</Link>
          </li>
          <li className="nav-item px-3">
            <Link to={"/Event"} className="nav-link active">Event</Link>
          </li>
          <li className="nav-item px-3">
            <Link to={"/News"} className="nav-link active">News</Link>
          </li>
          <li className="nav-item px-3">
            <Link to={"/Footer"} className="nav-link active">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <Routes>
      <Route exact path="/" element={<Home2 />} />
			<Route exact path="/About" element={<About/>}/>
      <Route exact path="/Cause" element={<Cause/>}/>
      <Route exact path="/Event" element={<Event/>}/>
      <Route exact path="/News" element={<News/>}/>
      <Route exact path="/Footer" element={<Footer/>}/>
      <Route exact path="/Donation" element={<Donation/>}/>
      <Route path="*" element={<div className='bg-danger display-2  pt-5 pb-5 text-center'>404 Page not found</div>} />
		
	</Routes>
</div> 

        </Router>
            
        
    );
}
export default Header2;