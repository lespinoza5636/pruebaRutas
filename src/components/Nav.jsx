import React from 'react'

function Nav() {
  return (
    <nav>
      <ul className='flex flex-row'>
        <li className='mx-5'><a href="/">Dashboard</a></li>
        <li><a href="/card/1">Cards</a></li>
      </ul>
    </nav>
  )
}

export default Nav