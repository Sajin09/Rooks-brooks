import React, { useEffect } from 'react';
import './Home.css';
import Typewriter from 'typewriter-effect';
import AI from '../../Asserts/2002.i039.010_chatbot_messenger_ai_isometric_set-05.jpg';
import research from '../../Asserts/5214651.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-lg-12 col-md-12 col-sm-12'>
          <div className='background'>
            <h1>Rooks and Brooks</h1>
            <Typewriter
              className='Typewriter'
              options={{
                strings: ['RESEARCH'],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        </div>
      </div>
      <div className='row card-container'>
        <div className='col-lg-1 col-md-4'></div>
        <div className='col-lg-3 col-md-8' data-aos="fade-right">
          <div className='card-ai'>
            <img src={research} alt="research" className='img-fluid' />
          </div>
        </div>
        <div className='col-lg-3 col-md-5' data-aos="fade-up">
          <div className='card'>
            <p className='heading'>Vision</p>
            <p>
              To design and build intelligent and sustainable solutions to societal needs that support businesses and individuals with affordable and easier services.
            </p>
            <p>Rooks and Brooks</p>
          </div>
        </div>
        <div className='col-lg-3 col-md-10' data-aos="fade-left">
          <div className='card-ai'>
            <img src={AI} alt="AI" className='img-fluid' />
          </div>
        </div>
        <div className='col-lg-1 col-md-2'></div>
      </div>
    </div>
  );
};

export default Home;
