import React from 'react'
import React, { useState } from 'react'

function SpecificPhoto() {
  const [data, setData] = useState({})
  const url = `https://gwasteinerts.korconnect.io/Unsplash/`

  axios.get(url, 
    { headers: 
      {
        headers : { "unsplash-api-key": "NdseUV9CyG4405ZlLoYp36TRHctRvNRJaw7tOmfD" }
      } 
    })
    .then(response => {
      setData(response.data)
      console.log(response.data)
      console.log(response)
    })
    .catch(error => {
      console.log(error)
    })

  return (
    <div>
      <img href={data.links.html} alt={data.alt_description}/>
      <p>Photo by {data.username} on unsplash.it</p>
    </div>
  )
}
export default SpecificPhoto
