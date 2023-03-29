import React from "react";
import "./skillContainer.css";
import { Element } from "react-scroll";
import LinearProgress from '@mui/material/LinearProgress'; 
function SkillContainer(){
  return (
    <Element className="skillContainer" id="skills">
      <div className="skillContainer__image">
        <img src="https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg" alt="" />
      </div>
      <div className="skillContainer__text">
        <h2>SKILLSET</h2>
        <div className="skillContainer__skillSet">
          <h4>ReactJS</h4>
          <div className="skillContainer__slider skillContainer__slider1">
            <LinearProgress variant="determinate" value={90} />
           
          </div>
        </div>
        <div className="skillContainer__skillSet">
          <h4>NodeJS</h4>
          <div className="skillContainer__slider skillContainer__slider2">
            <LinearProgress variant="determinate" value={80} />
          </div>
        </div>
        <div className="skillContainer__skillSet">
          <h4>React Native</h4>
          <div className="skillContainer__slider skillContainer__slider3">
            <LinearProgress variant="determinate" value={75} />
          </div>
        </div>
        <div className="skillContainer__skillSet">
          <h4>MongoDB</h4>
          <div className="skillContainer__slider skillContainer__slider4">
            <LinearProgress variant="determinate" value={80} />
          </div>
        </div>
        <div className="skillContainer__skillSet">
          <h4>Versal</h4>
          <div className="skillContainer__slider skillContainer__slider5">
            <LinearProgress variant="determinate" value={60} />
          </div>
        </div>
        <div className="skillContainer__skillSet">
          <h4>Netlify</h4>
          <div className="skillContainer__slider skillContainer__slider6">
            <LinearProgress variant="determinate" value={80} />
          </div>
        </div>
      </div>
    </Element>
  );
};

export default SkillContainer;
