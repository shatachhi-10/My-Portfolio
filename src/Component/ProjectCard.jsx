import React from 'react'
import { NavLink } from 'react-router-dom';

const ProjectCard = (props) => {
  return (
    <>
   
        <div className="ProjectCard">
        <div className='imageabout'>
        <img className="projectimg" src={props.imagesrc} alt="Error" /> 
        </div>
            <div class="info">
                <h1>{props.projectName}</h1>
                <p>{props.AboutProject}</p>
                <a target='_blank' href={props.code}><button> code
                   </button></a>
                <a target='_blank' href={props.live}><button> Live
                 </button></a>
            </div>
        </div>
        
    </>
  )
}

export default ProjectCard