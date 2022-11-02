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
                <li><Link to={'/archived'}>Archived</Link></li>
            </ul>}
            {theme==='light'?<div style={{color:'white'}}><BsSun onClick={toggleTheme} size={30}></BsSun></div>:<BsMoon onClick={toggleTheme} size={30}/>}
        </div>
    </header>
  )
}
