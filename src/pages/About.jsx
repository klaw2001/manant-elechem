import React from 'react'
import AboutHero from '../components/Main/Hero/AboutHero'
import AboutServices from '../components/Main/AboutPageSections/AboutServices'
import AboutChoose from '../components/Main/AboutPageSections/AboutChoose'
import Counter from '../components/Counter/Counter'
import AboutOurCompany from '../components/Main/AboutPageSections/AboutOurCompany'
const About = () => {
  document.title = "About"

  return (
    <>
      <AboutHero />
      <AboutOurCompany/>
      <AboutServices/>
      <AboutChoose/>
      <Counter/>
    </>
  )
}

export default About