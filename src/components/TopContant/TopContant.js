import React from 'react'
import { Link } from 'react-scroll'
import "./TopContant.css"
function TopContant() {
  return (
    <div className='topcontant' >
        <div className='topcontant-container'>
             <h1>Mr.SethuMadhavan</h1>
             <p>A professional full stack Developer</p>
             <a href='google.com'>
                <button className='topcontant-downloadbtn'> <a target="_blank" className='res-doc' href="https://drive.google.com/file/d/13cLotihygeHCd5hlMM7-lFpocG9aOyXS/view?usp=share_link"> Download cv</a></button>
             </a>
             <Link to="projects" smooth={true} duration={500}>
                <button className='topcontant-workbtn'> <a  target="_blank" className='res-work'  href="https://github.com/sethumadhavanarunachalam"> My works</a></button>
             </Link>
        </div>
    </div>
  )
}

export default TopContant