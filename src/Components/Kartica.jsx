import React from 'react'
import { useState, useEffect } from 'react'
import { fetch } from '../axios'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
const Kartica = () => {
  let { ID } = useParams()
  console.log(ID)
  const [data, setData] = useState([])
  async function fetchData() {
    fetch
      .get()
      .then((result) => {
        setData(result.data.data)
      })
      .catch((error) => console.log(error))
  }
  useEffect(() => {
    fetchData()
  }, [])
  return (
    <div className='JednaKartica'>
      {!data
        ? ''
        : data.map((value, index) => {
            if (parseInt(index) === parseInt(ID)) {
              return (
                <div className='UnoCard' key={value['ID State']}>
                  <Link to={`/`}>
                    <button
                      style={{ backgroundColor: 'white', borderRadius: '30%' }}
                    >
                      Go Back
                    </button>
                  </Link>
                  <p>ID of state: {value['ID State']}</p>
                  <p>State: {value.State}</p>
                  <p>ID of Year: {value['ID Year']}</p>
                  <p>Year: {value.Year}</p>
                  <p>Population of State: {value.Population}</p>
                  <p>Slug State: {value['Slug State']}</p>
                </div>
              )
            }
          })}
    </div>
  )
}

export default Kartica
