import React from 'react'
import {Link} from "react-scroll"
 import "./Header.css"
function Header() {
  return (
    <div className='header'> 
        <div className='header-left'>
            <h1>FullStack<span>Developer</span></h1>
        </div>
        <div className='header-right'>

            <Link to="about" smooth={true} duration={500} >
                <h4>About me</h4>
            </Link>
            <Link to="skills" smooth={true} duration={500} >
                <h4>Skills</h4>
            </Link>
            <Link to="projects" smooth={true} duration={500} >
                <h4>Projects</h4>
            </Link>
            <Link to="courses" smooth={true} duration={500} >
                <h4>Courses</h4>
            </Link>
            <Link to="contact" smooth={true} duration={500} >
                <h4>Contact</h4>
            </Link>
            <h4 className='header-right-btn'>join with me</h4>
        </div>
    </div>
  )
}

export default Header