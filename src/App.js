import logo from './logo.svg';
import './App.css';
import Header from "./components/header/Header.js"
import TopContainer from './components/TopContainer/TopContainer.js';
import SkillContainer from './components/skillContainer/SkillContainer.js';
import ProjectContainer from './components/projectContainer/ProjectContainer.js';
import Course from './components/course/Course.js';
import Contact from './components/Contact/Contact.js';
function App() {
  return (
    <div className="App">
     <Header/>
     <TopContainer/>
    
     <SkillContainer/>
     <ProjectContainer/>
     <Course/>
     <Contact/>
    </div>
  ); 
}

export default App;
 