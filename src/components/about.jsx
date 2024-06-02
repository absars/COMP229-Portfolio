// COMP229 Assignment 1 Portfolio, Absar Siddiqui, 301396103, 05/30/2024

import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'
import './about.css';
import bg from '../assets/image.png'


export default function HomePage() {
  return (
    <section id="about">
      <div className="aboutContent">
        <span className="hello">Hello,</span>
        <span className="aboutText">I'm <span className="aboutName">Absar Siddiqui-Atta</span><br />Software Engineer</span>
        <p className="aboutPara">I am a software engineering student with experience in various programming languages
          <br /> and web development. My skills include proficiency in languages such as Python, Java,
          <br /> and JavaScript, as well as experience in building and maintaining websites. <br />
          I am passionate about technology and continuously seek to expand my knowledge<br /> and expertise in the field.</p>
      </div>
      <div> 
        <a href='./Resume.pdf' target='_blank'><button className="aboutBtn">Resume</button></a>
      </div>
      <img src={bg} alt="Profile" className="bg" />
    </section>
  )
}
