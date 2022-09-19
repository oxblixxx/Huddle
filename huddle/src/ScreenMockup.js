import React from 'react'
import Screenmockups from './images/screen-mockups.svg'
import './ScreenMockup.css'

function ScreenMockup() {
  return (
    <div className="full mt6">
      <img className="mock" src={Screenmockups} alt="screen" />
    </div>
  )
}

export default ScreenMockup
