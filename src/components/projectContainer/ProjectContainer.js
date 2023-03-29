import React from 'react'
import projectimg from "../../assests/Screenshot (659).png"
import "./projectContainer.css"
import { Element } from 'react-scroll'
function projectContainer() {

  return (<Element id="projects">
    <h2 className='Project-til'>Projects</h2>
    <h5 className='movie-app'>Movie Rating App</h5>
    <div className='projectcontainer' >
        <img className='projectimg' src={projectimg} alt=""/>
    </div>
        <a className='project-btn' href='https://vermillion-tartufo-3391ba.netlify.app/movielist' target='_blank'>Click</a>
        </Element>
  )
}

export default projectContainer