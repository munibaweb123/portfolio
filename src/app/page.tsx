import React from 'react'
import Hero from './components/Hero'
import DeveloperCard from './components/DeveloperCard'
import DeveloperCard2 from './components/DevCard2'
import ProjectGrid from './components/ProjectGrid'
import Testimonials from './components/Testimonial'
import WorkExperience from './components/Experience'
import CallToAction from './components/CallToAction'

const Home = () => {
  return (
    <main><Hero/>
    <DeveloperCard/>
    <DeveloperCard2/>
    <ProjectGrid/>
    <Testimonials/>
    <WorkExperience/>
    <CallToAction/>
    </main>
  )
}

export default Home