import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import About from '../components/About'
import Hero from '../components/Hero'
import Nav from '../components/nav'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import React from 'react'
import Features from '../components/Features'
import Faq from '../components/Faq'
import Form from '../components/form'
import Team from '../components/Team'
import Mission from '../components/Mission'
import Services from '../components/Services'
import Values from '../components/Values'
import Vision from '../components/Vision'
import Technology from '../components/Technology'
import Commodities from '../components/Commodities'
import Research from '../components/Research'
import Warehousing from '../components/Warehousing'
import Impact from '../components/Impact'


const Home: NextPage = () => {
  return (
    <React.Fragment>
      <Nav />
      <Hero />
      <Services/>
      <Vision/>
      <Values/>
      <Technology/>
      <Mission />
      <Commodities/>
      <Features />
      <Research/>
      <Warehousing/>
      <Impact/>
      <About />  
      {/* <Team />     */}
      <Faq />
      <Form />
    </React.Fragment>
  );
}

export default Home;
