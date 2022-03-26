import React, { useState, useEffect, useCallback } from 'react'
import '../styles/TripList.css'

const TripList = () => {
  const [trips, setTrips] = useState([])
  const [url, setUrl] = useState('http://localhost:3000/trips')

  const fetchTrips = useCallback(async () => {
    const response = await fetch(url)
    const json = await response.json()
    setTrips(json)
  }, [url])

  useEffect(() => {
    fetchTrips()
  }, [fetchTrips])

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
      <div className='filters'>
        <button
          onClick={() => setUrl('http://localhost:3000/trips?loc=europe')}
        >
          Europe Trips
        </button>
        <button onClick={() => setUrl('http://localhost:3000/trips')}>
          All Trips
        </button>
      </div>
    </div>
  )
}

export default TripList

// Example 1:
// Example of how to use the useEffect hook:
// useEffect(() => {
//   fetch(url)
//     .then((response) => response.json())
//     // .then((json) => {
//     //   console.log(json)
//     // })
//     .then((json) => setTrips(json))
// }, [url])
