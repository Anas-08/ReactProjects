import React from 'react'

export default function Navigation() {
  return (
    <>
      <nav className=''>
        <div>
          <img src="/images/brand_logo.png" alt="logo" />
        </div>
        <ul>
          <li>Menu</li>
          <li>Location</li>
          <li>About</li>
          <li>Contact</li>
        </ul>

        <button>Login</button>
      </nav>
    </>
  )
}
