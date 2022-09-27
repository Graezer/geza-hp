import React, { useState } from 'react'
import axios from 'axios'


function Weather() {
  
  const [data, setData] = useState({})
  const [location, setLocation] = useState('')
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&APPID=${process.env.REACT_APP_WEATHER_KEY}`

  const searchLocation = (event) => {
    console.log(process.env.REACT_APP_WEATHER_KEY)

    if (event.key === 'Enter'){
      axios.get(url)
      .then(response => {
        setData(response.data)
        console.log(response.data)
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })
    setLocation('')
    }
  }

  return (
    <div>
      <div className="weather">
        <div className="top">
          <div className="search">
            <input 
            className='input is-info'
            type="text"
            value={location}
            onChange={event => setLocation(event.target.value)}
            placeholder="City"
            onKeyPress={searchLocation}
            />   
            {/* <p className='photo-info'>Photo by C Dustin @dianamia - unsplash</p> */}
          </div>

          <div className="columns">
            <div className="column">
              <h2>{data.name}</h2>
              {data.weather ? <h3>{data.weather[0].main}</h3> : null}
            </div>

            <div className="column">
              {data.main ? <h1>{(data.main.temp)}°C</h1> : null }
              {data.main ? <h3>Feels like {data.main.feels_like} °C</h3> : null }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Weather
