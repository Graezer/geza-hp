import React from 'react'

function Info() {
  return (
    <div className='container columns .is-variable'>
            <div className='content column'>
              <div className="dropdown is-hoverable">
                <div className="dropdown-trigger">
                  <button className="button button-standart" aria-haspopup="true" aria-controls="dropdown-menu4">
                    <span>Dependencies</span>
                    <span className="icon is-small">
                      <i className="fas fa-angle-down" aria-hidden="true"></i>
                    </span>
                  </button>
                </div>
                <div className="dropdown-menu" id="dropdown-menu4" role="menu">
                  <div className="dropdown-content">
                    <div className="dropdown-item">
                      <ul>
                        <li>npm create-react-app</li>
                        <li>npm install node-sass</li>
                        <li>npm install bulma</li>
                        <li>npm run build</li>
                        <li>npm run deploy</li>
                        <li>npm i moment</li>
                        <li>npm i framer motion</li>
                        <li>npm i -S pure-react-carousel</li>
                        <li>npm i axios</li>
                        <li>npm i cors</li>
                        <li>npm i dotenv</li>
                        <li>npm i express</li>
                        <li>npm i nodemon</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <br/>

            <div className='content column'>
              <div className="dropdown is-hoverable">
                <div className="dropdown-trigger">
                  <button className="button button-standart" aria-haspopup="true" aria-controls="dropdown-menu4">
                    <span>Tutorials</span>
                    <span className="icon is-small">
                      <i className="fas fa-angle-down" aria-hidden="true"></i>
                    </span>
                  </button>
                </div>
                <div className="dropdown-menu" id="dropdown-menu4" role="menu">
                  <div className="dropdown-content">
                    <div className="dropdown-item"></div><ul>
                      <li><a className='App-link' rel="noreferrer" target='_blank' href='https://www.youtube.com/watch?v=2hM5viLMJpA' >host free react-app</a></li>
                      <li><a className='App-link' rel="noreferrer" target='_blank' href='https://www.youtube.com/watch?v=2zXEMMEQLIw' >add font awesome</a></li>
                      <li><a className='App-link' rel="noreferrer" target='_blank' href='https://www.youtube.com/watch?v=I2UBjN5ER4s&t=4098s'>responsive website tutorial</a></li>
                      <li><a className='App-link' rel="noreferrer" target='_blank' href='https://www.youtube.com/watch?v=xMNhDf5-hvk'>create multi page app</a> - take a look at the comments</li>
                      <li><a className='App-link' rel="noreferrer" target='_blank' href='https://www.youtube.com/watch?v=FdrEjwymzdY'>page transitions with framer motion</a></li>
                      <li><a className='App-link' rel="noreferrer" target='_blank' href='https://www.youtube.com/watch?v=1vKiPwEYbyk'>framer motion more general</a></li>
                      <li><a className='App-link' rel="noreferrer" target='_blank' href='https://github.com/express-labs/pure-react-carousel'>pure react carousel</a></li>
                      <li><a className='App-link' rel="noreferrer" target='_blank' href='https://www.youtube.com/watch?v=UjeXpct3p7M'>weather API</a></li>
                      <li><a className='App-link' rel="noreferrer" target='_blank' href='https://www.youtube.com/watch?v=ZLvcYS9JgT4'>How to hide an API Key</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div> 
  )
}

export default Info
