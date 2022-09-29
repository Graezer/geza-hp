import React from 'react'
import './sass/App.scss';
import Info from './projects/Info'
import BillionBirthday from './projects/BillionBirthday';
import { motion } from 'framer-motion'
import ButtonChange from './projects/ButtonChange';
import Weather from './projects/Weather';
import RandomPhoto from './projects/RandomPhoto'


function Coding() {
  return (
    <motion.div 
      className='coder form-container'
      initial={{opacity: 0, transition: {duration: 0.4}}}
      animate={{opacity: 1, transition: {duration: 0.4}}}
      exit={{opacity: 0, transition: {duration: 0.4}}}
    >
      <section className='coding-banner hero relative is-large'>
        <div className='hero-body'>
          <p className='title'>Graezer</p>
          <p className='subtitle'>"Help me to help you" - Dr.Cox</p>
        
          <div>
            <a className="App-link m-1" rel="noreferrer" target='_blank' href='https://www.linkedin.com/in/coder-geza-steinert/'>
              linked-in
            </a>
            <a className="App-link m-1" rel="noreferrer" href="https://github.com/Graezer" target="_blank">
              Github
            </a>
            <div className='photo-description'>
            <p>photo by ryan stone <br/> unsplash.com</p>
          </div>
          </div>
        </div>
      </section>

      <div className="container is-fluid">

        <section className="section is-medium">
          <h1 className="title">Project WeatherAPI</h1>
          <h2 className="subtitle">how is weather in the city of your choice?</h2>
          <Weather />
        </section>

        <section className="section is-medium relative photo-section">
          <h1 className="title">Project RandomPhoto</h1>
          <h2 className="subtitle">click to see a random photo from unsplash</h2>
          <RandomPhoto />
        </section>

        <section className="section is-medium">
          <h1 className="title">Project BillionBirthday</h1>
          <h2 className="subtitle">calculate your billionth second birthday </h2>
          <BillionBirthday />
        </section>

        <section className="section is-medium">
          <h1 className="title">Project ButtonChange</h1>
          <h2 className="subtitle">just a button that changes text on click</h2>
          <ButtonChange />
        </section>
        
        <section className="section is-medium">
          <h1 className="title">Info</h1>
          <h2 className="subtitle">every dependency and tutorial that I've used</h2>
          <Info />
        </section>
      </div>
    </motion.div>
  )
}

export default Coding
