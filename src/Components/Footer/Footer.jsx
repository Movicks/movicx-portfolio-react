import { } from 'react';
import './Footer.css'
import {} from '@mui/material'
import { Call, FacebookRounded, GitHub, LinkedIn, Mail, Twitter, YouTube } from '@mui/icons-material'



const Footer = () => {
  return (
    <>
    <div className='footer1_container'>
     <footer>
     <h1 className="heading">Quick<span> Links</span></h1>
         <div className='footer-container md:flex align-center'>
             <div className='sec about_us'>
              <h2>About Me</h2>
              <p>I enjoy building interactive and responsive webpages that makes my clients happy.</p>
              <ul className='sci flex'>
                <li><a href='https://'><FacebookRounded/></a></li>
                <li><a href='https://'><Twitter/></a></li>
                <li><a href='https://'><LinkedIn/></a></li>
                <li><a href='https://github.com/Movicks'><GitHub/></a></li>
                <li><a href='https://'><YouTube/></a></li>
              </ul>
             </div>
             <div className='sec quickLinks'>
                <h2>Communities</h2>
                <ul className=''>
                  <li><a href='#'>CrazyDevs</a></li>
                  <li><a href='#'>CodaxLab</a></li>
                </ul>
             </div>
             <div className='sec quickLinks'>
                 <h2>Pay methods</h2>
                 <ul className=''>
                  <li><a href='#'>PayPal</a></li>
                  <li><a href='#'>Payoneer</a></li>
                  <li><a href='#'>Bitcoin</a></li>
                 </ul>
             </div>
             <div className='sec contact_us'>
                <h2>Contacts</h2>
                <ul className='info'>
                  <li><Call className='span'/><a href='tel:+2349039062234'>+2349039062234</a></li>
                  <li><Mail className='span'/><a href='mailto:victoride013@gmail.com'>victoride013@gmail.com</a></li>
                </ul>
             </div>
         </div>
     </footer>
     <div className='copyrightText text-center'>
         <p>CopyRights &copy;2022 Portfolio figma. All Rights Reserved.</p>
     </div>
    </div> 
    </>
  );
}

export default Footer;
