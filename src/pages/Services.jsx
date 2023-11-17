import React from 'react'
import ServiceHero from '../components/Main/Hero/ServiceHero'
import ServicesComp from '../components/Main/ServicesSections/ServicesComp'

const Services = () => {
  document.title = "Services"

  return (
    <>
      <ServiceHero/>
      <ServicesComp/>
    </>
  )
}

export default Services