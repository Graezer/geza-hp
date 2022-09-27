import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'

function RandomPhoto() {
  const url = `https://api.unsplash.com/photos/random/?client_id=${process.env.REACT_APP_UNSPLASH_KEY}`
  const [data, setData] = useState({})
  
  const getPhoto = async () => {
    await axios
      .get(url)
      .then(response => {
        setData(response.data)
        console.log(response.data)
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
      <img src={data.urls?.regular} alt="" />
      <p>
        Photo by {data?.user?.username} {data?.user?.name} - found on unsplash
      </p>
    </div>
  )
}

export default RandomPhoto
