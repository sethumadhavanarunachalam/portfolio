import React from 'react'
import "./Course.css"
import { Element } from 'react-scroll'
import guvilogo from "../../assests/images.png"
function Course() {
  return (<Element  id="courses">
    <h1 className='cor-txt'>Courses</h1>
    <div className='course'>
        <img src={guvilogo} alt=""/>
    </div>
    <p className='cor-desc'>I Complete FullStackDevelopment Course in guvi</p>
    </Element>
  )
}

export default Course