// COMP229 Assignment 1 Portfolio, Absar Siddiqui, 301396103, 05/30/2024

import { Link } from 'react-router-dom';
import './projects.css';
import study from '../assets/study.png';
import health from '../assets/health.png';
import estate from '../assets/estate.png';

export default function Project() {
  return (
    <div id="projectPage">
      <h1 className='projectPageTitle'>My Projects</h1>
      <div className="project-container">
        <div className="project">
          <img src={study} alt='Study logo' className="studyLogo"></img>
          <h2><br></br>My Study Planner</h2>
          <p>It is a digital platform designed to assist students in organizing and managing their study schedules effectively. It offers features such as creating personalized study plans, managing tasks and deadlines, receiving reminders for upcoming study sessions, and analyzing study patterns to optimize learning habits. The application aims to improve students' productivity and performance by providing a centralized platform for planning and tracking their academic progress. </p>
          <span><br />Programming Languages & Framework</span>
          <p>Javascript, HTML, Node.js, Python<br />Mobile App: iOS and Android </p>
        </div>
        <div className="project">
          <img src={health} alt="Health logo" className='healthLogo'></img>
          <h2><br></br>Mental Health App</h2>
          <p>A mobile application designed to provide resources, support, and tools for managing mental well-being. These apps often offer features such as mood tracking, meditation exercises, therapy sessions, educational content, and community support forums. Users can track their mental health progress, learn coping strategies, access professional guidance, and connect with others facing similar challenges. The goal of a mental health app is to promote self-care, reduce stigma surrounding mental health issues, and empower individuals to take control of their emotional wellness.</p>
          <span><br />Software used</span>
          <p>SQLite, NoSQL <br />Mobile Apps: iOS, Android</p>
        </div>
        <div className="project">
          <img src={estate} alt="Real Estate Logo" className='estateLogo'></img>
          <h2><br></br>Real Estate Website</h2>
          <p>An online platform designed to facilitate the buying, selling, renting, or leasing of properties such as houses and apartments. This website typically provide features such as property listings with detailed descriptions, photos, and virtual tours, neighborhood information, and contact forms for connecting with real estate agents or property owners. The primary goal of a Real Estate Website is to streamline the property search process, offer valuable information to potential buyers or renters, and facilitate transactions between parties involved in real estate transactions.</p>
          <span><br />Development</span>
          <p>VS Code, Node.js, HTML/CSS</p>
        </div>
      </div>

    </div>

  );
}