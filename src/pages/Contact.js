import React from 'react';
import './ContactStyle.css'; // Make sure to import the CSS file

const Contact = () => {
  return (
    <>
     <div className="contact-page">
      <h1 className='C1'>Contact Us</h1>
      <form>
        <label>Name:</label>
        <input type="text" required />
        
        <label>Email:</label>
        <input type="email" required />
        
        <label>Message:</label>
        <textarea  rows="4" required></textarea>
        
        <button type="submit">Send Message</button>
      </form>
    </div>
   <br/> 
    
     
      <footer id="fc">
        2023-2024 © Copyright MyWay.tn. All Rights Reserved.
      </footer>
    </>
  );
};

export default Contact;
