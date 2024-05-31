// COMP229 Assignment 1 Portfolio, Absar Siddiqui, 301396103, 05/30/2024

import './services.css';
import image from '../assets/background.png'

export default function ServicesPage() {
  return (
    <section>
      <div className='services'>
        <h1>What I do</h1>
        <div className="services-container">
          <div className="service">
            <h2>Web Development</h2>
            <p>I specialize in creating responsive and modern websites that provide a seamless user experience across all devices. My web development services include performance optimization to ensure fast loading times, and implementing SEO best practices to improve your site's visibility on search engines. Whether you need a simple landing page or a complex web application, I offer custom web development solutions tailored to meet your specific needs. Additionally, I can integrate and set up content management systems like WordPress and Joomla, making it easy for you to manage your website's content.
            </p>
          </div>
          <div className="service">
            <h2>Mobile Apps</h2>
            <p>I build user-friendly mobile applications that work seamlessly across both iOS and Android platforms. My approach to mobile app development focuses on delivering intuitive and engaging user experiences. I optimize performance to ensure your app runs smoothly, and provide integration with backend services for seamless connectivity. From conceptualization to deployment, I handle the entire process and can assist with publishing your app on Google Play and the App Store, ensuring it reaches your target audience effectively.
            </p>
          </div>
          <div className="service">
            <h2>Programming</h2>
            <p>I offer a range of programming services tailored to meet your specific needs. Whether you require custom software development, debugging and troubleshooting, or automation solutions, I provide expert programming support. I also offer consultation services to help you choose the best technologies and practices for your projects, and provide training and support to help your team stay up-to-date with the latest advancements in technology. My goal is to deliver high-quality, efficient, and maintainable code that drives your business forward.</p>
          </div>
        </div>
      </div>
    </section>

  )
}