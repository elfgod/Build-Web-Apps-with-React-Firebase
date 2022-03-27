import React, { useState } from 'react'
import EventList from './components/EventList'
import Modal2 from './components/Modal2'
import NewEventForm from './components/NewEventForm'
import Title from './components/Title'

const UseState3 = () => {
  const [showModal, setShowModal] = useState(false)
  const [showEvents, setShowEvents] = useState(true)
  const [events, setEvents] = useState([])

  const addEvent = (event) => {
    setEvents((prevEvents) => {
      return [...prevEvents, event]
    })
    setShowModal(false)
  }

  const handleDelete = (id) => {
    setEvents((prevEvents) => {
      return prevEvents.filter((event) => id !== event.id)
    })
  }

  const subtitle = 'All the latest events in Marioland'

  return (
    <div className='container'>
      <Title title='Marioland Events' subtitle={subtitle} />

      {showEvents && (
        <div>
          <button onClick={() => setShowEvents(false)}>Hide Events</button>
        </div>
      )}
      {!showEvents && (
        <div>
          <button onClick={() => setShowEvents(true)}>Show Events</button>
        </div>
      )}
      {showEvents && <EventList events={events} handleDelete={handleDelete} />}

      {showModal && (
        <Modal2>
          <NewEventForm addEvent={addEvent} />
        </Modal2>
      )}

      <div>
        <button onClick={() => setShowModal(true)}>Add New Event</button>
      </div>
    </div>
  )
}

export default UseState3
