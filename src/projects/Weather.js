import React, { useState } from 'react'

function Weather() {

  const [data, setData] = useState({})
  const [location, setLocation] = useState('')
  
  const searchLocation = (event) => {
    // console.log("API_KEY", process.env.REACT_APP_API_KEY);

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`
    if (event.code === 'Enter'){
      console.log('Enter Key')
        fetch(url, {mode: "cors"}).then((response) => response.json()).then((res) => {
        setData(res)
        console.log(res)
        // setLocation('')
      }).catch(err=>console.log(err.message))
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
