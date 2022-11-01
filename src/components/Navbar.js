import React, { useContext } from 'react'
import { BsMoon, BsSun } from 'react-icons/bs'
import { Link } from 'react-router-dom';
import ThemeContext from '../contexts/ThemeContext'

export default function Navbar({auth}) {
    const {theme, toggleTheme} = useContext(ThemeContext);

    return (
    <header>
        <div className='navigation'>
            <h1><Link to='/'>Notes App</Link></h1>
            {auth && 
            <ul>
                <li><Link to={'/add'}>Add Note</Link></li>
                <li><Link>Archived</Link></li>
                <li></li>
            </ul>}
            {theme==='light'?<BsMoon onClick={toggleTheme} size={30} />:<BsSun onClick={toggleTheme} size={30}></BsSun>}
        </div>
    </header>
  )
}
