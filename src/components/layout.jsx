// COMP229 Assignment 1 Portfolio, Absar Siddiqui, 301396103, 05/30/2024

import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'
import './navbar.css';

export default function Layout() {
  return (
    <>
      <nav className="navbar">
        <img src={logo} alt="logo" className='logo'></img>
        <div className="desktopMenu">
          <Link className="desktopMenuListItem" to="/">Home</Link>
          <Link className="desktopMenuListItem" to="/about">About</Link>
          <Link className="desktopMenuListItem" to="/projects">Projects</Link>
          <Link className="desktopMenuListItem" to="/services">Services</Link>
          <Link className="desktopMenuListItem" to="/contact">Contact</Link>
        </div>
      </nav>

    </>
  )
}