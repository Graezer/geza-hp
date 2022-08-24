import React from 'react'
import './sass/App.scss';
// import Random from './projects/RandomColor'
import BillionBirthday from './projects/BillionBirthday';
import { motion } from 'framer-motion'
import ButtonChange from './projects/ButtonChange';
import Weather from './projects/Weather';


// implement API like AJAX
// implement text with code

function Coding() {
  return (
    <motion.div 
      className='coder form-container container'
      initial={{opacity: 0, transition: {duration: 0.4}}}
      animate={{opacity: 1, transition: {duration: 0.4}}}
      exit={{opacity: 0, transition: {duration: 0.4}}}
    >

      <div className='banner'>
        <div className="vh-div">
          <h1>.</h1>
        </div>

        <div>
          <h1>Graezer</h1>
          <p>"Help me to help you" - Dr.Cox</p>
        </div>
        <div>
          <a className="App-link m-1" rel="noreferrer" target='_blank' href='https://www.linkedin.com/in/coder-geza-steinert/'>
            linked-in
          </a>
          <a className="App-link m-1" rel="noreferrer" href="https://github.com/Graezer" target="_blank">
            Github
          </a>
        </div>
      </div>


      <div className='content'>
        <BillionBirthday />
      </div>
      
      <div className='content'>
        <ButtonChange />
      </div>

      <div className='content'>
        <Weather />
      </div>
        
      <div className="banner vh-div">
        <h1>.</h1>
        <h3>Infos</h3>
      </div>

      <div className='container columns .is-variable'>
        <div className='content column'>
          <h3 className='ml-4' >Installed Packages</h3>
          <ul>
            <li>npm create-react-app</li>
            <li>npm install node-sass</li>
            <li>npm install bulma</li>
            <li>npm i moment</li>
            <li>npm i --save @fortawesome/fontawesome-svg-core</li>
            <li>npm install --save @fortawesome/free-solid-svg-icons</li>
            <li>npm i --save @fortawesome/free-regular-svg-icons</li>
            <li>npm i --save @fortawesome/react-fontawesome@latest</li>
            <li>npm run deploy</li>
            <li>npm install framer motion</li>
            <li>npm i -S pure-react-carousel</li>
            <li>npm install axios</li>
          </ul>
        </div>
        <br/>

        <div className='content column'>
          <h3  className='ml-4'>Tutorials</h3>
          <ul>
            <li><a className='App-link' rel="noreferrer" target='_blank' href='https://www.youtube.com/watch?v=2hM5viLMJpA' >host free react-app</a></li>
            <li><a className='App-link' rel="noreferrer" target='_blank' href='https://www.youtube.com/watch?v=2zXEMMEQLIw' >add font awesome</a></li>
            <li><a className='App-link' rel="noreferrer" target='_blank' href='https://www.youtube.com/watch?v=I2UBjN5ER4s&t=4098s'>responsive website tutorial</a></li>
            <li><a className='App-link' rel="noreferrer" target='_blank' href='https://www.youtube.com/watch?v=xMNhDf5-hvk'>create multi page app</a> - take a look at the comments</li>
            <li><a className='App-link' rel="noreferrer" target='_blank' href='https://www.youtube.com/watch?v=FdrEjwymzdY'>page transitions with framer motion</a></li>
            <li><a className='App-link' rel="noreferrer" target='_blank' href='https://www.youtube.com/watch?v=1vKiPwEYbyk'>framer motion more general</a></li>
            <li><a className='App-link' rel="noreferrer" target='_blank' href='https://github.com/express-labs/pure-react-carousel'>pure react carousel</a></li>
            <li><a className='App-link' rel="noreferrer" target='_blank' href='https://www.youtube.com/watch?v=UjeXpct3p7M'>weather API</a></li>
          </ul>
        </div>
      </div>
    </motion.div>
  )
}

export default Coding
