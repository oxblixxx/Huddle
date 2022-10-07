import React from 'react'
import { FaFacebookSquare, FaTwitter, FaInstagram } from 'react-icons/fa'
import './Socialicons.css'

function Socialicons() {
  return (
    <div className="soc-icons">
      <span className="">
        <FaFacebookSquare size="22px" />
      </span>
      <span className="icons">
        <FaInstagram size="20px" />
      </span>
      <span className="">
        <FaTwitter size="22px" />
      </span>
    </div>
  )
}

export default Socialicons
