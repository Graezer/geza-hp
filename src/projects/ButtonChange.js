import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const link = <Link className='App-link' to="/">Bye</Link>

const clickArr = ["Click me!", "You clicked! Nice..", "Haha, again!", "Click, Click.. thats you", "oool right..", "that's..", "enough",
"What is it?", "ENOUGH", "OK", "I'm out","","","","no means no","",""," ","  ","   ","    ","STAP","you have a serious problem", "ok", "bye then", link, "lol"]

function ButtonChange() {

  const [count, setCount] = useState(0);
  const buttonText = clickArr[count % clickArr.length];
  const handleClick = () => setCount((c) => c + 1);
  
  return (
    <div>
      {/* <p>Just a button that changes text</p> */}
      <div className="button button-standart" onClick={handleClick}>
        {buttonText}
      </div>
    </div>
  )
}

export default ButtonChange
