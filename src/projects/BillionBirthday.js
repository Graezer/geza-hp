import React, { useState } from 'react'
import moment from 'moment'
import './billion_birthday.scss'

function BillionBirthday() {

  const [year, setYear] = useState('')
  const [month, setMonth] = useState('')
  const [day, setDay] = useState('')
  const [hour, setHour] = useState('')
  const [minute, setMinute] = useState('')
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
  
  function calc () { 
    return calculate(date.year,date.month,date.day,date.hour,date.minute)
  }

  function calculateFromNow (y,m,d){
    return (moment(`${y}${m}${d}`,'YYYYMMDD').fromNow())
  }

  function calcFromNow(){
    return calculateFromNow(date.year, date.month, date.day)
  }


  return (
    <div className=''>
      <label>Calculate your Billionth Second Birthday </label>
      <form className='content' onSubmit={handleSubmit}>

        <input type="text" onChange={(e) => setYear(e.target.value)} className='date-input is-info' placeholder='Year YYYY' pattern='[0-9]*' value={year}  />
        <input type="text" onChange={(e) => setMonth(e.target.value)} className='date-input is-info' placeholder='Month MM' pattern='[0-9]*' value={month} />
        <input type="text" onChange={(e) => setDay(e.target.value)} className='date-input is-info' placeholder='Day DD' pattern='[0-9]*' value={day} />
        <input type="text" onChange={(e) => setHour(e.target.value)} className='date-input is-info' placeholder='Hour HH' pattern='[0-9]*' value={hour}/>
        <input type="text" onChange={(e) => setMinute(e.target.value)} className='date-input is-info' placeholder='Minute HH' pattern='[0-9]*' value={minute}/>
        {/* <button type="submit" className='button is-dark'>Go</button>  */}
      </form>
        <h3> You {(calc() <= moment().format('YYYYMMDD') ? 'turned' : 'turn')} one billion seconds on {(calc() === 'Invalid date' ? '___' : calc())}</h3>
        <h3> That is {(calcFromNow() === 'Invalid date' ? '___' : calcFromNow())}</h3>
      <p>Date calculated with<a className='App-link m-3' href="https://momentjs.com/" target="_blank" rel="noreferrer">Moment.js</a></p>
    </div>
  )
}

export default BillionBirthday
