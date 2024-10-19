import './Cause.css';
import Image_1 from './images/rectangle_3_copy.jpg';
import Image_2 from './images/rectangle_3.jpg';
import Image_3 from './images/rectangle_3_copy.jpg';
import Image_4 from './images/rectangle_3_2.jpg';
import Image_5 from './images/rectangle_3_copy.jpg';
import Image_6 from './images/rectangle_3_3.jpg';
import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import Donation from './Donation';
function Cause(){
    return(
        
            <section className="Cause pb-5">
  <div className="conatiner">
    <p className="text-center fs-1 p-5" style={{fontWeight: 800, fontFamily: '"Montserrat", sans-serif'}}>FEATURED <span className="text-danger">CAUSES</span></p>
  </div>
  <div className="container">
    <div className="row">
  <div className="col-sm-12 col-md-4 col-lg-4">
  <div className="card" style={{ textAlign: 'center' }}>
    <img src={Image_1} alt="rectangle" className="img-fluid" />
    <div className="card-img-overlay" style={{ padding: 0, margin: 0 }}>
      <div className="card-body text-light abc" style={{ padding: 0, margin: 0 }}>
        <div className="card-img">
          <img src={Image_2} className="img-fluid" />
          <div className='card-img-overlay' style={{ paddingTop: 210, pointerEvents: 'none' }}>
            <div className="progress" style={{ borderRadius: 30, padding: 15, background: 'rgb(255, 255, 255)' }}>
              <div className="progress-bar bg-danger " style={{ width: '30%', height: 20 }} />
              <div className="progress-bar " style={{ width: '70%', height: 20, backgroundColor: '#dfe0e1' }} />
              <span className="text-dark" style={{ fontWeight: 700, fontFamily: '"Montserrat", sans-serif' }}>30%</span>
            </div>
          </div>
        </div>
        <p style={{ fontWeight: 400, fontFamily: '"Montserrat", sans-serif', paddingTop: 15 }}>Raised: $300,000 Goal: $800,000</p>
        <p className="text-center fs-4" style={{ fontWeight: 800, fontFamily: '"Montserrat", sans-serif' }}>Africa Children Need<br />More Food, Water And<br />Clothes</p>
        <div className="text-center">
          <Link to="/Donation" className="card-link btn btn-dark" style={{ borderRadius: 26, fontWeight: 700, position: 'relative', zIndex: 1 }} role="button">Donate Now</Link>
        </div>
      </div>
    </div>
  </div>
</div>

<div className="col-sm-12 col-md-4 col-lg-4">
  <div className="card" style={{ textAlign: 'center' }}>
    <img src={Image_3} alt="rectangle" className="img-fluid" />
    <div className="card-img-overlay" style={{ padding: 0, margin: 0 }}>
      <div className="card-body text-light abc" style={{ padding: 0, margin: 0 }}>
        <div className="card-img">
          <img src={Image_4} className="img-fluid" />
          <div className='card-img-overlay' style={{ paddingTop: 210, pointerEvents: 'none' }}>
            <div className="progress" style={{ borderRadius: 30, padding: 15, background: 'rgb(255, 255, 255)' }}>
              <div className="progress-bar bg-danger " style={{ width: '30%', height: 20 }} />
              <div className="progress-bar " style={{ width: '70%', height: 20, backgroundColor: '#dfe0e1' }} />
              <span className="text-dark" style={{ fontWeight: 700, fontFamily: '"Montserrat", sans-serif' }}>30%</span>
            </div>
          </div>
        </div>
        <p style={{ fontWeight: 400, fontFamily: '"Montserrat", sans-serif', paddingTop: 15 }}>Raised: $300,000 Goal: $800,000</p>
        <p className="text-center fs-4" style={{ fontWeight: 800, fontFamily: '"Montserrat", sans-serif' }}>Africa Children Need<br />More Food, Water And<br />Clothes</p>
        <div className="text-center">
        <Link to="/Donation" className="card-link btn btn-dark" style={{ borderRadius: 26, fontWeight: 700, position: 'relative', zIndex: 1 }} role="button">Donate Now</Link>
        </div>
      </div>
    </div>
  </div>
</div>

<div className="col-sm-12 col-md-4 col-lg-4">
  <div className="card" style={{ textAlign: 'center' }}>
    <img src={Image_5} alt="rectangle" className="img-fluid" />
    <div className="card-img-overlay" style={{ padding: 0, margin: 0 }}>
      <div className="card-body text-light abc" style={{ padding: 0, margin: 0 }}>
        <div className="card-img">
          <img src={Image_6} className="img-fluid" />
          <div className='card-img-overlay' style={{ paddingTop: 210, pointerEvents: 'none' }}>
            <div className="progress" style={{ borderRadius: 30, padding: 15, background: 'rgb(255, 255, 255)' }}>
              <div className="progress-bar bg-danger " style={{ width: '30%', height: 20 }} />
              <div className="progress-bar " style={{ width: '70%', height: 20, backgroundColor: '#dfe0e1' }} />
              <span className="text-dark" style={{ fontWeight: 700, fontFamily: '"Montserrat", sans-serif' }}>30%</span>
            </div>
          </div>
        </div>
        <p style={{ fontWeight: 400, fontFamily: '"Montserrat", sans-serif', paddingTop: 15 }}>Raised: $300,000 Goal: $800,000</p>
        <p className="text-center fs-4" style={{ fontWeight: 800, fontFamily: '"Montserrat", sans-serif' }}>Africa Children Need<br />More Food, Water And<br />Clothes</p>
        <div className="text-center">
        <Link to="/Donation" className="card-link btn btn-dark" style={{ borderRadius: 26, fontWeight: 700, position: 'relative', zIndex: 1 }} role="button">Donate Now</Link>
        </div>
      </div>
    </div>
  </div>
</div>



    </div>
  </div>
  <Routes>
        <Route path="/Donation" element={<Donation />} />
      </Routes>
</section>

        
    );
};
export default Cause;