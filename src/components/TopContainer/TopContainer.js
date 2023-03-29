import React from 'react'
import { Element } from 'react-scroll'
import TopContant from '../TopContant/TopContant'
import "./TopContainer.css"
function TopContainer() {
  return (
    <Element name="about" className='topcontainer'>
      <TopContant/>
    </Element>
  )
}

export default TopContainer