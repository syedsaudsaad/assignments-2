import React from 'react'
import Image from 'next/image';
import  Work from '../Components/Work/Work'
import About from '../Components/About/About';
import Contact from '../Components/Contact/Contact';
import Project from '../Components/Project/Project';


const projects = () => {
  return (
    <div>
      <Work />
      <About />
      <Contact />
      <Project />
    </div>
  )
}

export default projects;