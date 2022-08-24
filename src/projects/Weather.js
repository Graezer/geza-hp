import React, { useState } from 'react'
import axios from 'axios'

function Weather() {
  const url = "https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=927f29e30360355547376ffc33cd9e40"
  const url2= "https://api.openweathermap.org/data/2.5/weather?q=Berlin,de&APPID=927f29e30360355547376ffc33cd9e40"
  return (
    <div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>Berlin</p>
          </div>
          <div className="temp">
            <h1>60 Grad</h1>
          </div>
          <div className="description">
            <p>Wolkig</p>
          </div>
        </div>

        <div className="bottom">
          <div className="feels">
            <p>like 61 Grad</p>
          </div>
          <div className="humidity">
            <p>high</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Weather
