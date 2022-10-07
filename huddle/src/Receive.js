import React from 'react'
import './Receive.css'

var arr2 = [
  'To receive tips on how to grow your community,',
  "sign up to our wekly newsletter. We'll never send",
  'you spam or pass on your email address',
]

function Receive() {
  return (
    <div>
      <ul>
        {arr2.map((arr2) => (
          <li className="receive-tips" key={arr2}>
            {arr2}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Receive
