import React from 'react'
import AboutHero from '../components/Main/Hero/AboutHero'
import AboutServices from '../components/Main/AboutPageSections/AboutServices'
import AboutChoose from '../components/Main/AboutPageSections/AboutChoose'
import Counter from '../components/Counter/Counter'
const About = () => {
  return (
    <>
      <AboutHero />
      <AboutServices/>
      <AboutChoose/>
      <Counter/>
    </>
  )
}

export default About