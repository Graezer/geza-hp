import React, { useState } from 'react'
import moment from 'moment'

function BillionBirthday() {

  const [year, setYear] = useState('')
  const [month, setMonth] = useState('')
  const [day, setDay] = useState('')
  const [hour, setHour] = useState('12')
  const [minute, setMinute] = useState('1')
  const date = {year, month, day, hour, minute}
  
  const handleSubmit = (e) => {
    e.preventDefault(); // macht, dass die Seite nicht neu geladen wird
    console.log(date)
    setYear("")
    setMonth("")
    setDay("")
    setHour("")
    setMinute("")
  };
  
  function calculate(y,m,d,h,min){
    return (moment(`${y}-${m}-${d} ${h}:${min}:00`).add(10**9, 'seconds').format('LLL')
    )
  }

  const calcDate = (x) => {calculate(date.year,date.month,date.day,date.hour,date.minute)}
  console.log(calcDate())

  return (
    <div className='content'>
      <label>Calculate your Billionth Second Birthday </label>
      <form className='' onSubmit={handleSubmit}>
        <p>Year: {year}</p>
        <p>Month: {month}</p>
        <p>day: {day}</p>
        <p>hour: {hour}</p>
        <p>minute: {minute}</p>

        <input type="text" onChange={(e) => setYear(e.target.value)} className='input is-info' placeholder='Year YYYY' pattern='[0-9]*' value={year}  />
        <input type="text" onChange={(e) => setMonth(e.target.value)} className='input is-info' placeholder='Month MM' pattern='[0-9]*' value={month} />
        <input type="text" onChange={(e) => setDay(e.target.value)} className='input is-info' placeholder='Day DD' pattern='[0-9]*' value={day} />
        <input type="text" onChange={(e) => setHour(e.target.value)} className='input is-info' placeholder='Hour HH' pattern='[0-9]*' value={hour}/>
        <input type="text" onChange={(e) => setMinute(e.target.value)} className='input is-info' placeholder='Minute HH' pattern='[0-9]*' value={minute}/>
        
        <button type="submit" className='button is-dark'>Go</button> 
        <h2>Your Billion Second Birthday is: {calcDate}</h2>
      </form>
      <p>Date calculated with<a className='App-link m-3' href="https://momentjs.com/" target="_blank" rel="noreferrer">Moment.js</a></p>
    </div>
  )
}

export default BillionBirthday
