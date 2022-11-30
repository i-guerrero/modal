import React, { useState } from 'react'

const MODAL_STYLES = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#FFF',
    padding: '50px',
    zIndex: 1000
}

const OVERLAY_STYLE = {
    
}

export default function Modal({ open, children, onClose }) {
  if (!open) return null
    return (
    <>
        <div style={OVERLAY_STYLE} />
        <div style={MODAL_STYLES}>
            <button onClick={onClose}>Close Modal</button>
        {children}
        </div>
    </>
  )
}
