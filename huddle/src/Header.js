import React from 'react'
// import ReactDom from 'react-dom'
import './Header.css'
import 'tachyons'
import logo from './images/logo.svg'

function Header() {
  return (
    <nav>
      <ul className="flex b1">
        <li className="grow">
          <img src={logo} alt="logo" />
        </li>
        <li className="">
          <button className="btn w4 h2">Try for free</button>
        </li>
      </ul>
    </nav>
  )
}

export default Header
