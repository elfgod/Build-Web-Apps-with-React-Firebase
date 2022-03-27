import { useState } from 'react'
import { useFetch } from '../hooks/useFetch'

// styles
import '../styles/TripList.css'

const TripList = () => {
  const [url, setUrl] = useState('http://localhost:3000/trips')
  const { data: trips, isPending, error } = useFetch(url, {})

  return (
    <div className='trip-list'>
      <h2>TripList</h2>
      {isPending && <div>Loading trips...</div>}
      {error && <div>{error}</div>}
      <ul>
        {/* // initial value is null */}
        {trips &&
          trips.map((trip, index) => (
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
