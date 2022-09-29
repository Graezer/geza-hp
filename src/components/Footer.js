import React from 'react'

function Footer() {
  return (
    <footer className="footer columns">

      <div className='column content'>
      </div>
    
      <div className='column content'>
          <strong>Coding Geza</strong> on <br/>
          <div>
            <ul className=''>
              <li>
                <a className="App-link m-1" rel="noreferrer" target='_blank' href='https://www.linkedin.com/in/coder-geza-steinert/'>
                  linked-in
                </a><br/>
              </li>
              <li>
                <a className="App-link m-1" rel="noreferrer" href="https://github.com/Graezer" target="_blank">
                  Github
                </a>
              </li>
            </ul>
          </div>
        </div>

      <div className='column content'>
      </div>
      
      <div className='column content'>
        <strong>Acting Geza</strong> on <br/>
        <ul>
          <li>
            <a className="App-link m-1" rel="noreferrer" target='_blank' href='https://www.linkedin.com/in/actor-geza-steinert/'>
              linked-in
            </a>
            <li>  
              <a className="App-link m-2"
                href="https://www.schauspielervideos.de/fullprofile/schauspieler-geza-willem-artus-steinert.html"
                rel="noopener noreferrer">
                schauspielervideos
              </a>
            </li>
          </li>
        </ul>
      </div>

      <div className='column content'>
      </div>
      
    </footer>
  )
}

export default Footer
