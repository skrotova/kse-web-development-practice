import React from 'react'
import './subject.module.css'

function Subject() {
  return (
    <div className="subject">
      <div className="container">
        <button className="back-button">&larr;</button>
        <h1>Практики веб розробки</h1>
        <div className="buttons">
          <button>Compendiums</button>
          <button>Useful links</button>
        </div>
        <button className="plus-button">+</button>
      </div>
    </div>
  )
}

export default Subject
