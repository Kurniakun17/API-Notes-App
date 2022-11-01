import React from 'react'
import {FiLogOut} from 'react-icons/fi';

export default function Home({onLogout, name}) {
  return (
      <div className="home-container">
        <div className="home-header">
          <h1>Welcome back, {name}!</h1>
          <div className="button-logout">
            <FiLogOut className='button-logout' onClick={onLogout} size={30}></FiLogOut>
            <p>Logout</p>
          </div>
        </div>
      </div>
  )
}
