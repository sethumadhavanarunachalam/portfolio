import React from 'react'
import "./Contact.css"
import { Element } from 'react-scroll'
function Contact() {
  return (<Element id="contact">
    <div className='Contact'>
        <h1 className='contact-txt'>Contact</h1></div>

        <div className='contact-box'>
          <div className='gmail'><h4>Gmail:<span> <a className='a-gmail' target="_blank" href="mailto: a.sethumadhavan27@gmail.com"> a.sethumadhavan27@gmail.com</a></span></h4></div>
          <div className='linkedin'><h4>Linked:<span> <a className='a-gmail' target="_blank" href="https://www.linkedin.com/in/sethumadhavan-arunachalam-13a145218/">Click to open my profile</a></span></h4></div>

        </div>
    </Element>
  )
}

export default Contact