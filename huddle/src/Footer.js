import React from 'react'
import './Footer.css'
import wave from './images/bg-footer-top-desktop.svg'
function Footer() {
  return (
    <footer className="flex">
      {/* LEFT SECTION */}
      <div className="left-footer">
        <div>
          <span></span>
          <h1>
            lorem ipsum dolor sit amet, consectetur adispicing elit. Mauris
            nulla quam, hendrerit lacinia vestibulum a, ultrices quis sem.
          </h1>
        </div>
        <div>
          <span classname="phone-no-img"></span>
        </div>
        <div className="email">
          <span className="email-img"></span>
          <h2>Phone: +1-543-123-4567</h2>
        </div>
        <div>
          <span className="fb"></span>
          <span className="insta"></span>
          <span className="twitter"></span>
        </div>
      </div>

      {/* RIGHT-SECTION */}
      <div className="right-footer">
        <h1>NEWSLETTER</h1>
        <p>
          To receive tips on how to grow your community, \n sign up to our
          weekly newsletter. We'll never send you spam or pass on your email
          address
        </p>
        <div className="flex">
          <input></input>
          <button>Subscribe</button>
        </div>
        <p>Check your email please</p>
      </div>
    </footer>
  )
}

export default Footer
