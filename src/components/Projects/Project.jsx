import React from 'react'
import './Project.css'
import project1 from '../../assets/project1.png'
import project2 from '../../assets/project2.png'

const Project = () => {
  return (
    <div id = 'project' className="projects">
      <div className="project">
        <h1>Projects</h1>
        <div className="project-list">
          <div className="project-item">
            <img src={project1} alt="Diabetes Prediction Project" className="project-image" />
            <h2>Diabetes Prediction Using Machine Learning Algorithms</h2>
            <ul className="project-description">
              <li>Developed a machine learning model using <strong>SVM</strong>, <strong>Decision Trees</strong>, and <strong>ANN</strong> to predict diabetes with improved accuracy.</li>
              <li>Designed a <strong>Tkinter-based interface</strong> and integrated <strong>MySQL</strong> for data management.</li>
              <li>Enhanced early detection and personalized patient care.</li>
            </ul>
          </div>
          <div className="project-item">
            <img src={project2} alt="Suicide Detection Project" className="project-image" />
            <h2>Detection of Suicide Related Post in Twitter Data Streams</h2>
            <ul className="project-description">
              <li>Developed an <strong>NLP</strong> and <strong>Machine Learning</strong>-based system to detect suicide-related content on Twitter.</li>
              <li>Implemented <strong>KNN classification</strong> for tweet analysis and <strong>CP-ABE encryption</strong> using <strong>SHA-512</strong> algorithm for data security.</li>
              <li>Designed a real-time monitoring framework for early intervention and support.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project
