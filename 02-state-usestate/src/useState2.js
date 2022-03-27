import React, { useState } from 'react'
import EventList from './components/EventList'
import Modal from './components/Modal'
import UseRefNewEventForm from './components/useRefNewEventForm'
import Title from './components/Title'

const UseState2 = () => {
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

  const handleCloseModal = () => {
    setShowModal(false)
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
        <Modal handleCloseModal={handleCloseModal}>
          <UseRefNewEventForm addEvent={addEvent} />
        </Modal>
      )}

      <div>
        <button onClick={() => setShowModal(true)}>Add New Event</button>
      </div>
    </div>
  )
}

export default UseState2
