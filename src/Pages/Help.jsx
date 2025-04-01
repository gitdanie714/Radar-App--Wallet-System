import React from 'react';
import '../styles/Help.css';

function Help() {
  return (
    <div className="main">
      <div className="help-container">
        <h1 className='help-title'>Help</h1>
      <p className="help-description">
        If you have any questions or need assistance, feel free to reach out to us!
      </p>
      
      <div className="contact-form-container">
        <h2 className="contact-title">Contact Us</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" placeholder="Your Name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="Your Email" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" placeholder="Your Message" rows="5"></textarea>
          </div>
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>

      </div> <div className=""></div>
    </div>
  );
}

export default Help;