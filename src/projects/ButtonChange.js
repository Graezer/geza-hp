import React, { useState } from 'react'

function ButtonChange() {

  const clickArr = ["You clicked! Nice..", "Haha, now twice", "Click, Click.. thats you", "that's..", "enough",
  "What is it?", "ENOUGH", "OK", "let's start all over..", "Click"]
  
  let count = 0
  
  const setCount = () => {
    if (count < clickArr.length) {
      count ++
    } else {
      count = 0 
    }
  } 

  const [buttonText, setButtonText] = useState("Click")

  const handleClick = (e) => {
    e.preventDefault();
    setButtonText(clickArr[count])
    setCount()
    console.log(count)
  }
  
  return (
    <div className="button" onClick={handleClick}>{buttonText}</div>
  )
}

export default ButtonChange
