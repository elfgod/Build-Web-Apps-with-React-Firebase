import React from 'react'
import ReactDOM from 'react-dom'
import '../styles/Modal.css'

const Modal = ({ children, handleCloseModal, isSalesModal }) => {
  return ReactDOM.createPortal(
    <div className='modal-backdrop'>
      <div
        className='modal'
        style={{
          border: '4px solid',
          borderColor: isSalesModal ? '#ff4500' : '#555',
          textAlign: 'center',
        }}
      >
        {children}
        <button
          onClick={handleCloseModal}
          className={isSalesModal ? 'sales-btn' : ''}
        >
          Close
        </button>
      </div>
    </div>,
    document.body
  )
}

export default Modal
