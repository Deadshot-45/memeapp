import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = ({toggleDarkMode}) => {
  return (
    <header className='flex justify-end px-10 pt-4'>
        <nav>
          <ul className='flex justify-between items-center gap-4 px-6 py-3'>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/memeexplorer">Meme Explorer</Link>
            </li>
            <li>
              <Link to="/memeupload">Meme Upload</Link>
            </li>
            <li>
              <Link to="/userprofile">User Profile</Link>
            </li>
            <li>
              <Link to="/leaderboard">Leaderboard</Link>
            </li>
          </ul>
        </nav>
        <button onClick={toggleDarkMode}>Dark Mode</button>
      </header>
  )
}

export default NavBar