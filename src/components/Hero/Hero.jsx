import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.png'
import AnchorLink from 'react-anchor-link-smooth-scroll';
const Hero = () => {
  return (
    <div id='home' className='hero'>
      <div className='hero-img-container'>
        <img src={profile_img} alt="" />
      </div>
      <h1>Welcome to My Portfolio 
      <br /><span> Hi, I'm Sri Vishnu,</span> a passionate developer.</h1>
      <p>
        I am a software engineer with a passion for creating innovative solutions and a strong focus on user experience.
        <br /> I specialize in building modern web applications with React.
        <br />Let's create something amazing together!
      </p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  )
}

export default Hero
