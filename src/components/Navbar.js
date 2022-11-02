import React, { useContext } from 'react'
import { BsMoon, BsSun } from 'react-icons/bs'
import { Link } from 'react-router-dom';
import LocaleContext from '../contexts/LocaleContext';
import ThemeContext from '../contexts/ThemeContext'
import PropTypes from 'prop-types'

export default function Navbar({auth}) {
    const {locale, toggleLocale} = useContext(LocaleContext);
    const {theme, toggleTheme} = useContext(ThemeContext);

    return (
    <header>
        <div className='navigation'>
            <h1><Link to='/'>{locale === 'en'? 'Notes App' : 'Aplikasi Catatan'}</Link></h1>
            {auth && 
            <ul>
                <li><Link to={'/add'}>{locale === 'en'?'Add Note':'Tambah Catatan'}</Link></li>
                <li><Link to={'/archived'}>{locale === 'en'?'Archived':'Terarsip'}</Link></li>
            </ul>}
            <div className='icon-container'>
            {locale==='en'?<h1 onClick={toggleLocale}>ID</h1>:<h1 onClick={toggleLocale}>EN</h1>}    
            {theme==='light'?<BsMoon className='theme-icon' onClick={toggleTheme} size={30}/>:<div style={{color:'white'}}><BsSun className='theme-icon' onClick={toggleTheme} size={30}></BsSun></div>}
            </div>
        </div>
    </header>
    )
}

Navbar.propTypes={
    auth: PropTypes.object
}