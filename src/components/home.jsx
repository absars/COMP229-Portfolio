// COMP229 Assignment 1 Portfolio, Absar Siddiqui, 301396103, 05/30/2024

import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import btnImg from '../assets/hireme.png';
import './home.css';

export default function HomePage() {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="welcome">Welcome</span>
        <span className="introText">I am Absar Siddiqui</span>
        <p className="introPara">As a passionate software engineering student, my mission is to blend creativity with technical skills to build software that makes life better for everyone. I'm dedicated to learning and growing every day, and I believe in solving problems with integrity and innovation. By working hard and collaborating with others, I aim to create meaningful and reliable software that has a positive impact. My goal is to be a part of a vibrant and inclusive tech community, where we can all learn from each other and push the boundaries of what's possible.</p>
      </div>
      <Link to="/about"><button className="btn">About Me</button></Link>
    </section>
  )
}
