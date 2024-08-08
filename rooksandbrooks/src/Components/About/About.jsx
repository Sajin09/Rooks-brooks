import React, { useEffect } from 'react'
import AOS from 'aos';
import './About.css'
import about from '../../Asserts/silhouette-confident-businesspeople.jpg'

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);
  return (
    <>
      <div className='about-container'>
        <div className='about-info' data-aos="fade-down-right">
          <h3>
            We advance knowledge and solve complex problems through rigorous research, empowering clients with the insights needed to make informed decisions and achieve their goals.
          </h3>
        </div>
        <div className='about-image' data-aos="flip-left">
          <img src={about} alt="about" />
        </div>
        <div className='about-content' data-aos="fade-down-left">
          <p>
            At Rooks and Brooks, our vision is to design and build intelligent and sustainable solutions to societal needs that support businesses and individuals with affordable and easier services. We are specialized in research on strategic intelligence related to customer needs and experiences, focusing on evidence-based strategies, evaluations, performance measurement, and innovation. We have 20+ years of experience in market research and a strong team of curious research minds, delivering exclusive primary researched insights and recommendations for societal growth and expansion to our clients. The organization was created to build a community of individuals who are passionate about research and growing in their respective research journeys. Our solutions give clients a competitive edge by offering expertise in designing and developing customized strategies tailored to their specific needs. We focus on maximizing client satisfaction, maintaining quality, reducing risk, and raising research curiosity in society.
          </p>
        </div>
      </div>
    </>
  )
}

export default About
