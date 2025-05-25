import React from 'react'
import './Achievements.css'

const Achievements = () => {
  return (
    <div id='achievements' className="achievements">
      <div className="achievements-container">
        <div className="skills-section">
          <h2>Skills</h2>
          <div className="skill-bar">
            <span className="skill-label">HTML & CSS</span>
            <div className="bar-container">
              <div className="bar" style={{width: "70%"}}></div>
            </div>
          </div>
          <div className="skill-bar">
            <span className="skill-label">REACT JS</span>
            <div className="bar-container">
              <div className="bar" style={{width: "50%"}}></div>
            </div>
          </div>
          <div className="skill-bar">
            <span className="skill-label">JAVASCRIPT</span>
            <div className="bar-container">
              <div className="bar" style={{width: "60%"}}></div>
            </div>
          </div>
          <div className="skill-bar">
            <span className="skill-label">JAVA</span>
            <div className="bar-container">
              <div className="bar" style={{width: "80%"}}></div>
            </div>
          </div>
          <div className="skill-bar">
            <span className="skill-label">PYTHON</span>
            <div className="bar-container">
              <div className="bar" style={{width: "60%"}}></div>
            </div>
          </div>
        </div>
        <div className="achievements-section">
          <h2>Achievements</h2>
          <div className="achievemnts-row">
            <div className="achievemnt" id="1">
              <span className="achievemnt-label">
                Completed certified courses in Java Programming, Front-end Web Development, and React-JS on Udemy.
              </span>
            </div>
            <div className="achievemnt" id="2">
              <span className="about-achievemnt-label">
                Developed and deployed projects such as Diabetes Prediction using Machine Learning and Suicide Post Detection in Twitter Data Streams.
              </span>
            </div>
            <div className="achievemnt" id="3">
              <span className="achievemnt-label">
                Consistently maintained strong academic performance in Computer Science Engineering (AIML).
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Achievements
