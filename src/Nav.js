import './Nav.css';
import React from 'react';

function Nav() {
  const handleLogout = () => {
    // Add your logout logic here, such as redirecting to a logout page or clearing user session
    alert('Logout button clicked!');
  };

  return (
    <section className="text-end pe-5 Images">
      <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
        <i className="fa-brands fa-facebook-f p-3" style={{ color: '#e6e7ea' }} />
      </a>
      <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
        <i className="fa-brands fa-twitter p-3" style={{ color: '#e6e7ea' }} />
      </a>
      <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
        <i className="fa-brands fa-linkedin-in p-3" style={{ color: '#e6e7ea' }} />
      </a>
      <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
        <i className="fa-brands fa-instagram p-3" style={{ color: '#e6e7ea' }} />
      </a>
      <a href="https://vine.co/" target="_blank" rel="noopener noreferrer">
        <i className="fa-brands fa-vine p-3" style={{ color: '#e6e7ea' }} />
      </a>
     
    </section>
  );
}

export default Nav;
