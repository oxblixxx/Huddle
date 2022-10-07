import React from 'react'
import './Contact.css'
import email from './images/icon-email.svg'
import phone from './images/icon-phone.svg'

function Contact() {
  return (
    <section>
      <div className="phone-tab">
        <img
          className="phone-img"
          src={phone}
          style={{ width: '17px', height: '17px' }}
        />
        <p className="phone">Phone:+1-212-282-3873</p>
      </div>
      <div className="email-tab">
        <img src={email} style={{ width: '17px', height: '17px' }} />
        <p className="email">example@huddle.com</p>
      </div>
    </section>
  )
}

export default Contact
