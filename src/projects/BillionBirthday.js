import React, { useState } from 'react'
import moment from 'moment'

function BillionBirthday() {

  const [year, setYear] = useState('')
  const handleSubmit = e => {
    e.preventDefault(); // macht, dass die Seite nicht neu geladen wird
    const year = setYear(e.target.value)
    setYear('')
    console.log(year)
  };

  function Calculate (y,m,d,h,min){
    return (moment(`'${y}-${m}-${d} ${h}:${min}:00'`).add(10**9, 'seconds').format('LLL')
    )
  }

  const calc = (x) => {Calculate(1990,12,14,12,1)}
  console.log(calc)

  return (
    <div className='content'>
      <label>Calculate your Billionth Second Birthday </label>
      <form className='' onSubmit={handleSubmit}>
        <input type="text" className='input is-info' placeholder='Year YYYY' pattern='[0-9]*' value="year"/>
        <input type="text" className='input is-info' placeholder='Month MM' pattern='[0-9]*' value="month" />
        <input type="text" className='input is-info' placeholder='Day DD' pattern='[0-9]*' value="day" />
        <input type="text" className='input is-info' placeholder='Hour HH' pattern='[0-9]*' value="hour"/>
        <input type="text" className='input is-info' placeholder='Minute HH' pattern='[0-9]*' value="minute"/>
        <button type="submit" onSubmit={handleSubmit} className='button is-dark'>Go</button>
        <h2>Your Billion Second Birthday</h2>
      </form>
      <p>I used <a className='App-link m-3' href="https://momentjs.com/" target="_blank" rel="noreferrer">Moment.js</a> to calculate the date</p>
    </div>
  )
}

export default BillionBirthday
