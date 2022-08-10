import React, { useState } from 'react'
import moment from 'moment'

function BillionBirthday() {

  const [date, setDate] = useState('')
  
  const handleChange = event => {
    setDate(event.target.value)
  };

  const handleSubmit = event => {
    event.preventDefault();
    // alert(`Your state values: \n 
    //         email: ${email} \n 
    //         You can replace this alert with your process`);
  };

  return (
    <div className='content'>
      <p>Calculate your Billionth Second Birthday </p>
      <form className='is-flex' onSubmit={handleSubmit}>
        <input className='input is-info' placeholder='YYYY/MM/DD' pattern='[0-9]*' >

        </input>
        <button className='button is-dark' type="submit">
          Submit
        </button>
      </form>
    </div>
  )
}

export default BillionBirthday
