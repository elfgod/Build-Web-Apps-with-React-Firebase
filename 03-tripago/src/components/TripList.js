import React, { useState, useEffect } from 'react'
import '../styles/TripList.css'

const TripList = () => {
  const [trips, setTrips] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/trips')
      .then((response) => response.json())
      // .then((json) => {
      //   console.log(json)
      // })
      .then((json) => setTrips(json))
  }, [])

  console.log(trips)

  return (
    <div className='trip-list'>
      <h2>TripList</h2>
      <ul>
        {trips.map((trip, index) => (
          <li key={index}>
            <h3>{trip.title}</h3>
            <p>{trip.price}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TripList
