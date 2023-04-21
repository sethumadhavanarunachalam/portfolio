import React from 'react'
import projectimg from "../../assests/Screenshot (659).png"
 import itemimg from "./Screenshot (775).png"
import "./projectContainer.css"
import { Element } from 'react-scroll'
function projectContainer() {

  return (<Element id="projects">
    <h2 className='Project-til'>Projects</h2>
    <div className='projects'>
      <span>
    <h5 className='movie-app'>Movie Rating App</h5>
    <div className='projectcontainer' >
        <img className='projectimg' src={projectimg} alt=""/>
    </div>
        <a className='project-btn' href='https://vermillion-tartufo-3391ba.netlify.app/movielist' target='_blank'>Click</a>
        </span>
        <span>
    
    <h5 className='movie-app'>Item Catlog App</h5>
    <div className='projectcontainer' >
        <img className='projectimg' src={itemimg} alt=""/>
    </div>
        <a className='project-btn' href='https://lively-babka-5ef893.netlify.app/itemcatlog' target='_blank'>Click</a>
        </span> </div>  </Element>
  )
}

export default projectContainer