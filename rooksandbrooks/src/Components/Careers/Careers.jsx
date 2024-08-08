import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import axios from 'axios';
import './Careers.css';

const Careers = () => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [file, setFile] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('firstName', firstName);
    formData.append('lastName', lastName);
    formData.append('email', email);
    if (file) formData.append('resume', file);

    try {
      const response = await axios.post('https://http://localhost:3001/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      alert('Application submitted successfully!');
      setFirstName('');
      setLastName('');
      setEmail('');
      setFile(null);
    } catch (error) {
      alert('Failed to submit application.');
      console.error(error);
    }
  };

  return (
    <div className='careers-container'>
      <div className='careers-head' data-aos="zoom-in-right">
        <p>Are you passionate about innovative research and cutting-edge science? We're looking for talented individuals to join our thriving team at Rooks and Brooks!</p>
      </div>
      <form className="form" data-aos="zoom-out" onSubmit={handleSubmit}>
        <p className="title">Apply Now</p>
        <p className="message">Please fill in your information below</p>
        <div className="flex">
          <label>
            <span>Firstname</span>
            <input
              className="input"
              type="text"
              placeholder="Enter your first name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </label>
          <label>
            <span>Lastname</span>
            <input
              className="input"
              type="text"
              placeholder="Enter your last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </label>
          <label>
            <span>Email</span>
            <input
              className="input"
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <label htmlFor="resume" className="custom-file-upload">
            <span>Resume/CV</span>
            <input
              className="input"
              id="resume"
              type="file"
              onChange={handleFileChange}
              required
            />
          </label>
          <button className="submit" type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Careers;
