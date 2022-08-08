import React from 'react'
import './App.scss';
import Random from './projects/RandomColor'
import BillionBirthday from './projects/BillionBirthday';


function Coding() {
  return (
    <div className='form-container'>
      
      <div className='banner'>
        <div>
          <h1>Geza</h1>
          <h1><i class="fas fa-user" /> Graezer</h1>
        </div>
        <div>
          <a className="App-link m-1" target='_blank' href='https://www.linkedin.com/in/coder-geza-steinert/'>
            linked-in
          </a>
          <a className="App-link m-1" href="https://github.com/Graezer" target="_blank" rel="noopener noreferrer">
            Github
          </a>
        </div>
      </div>

      <div>
        <h3>Installed Packages</h3>
        <ul>
          <li>npm create-react-app</li>
          <li>npm install node-sass</li>
          <li>npm install bulma</li>
          <li>npm i --save @fortawesome/fontawesome-svg-core</li>
          <li>npm install --save @fortawesome/free-solid-svg-icons</li>
          <li>npm i --save @fortawesome/free-regular-svg-icons</li>
          <li>npm i --save @fortawesome/react-fontawesome@latest</li>
          <li></li>
        </ul>
      </div>
      <br/>
      <div>
        <h3>Tutorials</h3>
        <ul>
          <li><a target='_blank' href='https://www.youtube.com/watch?v=2hM5viLMJpA' >host free react-app</a></li>
          <li><a target='_blank' href='https://www.youtube.com/watch?v=xMNhDf5-hvk'>create multi page app</a> -beware the comments</li>
          <li><a target='_blank' href='https://www.youtube.com/watch?v=2zXEMMEQLIw' >add fontawesome</a></li>
          <li><a target='_blank' href='https://www.youtube.com/watch?v=I2UBjN5ER4s&t=4098s'>responsive website tutorial</a></li>
          <li></li>
        </ul>
      </div>
    </div>
  )
}

export default Coding
