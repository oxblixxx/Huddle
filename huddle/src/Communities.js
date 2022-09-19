import React from 'react'
import iconmessages from './images/icon-messages.svg'
import iconcommunities from './images/icon-communities.svg'
import './Communities.css'

function Communities() {
  return (
    <div className="fish mt5">
      <div className="">
        <span>
          <img className="w-20" src={iconcommunities} alt="" />
        </span>
        <span>
          <h1 className="f1">1.4k+</h1>
        </span>
        <span>
          <p>Communities Formed</p>
        </span>
      </div>

      <div className="ml7">
        <span>
          <img className="w-20" src={iconmessages} alt="" />
        </span>
        <span>
          <h1 className="f1">2.7m+</h1>
        </span>
        <span>
          <p>Messages Sent</p>
        </span>
      </div>
    </div>
  )
}

export default Communities
