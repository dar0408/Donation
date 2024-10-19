import Image_1 from './images/layer_27.png';
import './Frame_1.css';
import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import Donation from './Donation';

function Frame() {
  return (
    <div>
      <div className="text-lg-start photu">
        <div className="container-fluid" style={{ padding: 0, margin: 0 }}>
          <div className="row" style={{ padding: 0, margin: 0 }}>
            <div className="col-lg-6 col-md-12 p-0">
              <img
                src={Image_1}
                className="img-fluid"
                style={{ objectFit: 'cover', maxHeight: '100%', width: '100%' }}
                alt="Nonprofit Team"
              />
            </div>
            <div className="col-lg-6 col-md-12 text-light p-4 d-flex align-items-center">
              <div>
                <p className="mt-4 mb-3 display-5 card-text" style={{ fontWeight: 800, fontFamily: '"Montserrat", sans-serif' }}>
                  WE ARE<br />NONPROFIT TEAM
                </p>
                <p className="card-text mb-4" style={{ fontFamily: '"Montserrat", sans-serif', fontWeight: 500 }}>
                  As a non-profit organization working to bring clean water to an Asian village, your mission is both noble and impactful. Here are some tailored steps and considerations to help you in your endeavor:
                </p>
                <Link
                  to="/Donation"
                  className="card-link btn btn-dark"
                  style={{ borderRadius: 26, fontWeight: 700 }}
                  role="button"
                >
                  Donate Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Routes>
        <Route path="/Donation" element={<Donation />} />
      </Routes>
    </div>
  );
}

export default Frame;
