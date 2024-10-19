import App from "./App";
import React, { useState } from 'react';

function Footer() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  function subHandler(event) {
    event.preventDefault(); 

    // Send the form data to the server
    fetch('http://localhost:8080/Contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json()) 
      .then((data) => {
        if (data.success) {
          alert('Form submitted successfully');
          // Clear the form data after successful submission
          setFormData({
            name: '',
            email: '',
            message: '',
          });
          // Additional logic if needed
        } else {
          console.error('Server returned an error:', data.error);
          alert('Error submitting form. Please try again.');
        }
      })
      .catch((error) => {
        console.error('Error submitting form: ', error);
        alert('Error submitting form. Please try again.');
      });
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

    return(
        
            <footer className="footer-section">
  <div className="container ">
    <div className="footer-cta py-5">
      <div className="row">
        <div className="col-sm-6 col-lg-4 mb-30">
          <div className="single-cta">
            <i className="fas fa-map-marker-alt" />
            <div className="cta-text">
              <h4>Find us</h4>
              <span>Punjab, Punjab-140506</span>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-4 mb-30">
          <div className="single-cta">
            <i className="fas fa-phone" />
            <div className="cta-text">
              <h4>Call us</h4>
              <span>+91123456789</span>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-4 mb-30">
          <div className="single-cta">
            <i className="fas fa-envelope-open" />
            <div className="cta-text">
              <h4>Mail us</h4>
              <span>mail@info.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="footer-content py-5">
      <div className="row">
        <div className="col-lg-4">
          <div className="footer-widget">
            <div className="footer-text">
              <p>Use of children’s information including images, videos, testimonials, etc. in the Campaign is necessary for creating awareness about the charitable cause in order to bring traction to the said charitable cause and obtain donations which can then be used for charitable activities.</p></div>
            <div className="footer-social-icon">
              <span>Follow us</span>
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f facebook-bg"  /></a>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter twitter-bg" /></a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram instagram-bg" /></a>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="footer-widget">
            <div className="footer-widget-heading">
              <h3>Useful Links</h3>
            </div>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Cause</a></li>
              <li><a href="#">Event</a></li>
              <li><a href="#">News</a></li>
              <li><a href="#">Contact</a></li>
              
            </ul>
          </div>
        </div>
        <div className="col-lg-4">
        <div className="footer-widget">
          <div className="footer-widget-heading">
            <h3>Contact Us</h3>
          </div>
          <div className="footer-text">
            {/* Your existing text */}
          </div>
          <div className="contact-form">
            <form onSubmit={subHandler} action="http://localhost:8080/Contact" method="post">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name} 
                onChange={handleInputChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleInputChange}
                required
              ></textarea>
              <button type="submit" >
                <i className="fab fa-telegram-plane" />
              </button>
            </form>
          </div>
        </div>
      </div>
      </div>
    </div>
  </div>

</footer>

        
    );
}
export default Footer;