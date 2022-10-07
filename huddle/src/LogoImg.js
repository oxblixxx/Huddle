import React from 'react'
import Logo from './images/logo.svg'

function LogoImg() {
  return (
    <>
      <img
        clssName="footer-logo"
        src={Logo}
        style={{
          width: '200px',
          height: '60px',
          background: 'white',
        }}
      />
    </>
  )
}

export default LogoImg
