import React from 'react'
import './Footer.css'
import Contact from './Contact.js'
import wave from './images/bg-footer-top-desktop.svg'
import logo from './images/logo.svg'
import Lorem from './Lorem.js'
import LogoImg from './LogoImg'
import Receive from './Receive'
import Socialicons from './Socialicons'

function Footer() {
  return (
    <footer className="flex">
      {/* LEFT SECTION */}
      <div className="left-footer">
        <LogoImg />
        <Lorem style={{ background: 'red' }} />
        <Contact />
        <Socialicons className="social-icons" />
      </div>

      {/* RIGHT-SECTION */}
      <div className="right-footer">
        <h1 className="newsletter">NEWSLETTER</h1>
        <Receive />
        <div className=" subscribe-tab flex">
          <input></input>
          <button>Subscribe</button>
        </div>
        <p>Check your email please</p>
      </div>
    </footer>
  )
}

export default Footer
