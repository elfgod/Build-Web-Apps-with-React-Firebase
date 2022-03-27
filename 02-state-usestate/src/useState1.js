import React, { useState } from 'react'
import EventList from './components/EventList'
import Modal from './components/Modal'
import NewEventForm from './components/NewEventForm'
import Title from './components/Title'

const UseState1 = () => {
  const [name, setName] = useState('EfGod')
  const [events, setEvents] = useState([
    { title: "mario's birthday bash", id: 1 },
    { title: "bowser's live stream", id: 2 },
    { title: 'race on moo moo farm', id: 3 },
  ])

  const addEvent = (event) => {
    setEvents((prevEvents) => {
      return [...prevEvents, event]
    })
    setShowModal(false)
  }

  const [showEvents, setShowEvents] = useState(true)
  const [showModal, setShowModal] = useState(false)

  console.log('showEvents :', showEvents)
  // example 1
  const handleClick = () => {
    setName('Goku')
    console.log('name: ', name)
  }
  // example 2
  const handleDelete = (id) => {
    // Short way
    // setEvents(events.filter((event) => event.id !== id))

    // Long way
    // setEvents(
    //   events.filter((event) => {
    //     return id !== event.id
    //   })

    // Previous state
    setEvents((prevEvents) => {
      return prevEvents.filter((event) => {
        return id !== event.id
      })
    })

    console.log(id)
  }

  const handleCloseModal = () => {
    // setShowModal(!showModal)
    setShowModal(false)
  }
  console.log('showModal: ', showModal)

  const subtitle = 'All the lastest events in Marioland'
  return (
    <div className='container'>
      <h1>useState</h1>
      <Title title='Events in your area' subtitle={subtitle} />
      {/* Example Passing another component */}
      {/* <Title title='Another title' subtitle='Another subtitle' /> */}
      <hr />
      <h2>My name is {name}</h2>
      <button onClick={handleClick}>Change name</button>
      <hr />
      {showEvents && (
        <div>
          <button onClick={() => setShowEvents(false)}>hide events</button>
        </div>
      )}
      {!showEvents && (
        <div>
          <button onClick={() => setShowEvents(true)}>show events</button>
        </div>
      )}
      {showEvents && <EventList events={events} handleDelete={handleDelete} />}
      {/* <Modal>
        <h2>10% Off Coupon Code!!</h2>
        <p>Use the code FSIX at the checkout.</p>
      </Modal> */}
      {/* <hr />
      {showModal && (
        <Modal handleCloseModal={handleCloseModal} isSalesModal={true}>
          <h2>Terms and Conditions</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error odit
            nam et reprehenderit quibusdam temporibus officia dolorum quo sint
            nemo quis, laborum, quasi nisi fugit praesentium debitis
            repudiandae! Sapiente, omnis.
          </p>
        </Modal>
      )}
      <div>
        <button onClick={() => setShowModal(true)}>show modal</button>
      </div> */}
      <hr />
      {showModal && (
        <Modal handleCloseModal={handleCloseModal} isSalesModal={true}>
          <NewEventForm addEvent={addEvent} />
        </Modal>
      )}
      <div>
        <button onClick={() => setShowModal(true)}>add new event</button>
      </div>
    </div>
  )
}

export default UseState1
