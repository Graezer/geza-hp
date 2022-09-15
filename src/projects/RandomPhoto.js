import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'

function RandomPhoto() {
  const [data, setData] = useState({})
  const url = `https://gwasteinerts.korconnect.io/Unsplash/`

  
  const getPhoto = (event) => {
    axios.get(url, 
      { 
        headers: { "unsplash-api-key": "NdseUV9CyG4405ZlLoYp36TRHctRvNRJaw7tOmfD" }
      }
    )
    .then(response => {
      setData(response.data)
      console.log(response.data)
      console.log(response)
    })
    .catch(error => {
      console.log(error)
    })
  }

    useEffect(() => {
      getPhoto()
    },[])
  
  return (
    <div>
      {/* <img href={data.links.html} alt={data.alt_description}/>
      <p>Photo by {data.username} on unsplash.it</p> */}
    </div>
  )
}
export default RandomPhoto
