// COMP229 Assignment 1 Portfolio, Absar Siddiqui, 301396103, 05/30/2024

import { Route, Routes } from 'react-router-dom';
import HomePage from './components/home.jsx';
import AboutPage from './components/about.jsx';
import ContactPage from './components/Contact.jsx';
import ServicesPage from './components/Services.jsx';
import ProjectsPage from './components/Projects.jsx';
import hanldeSubmit from './components/Contact.jsx';
import Layout from './components/layout.jsx';

const MainRouter = () => {
  return (
    <div>
      <Layout />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
    </div>
  )
}

export default MainRouter;