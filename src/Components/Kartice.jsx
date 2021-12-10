import React from 'react'
import { useState, useEffect } from 'react'
import { fetch } from '../axios'
import { Link } from 'react-router-dom'
import '../App.css'
const Kartice = () => {
  const [data, setData] = useState([])
  async function fetchData() {
    fetch
      .get()
      .then((result) => {
        setData(result.data.data)
        console.log(result.data.data)
      })
      .catch((error) => console.log(error))
  }
  useEffect(() => {
    fetchData()
  }, [])
  return (
    <div className='content'>
      {!data
        ? ''
        : data.map((value, index) => {
            return (
              <div className='Card' key={value['ID State']}>
                <p>ID of state: {value['ID State']}</p>
                <p>State: {value.State}</p>
                <p>ID of Year: {value['ID Year']}</p>
                <p>Year: {value.Year}</p>
                <p>Population of State: {value.Population}</p>
                <p>Slug State: {value['Slug State']}</p>
                <Link to={`/kartica/${index}`}>
                  <button style={{ backgroundColor: 'red' }}>More</button>
                </Link>
              </div>
            )
          })}
    </div>
  )
}

export default Kartice
