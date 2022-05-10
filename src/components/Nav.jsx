import React from 'react'
import {Link} from 'react-router-dom'

function Nav() {
  return (
    <nav>
        <h1><Link to='/'>r-book</Link></h1>
        <ul>
            <li>
                <Link to='/'>HOME</Link>
            </li>
            <li>
                <Link to='/about'>ABOUT</Link>
            </li>
            <li>
                <Link to='/contact'>CONTACT</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Nav