import React, {useEffect} from 'react';
import AOS from 'aos';
import './Contact.css';
import { IoIosMail } from "react-icons/io";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <div className='form-map-container row'>
        <h1>How can we assist You?</h1>
        <div className='form-content col-lg-6 col-md-6 col-sm-12' data-aos="flip-left">
          <div className='form-container'>
            <h1 className='fb'>Feedback Here</h1>
            <form className='form' onSubmit={handleSubmit}>
              <div className='form-group'>
                <label htmlFor='email'>Your Email</label>
                <input
                  required
                  name='email'
                  id='email'
                  type='email'
                  placeholder='Enter your company email'
                />
              </div>
              <div className='form-group'>
                <label htmlFor='textarea'>How Can We Help You?</label>
                <textarea
                  required
                  id='textarea'
                  name='textarea'
                  placeholder='Tell us more about your needs'
                  className='custom-textarea'
                ></textarea>
              </div>
              <button type='submit' className='form-submit-btn'>Submit</button>
            </form>
          </div>
        </div>
        <div className='map-container col-lg-6 col-md-6 col-sm-12' data-aos="flip-right">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1660.5053487415987!2d77.4151705675602!3d8.165472484881372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b04f1b77ceb8b93%3A0xf54554731330fc55!2sRooks%20and%20Brooks%20technologies%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1723004654246!5m2!1sen!2sin"
            title="Company Location"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className='map-iframe'
          ></iframe>
        </div>
      </div>
      <legend className='last'>Get in Touch</legend>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-4 col-md-4 col-sm-6 mb-4' data-aos="flip-up">
            <div className='cards'>
              <p className='cards-title'><IoIosMail /></p>
              <a href="mailto:hr@rooks.in" className='small-desc'>
                hr@rooks.in
              </a>
              <div className='go-corner'>
                <div className='go-arrow'>→</div>
              </div>
            </div>
          </div>
          <div className='col-lg-4 col-md-4 col-sm-6 mb-4' data-aos="flip-up">
            <div className='cards'>
              <p className='cards-title'><FaPhoneVolume /></p>
              <a href="tel:+919443319914" className='small-desc'>
                +91 94433 19914
              </a>
              <div className='go-corner'>
                <div className='go-arrow'>→</div>
              </div>
            </div>
          </div>
          <div className='col-lg-4 col-md-4 col-sm-6 mb-4' data-aos="flip-up">
            <div className='cards'>
              <p className='cards-title'><FaLocationDot /></p>
              <p className='small-desc'>
               A.V Thomas Nagar, Rajakkamangalam Rd, Nagercoil, Tamil Nadu 629004
              </p>
              <div className='go-corner'>
                <div className='go-arrow'>→</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
