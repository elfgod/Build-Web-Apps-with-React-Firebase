import React from 'react'
import styles from '../css-modules/EventList.module.css'

const EventList = ({ events, index, handleDelete }) => {
  return (
    <div>
      {events.map((event, index) => (
        <div className={styles.card} key={event.id}>
          <h2>
            {index} - {event.title}
          </h2>
          <p>
            {event.location} - {event.date}
          </p>
          <button onClick={() => handleDelete(event.id)}>delete event</button>
        </div>
      ))}
    </div>
  )
}

export default EventList
