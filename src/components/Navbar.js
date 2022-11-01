import React, { useContext } from 'react'
import { BsMoon, BsSun } from 'react-icons/bs'
import ThemeContext from '../contexts/ThemeContext'

export default function Navbar() {
    const {theme, toggleTheme} = useContext(ThemeContext);

    return (
    <header>
        <div className='navigation'>
            <h1>Notes App</h1>
            {theme==='light'?<BsMoon onClick={toggleTheme} size={30}/>:<BsSun onClick={toggleTheme} size={30}></BsSun>}
        </div>
    </header>
  )
}
