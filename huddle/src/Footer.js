import React from 'react'
import './Footer.css'
import wave from './images/bg-footer-top-desktop.svg'
function Footer() {
  return (
    <footer className="flex">
      {/* LEFT SECTION */}
      <div className="left-footer">
        <div>
          <div className="footer-logo">a</div>
          <p className="lorem">
            lorem ipsum dolor sit amet, consectetur adispicing elit. Mauris
            nulla quam, hendrerit lacinia vestibulum a, ultrices quis sem.
          </p>
        </div>
        <div className="phone-number">
          <div classname="phone-no-img">a</div>
          <div>
            <p>Phone: +1-543-123-4567</p>
          </div>
        </div>
        <div className="email">
          <div className="email-img">a</div>
          <h2>example@huddle.com</h2>
        </div>
        <div>
          <span className="fb">
            <FontAwesomeIcon icon="fa-brands fa-facebook" />
          </span>
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
