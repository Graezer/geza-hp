import React from 'react'
import cloud from '../images/cloud.jpg'

function CenteredPhoto() {
  return (
    <div className='stacked'>
      <p>Cloud</p> 
      <img className='media' src={cloud} alt="LALALAL" />
    </div>
  )
}

export default CenteredPhoto
