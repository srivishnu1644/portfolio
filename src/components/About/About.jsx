import React from 'react';
import './About.css';
import profile_img from '../../assets/profile_img.png';

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-content">
        <div className="about-left">
          <h1>About Me</h1>
          <div className="about-para">
            <p>
              Hello! I'm a passionate web developer with a knack for creating dynamic and responsive web applications. I love turning ideas into reality and am always eager to learn new technologies and improve my skills.I have a strong foundation in HTML, CSS, and JavaScript, and I'm proficient in React.js for building interactive user interfaces.In my spare time, I enjoy exploring the latest trends in web development, contributing to open-source projects, and sharing my knowledge with others. Let's connect and build something amazing together!

            </p>
          </div>
        </div>
        <div className="about-right">
          <div className="about-image">
            <img src={profile_img} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
