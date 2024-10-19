import './About.css';
import React from 'react';
import { Link } from 'react-router-dom';
import Image_1 from './images/ellipse_1.png';
import Image_2 from './images/ellipse_1_copy.png';
import Image_3 from './images/ellipse_1_copy_2.png';
import Image_4 from './images/ellipse_1_copy_3.png';

function About() {
  return (
    <section className="About pb-5">
      <div className="container">
        <p className="text-center fs-1 p-5" style={{ fontWeight: 800, fontFamily: '"Montserrat", sans-serif' }}>HOW COULD<spam className="text-danger"> YOU HELP ?</spam> </p>
      </div>
      <div className="container">
        <div className="row text-center">
          {/* Image 1 */}
          <div className="col-sm-12 col-md-3 col-lg-3">
            <Link to="/" className="image-link">
              <div className="image-container">
                <img src={Image_1} className="img-fluid rounded-circle border border-grey p-2" alt="Expertise Skill" />
                
              </div>
            </Link>
            <p className="align-text fs-4 mt-3" style={{ fontWeight: 800, fontFamily: '"Montserrat", sans-serif' }}>Expertise Skill</p>
            <p className="align-text" style={{ fontFamily: '"Montserrat", sans-serif', fontWeight: 500 }}>
            Navigating the digital landscape, I can guide your audience through the seamless process of making online donations.I specialize in demystifying the online giving experience.
              {/* I can explain various methods for making donations, such as online donations, bank transfers, check payments, and cryptocurrency donations. */}
            </p>
          </div>

          {/* Repeat similar structure for other images */}
          {/* Image 2 */}
          <div className="col-sm-12 col-md-3 col-lg-3">
            <Link to="/" className="image-link">
              <div className="image-container">
                <img src={Image_2} className="img-fluid rounded-circle border border-grey p-2" alt="Expertise Skill" />
                
              </div>
            </Link>
            <p className=" align-text fs-4 mt-3" style={{fontWeight: 800, fontFamily: '"Montserrat", sans-serif'}}>Give Inspiration</p>
            <p className="align-text" style={{fontFamily: '"Montserrat", sans-serif', fontWeight: 500}}>
              Donations have the power to change the lives of individuals and entire communities. Your contribution can provide education, healthcare.
            </p>      
          </div>
          {/* Image 3 */}
          <div className="col-sm-12 col-md-3 col-lg-3">
            <Link to="/" className="image-link">
              <div className="image-container">
                <img src={Image_3} className="img-fluid rounded-circle border border-grey p-2" alt="Expertise Skill" />
                
              </div>
            </Link>
            <p className="align-text fs-4 mt-3" style={{ fontWeight: 800, fontFamily: '"Montserrat", sans-serif' }}>Expertise Skill</p>
            <p className="align-text" style={{ fontFamily: '"Montserrat", sans-serif', fontWeight: 500 }}>
            Traditional yet enduring, check payments are an integral part of fundraising. I possess the skill to articulate the simplicity of this method, emphasizing the importance.
              {/* I can explain various methods for making donations, such as online donations, bank transfers, check payments, and cryptocurrency donations. */}
            </p>
          </div>
          {/* Image 4 */}
          <div className="col-sm-12 col-md-3 col-lg-3">
            <Link to="/" className="image-link">
              <div className="image-container">
                <img src={Image_4} className="img-fluid rounded-circle border border-grey p-2" alt="Expertise Skill" />
                
              </div>
            </Link>
            <p className=" align-text fs-4 mt-3" style={{fontWeight: 800, fontFamily: '"Montserrat", sans-serif'}}>Give Inspiration</p>
            <p className="align-text" style={{fontFamily: '"Montserrat", sans-serif', fontWeight: 500}}>
            Every act of kindness, no matter how small, has the power to create a ripple effect. Join us in weaving a tapestry of hope and transformation. Your generosity is the key that unlocks a brighter tomorrow.
              {/* Donations have the power to change the lives of individuals and entire communities. Your contribution can provide education, healthcare. */}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
