import React from 'react'
import ProjectCard from './ProjectCard'
import Ecommerce from '../images/ecommerce.png'
import courses from '../images/courses.png'
import Gallery from '../images/Gallery.png'
const Projects = () => {
  return (
    <>
    
        <div className='mainhead'>
           <h1>Projects</h1>
        </div>
        <div className='Projectbody'>
        <div class="wrapper">
          <ProjectCard
            projectName='Ecommerce'
            AboutProject='This project exemplifies my skills in front-end web development, UI/UX design principles, and a practical understanding
            of e-commerce user behavior. 
            '
            imagesrc={Ecommerce}
           code="https://github.com/shatachhi-10/web"
           live="https://6497b763e8a77346f1b0bbd4--idyllic-brigadeiros-146de5.netlify.app/"
          />
          <ProjectCard
            projectName='Top courses pack'
            AboutProject='This project uses React Js for filtering courses and fetches Api for course data.'
            imagesrc={courses}
            code="https://github.com/shatachhi-10/Top-course-project"
            live="https://react-project1-psi.vercel.app/"
          />
         
          <ProjectCard
            projectName='Image Gallery using APIs'
            AboutProject='The image gallery project showcases my ability to create dynamic and visually appealing user interfaces using modern
            web development tools.'
            imagesrc={Gallery}
            code="https://github.com/shatachhi-10/Image-gallery"
            live="https://image-gallery-xi-rosy.vercel.app/"
          />
         
        </div>
    </div>
    </>
  )
}

export default Projects