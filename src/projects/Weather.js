import React, { useState } from 'react'
import axios from 'axios'

function Weather() {

  const [data, setData] = useState({})
  const [location, setLocation] = useState('')

  const searchLocation = (event) => {
    if (event.key === 'Enter'){
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
        setLocation('')
      })
    }
  }


  return (
    <div>
      <p>Weather API</p>
      <div className="container weather">
        <div className="search">
          <input 
          className='input is-info'
          type="text" 
          onChange={event => setLocation(event.target.value)}
          placeholder="City"
          onKeyPress={searchLocation}
          />   
      </div>
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>

          <div className="temp">
            {data.main ? <h1>{(data.main.temp)}°C</h1> : null }
          </div>
          
          <div className="description">
            {data.weather ? <p>Sky {data.weather[0].main}</p> : null}
          </div>
        </div>

        <div className="bottom">
          <div className="feels">
            {data.main ? <p>Feels like {data.main.feels_like} °C</p> : null }
          </div>
          <div className="humidity">
            {data.main ? <p>humidity {data.main.humidity} %</p> : null }
          </div>
        </div>
      </div>

    </div>
  )
}

export default Weather
