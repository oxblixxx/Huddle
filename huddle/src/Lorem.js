import React from 'react'
import './Lorem.css'

var arr = [
  'Lorem  ipsum dolor sit amet, consectetur',
  'adipiscing elit. Mauris nulla quam, hendrerit',
  'laccinia vestibulum a, ultrices quis sem',
]
function Lorem() {
  return (
    <div>
      <ul>
        {arr.map((arr) => (
          <li key={arr} className="footer-logo-img">
            {' '}
            {arr}{' '}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Lorem
