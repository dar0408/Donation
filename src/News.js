// Import your images and React// Import your images and React
import Image_1 from './images/ellipse_1_copy_4_4.png';
import Image_2 from './images/ellipse_1_copy_4_3.png';
import Image_3 from './images/ellipse_1_copy_4_2.png';
import Image_4 from './images/ellipse_1_copy_4.png';
import React from 'react';
import './News.css'; // Import the CSS file

function News() {
  return (
    <section className="News pb-5">
      <div className="container">
        <div className="row text-center">
          <p className="fs-1 py-5" style={{ fontWeight: 600, fontFamily: '"Montserrat", sans-serif' }}>
            BEST<spam className="text-danger"> VOLUNTEER</spam>{' '}
          </p>
        </div>
        <div className="container">
          <div className="row text-center">
            <div className="col-sm-12 col-md-3 col-lg-3 col-12 volunteer-card">
              <img src={Image_1} className="img-fluid rounded-circle border border-black p-2" alt="Volunteer 1" />
              <h3 className="text-danger " style={{ fontWeight: 800, fontFamily: '"Montserrat", sans-serif' }}>
                Henamontara
              </h3>
              <h5 className>VOLUNTEER</h5>
            </div>
            <div className="col-sm-12 col-md-3 col-lg-3 col-12 volunteer-card">
              <img src={Image_2} className="img-fluid rounded-circle border border-black p-2" alt="Volunteer 2" />
              <h3 className="text-danger " style={{ fontWeight: 800, fontFamily: '"Montserrat", sans-serif' }}>
                JOHN DEO
              </h3>
              <h5 className>VOLUNTEER</h5>
            </div>
            <div className="col-sm-12 col-md-3 col-lg-3 col-12 volunteer-card">
              <img src={Image_3} className="img-fluid rounded-circle border border-black p-2" alt="Volunteer 3" />
              <h3 className="text-danger " style={{ fontWeight: 800, fontFamily: '"Montserrat", sans-serif' }}>
                Adam Rao
              </h3>
              <h5 className>VOLUNTEER</h5>
            </div>
            <div className="col-sm-12 col-md-3 col-lg-3 col-12 volunteer-card">
              <img src={Image_4} className="img-fluid rounded-circle border border-black p-2" alt="Volunteer 4" />
              <h3 className="text-danger " style={{ fontWeight: 800, fontFamily: '"Montserrat", sans-serif' }}>
                Andina
              </h3>
              <h5 className>VOLUNTEER</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default News;
