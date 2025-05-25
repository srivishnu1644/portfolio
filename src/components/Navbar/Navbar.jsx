import React, { useState, useRef } from 'react'
import logo from '../../assets/logo.png'
import './Navbar.css'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef();

  const openMenu = () => {
    setIsMenuOpen(true);
  }

  const closeMenu = () => {
    setIsMenuOpen(false);
  }

  return (
    <div className='navbar'>
      <img src={logo} alt="" />
      {/* Desktop nav menu */}
      <ul className="nav-menu desktop-menu">
        <li><AnchorLink className='anchor-link' offset={50} href='#home'>Home</AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={50} href='#about'>About Me</AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={50} href='#achievements'>Skills & Achievements</AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={50} href='#project'>Projects</AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={50} href='#contact'>Contact Me</AnchorLink></li>
      </ul>
      {/* Mobile menu toggle */}
      {!isMenuOpen && (
        <img
          src={menu_open}
          onClick={openMenu}
          alt="Open Menu"
          className='nav-mob-open'
        />
      )}
      {/* Mobile slide-in menu */}
      <ul
        ref={menuRef}
        className="nav-menu mobile-menu"
        style={{ right: isMenuOpen ? "0" : "-350px" }}
      >
        {isMenuOpen && (
          <img
            src={menu_close}
            onClick={closeMenu}
            alt="Close Menu"
            className="nav-mob-close"
          />
        )}
        <li><AnchorLink className='anchor-link' offset={50} href='#home' onClick={closeMenu}>Home</AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={50} href='#about' onClick={closeMenu}>About Me</AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={50} href='#achievements' onClick={closeMenu}>Skills & Achievements</AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={50} href='#project' onClick={closeMenu}>Projects</AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={50} href='#contact' onClick={closeMenu}>Contact Me</AnchorLink></li>
      </ul>
      <div className="nav-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
    </div>
  )
}

export default Navbar
