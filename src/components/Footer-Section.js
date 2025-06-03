import React from 'react';
import logo from '../assets/footer-logo-1.png (1).png'; 
import contact from '../assets/icons8-call-30.png'
import location from '../assets/icons8-location-24.png'
import mail from '../assets/icons8-mail-24.png'

const FooterSection = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <img src={logo} alt="SUDO logo" />
        <p>
          SUDO Consultants the leading Cloud Solution Provider in the Middle East and the US market helps
          businesses to digitally transform their operations with the power of the cloud.
        </p>
      </div>

      <div className="footer-center">
        <h3>Resources</h3>
        <ul>
          <li>Regulatory Disclosures</li>
          <li>Privacy Policy</li>
          <li>Case Studies</li>
          <li>About Us</li>
        </ul>
      </div>

      <div className="footer-right">
        <div className='footer-item'>
            <img src={contact} alt='contact'></img>
              <p>+1 713.630.8390</p>
        </div>
         <div className='footer-item'>
            <img src={location} alt='location'></img>
               <p>3200 Southwest Fwy, Suite 2160 Houston, TX 77027</p>
        </div>
         <div className='footer-item'>
            <img src={mail} alt='mail'></img>
               <p>contact@sudoconsultants.com</p>
        </div>

      </div>
    </footer>
  );
};

export default FooterSection;

 