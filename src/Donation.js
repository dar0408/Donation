import React from 'react'
import './Donation.css';
import { useState } from 'react';
// import Home from '../Headers';
// import App from '../App';
import { Link, Route,Routes } from 'react-router-dom';
// import Home2 from '../Home2';
// import Shop from '../FirstCard';
import { Outlet } from 'react-router-dom';


const Donation = () => {

    function submitfunct(){
        
        alert('Response Submitted');
    }
    return(

        
        <div className='centeredContainer'>
<div className="container1">
  <h2>Donation Form</h2>
<form onSubmit={submitfunct} action="http://localhost:8080/donation_done" method="post">
    <label htmlFor="firstName">First Name:</label>
    <input type="text"  id="firstName" name="firstName" required />
    <label htmlFor="lastName">Last Name:</label>
    <input type="text" id="lastName" name="lastName" required />
    <label htmlFor="phoneNumber">Phone Number:</label>
    <input type="tel" id="phoneNumber" name="phoneNumber" pattern="[0-9]{10}" required />
    <label htmlFor="donationAmount">Donation Amount (INR):</label>
    <input type="number" id="donationAmount" name="donationAmount" min={10} required />
    <label htmlFor="donationItem">Additional Item to Donate:</label>
    <textarea id="donationItem" name="donationItem" rows={3} defaultValue={""} />
    <label htmlFor="donationAddress">Pickup Address:</label>
    <textarea id="donationAddress" name="donationAddress" rows={4} required defaultValue={""} />
    <label htmlFor="city">City:</label>
    <input type="text" id="city" name="city" required />
    <label htmlFor="state">State:</label>
    <input type="text" id="state" name="state" required />
    <label htmlFor="postalCode">Postal/ZIP Code:</label>
    <input type="number" id="postalCode" name="postalCode" required />
    <label htmlFor="country">Country:</label>
    <input type="text" id="country" name="country" required />
    <button type="submit">Donate</button>
  </form>
</div>
</div>
    )
}


export default Donation