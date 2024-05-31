// COMP229 Assignment 1 Portfolio, Absar Siddiqui, 301396103, 05/30/2024

import './contact.css';
import { Link } from 'react-router-dom';

export default function ContactPage() {

  return (
    <div id='contact'>
      <h1 className="contactPageTitle">Contact Me</h1>
      <span className='contactDesc'><a href="mailto:absarvpn@gmail.com">absarvpn@gmail.com</a><br />(437) 335-7701<br /> Toronto, Ontario</span>
      <span className="contactDesc">
        Please fill out the form below to discuss any work opportunities.</span>
      <form className="contactForm">
        <input name="text" className="name" placeholder='Full Name' />
        <input name="text" className="name" placeholder='Phone Number' />
        <input name="text" className="email" placeholder='Email' />
        <textarea className="msg" name="message" rows={5} placeholder='Message'></textarea>
        <Link to="/"><button type="submit" className='submitBtn'>Submit</button></Link>
      </form>
    </div>
  )
}
