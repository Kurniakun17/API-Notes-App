import React, {useState, useEffect, useContext} from 'react'
import {FiLogOut} from 'react-icons/fi';
import NotesList from '../components/NotesList';
import SearchBar from '../components/SearchBar';
import LocaleContext from '../contexts/LocaleContext';
import { getActiveNotes } from '../utils/network-data';
import { useSearchParams } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function Home({onLogout, name}) {
  const {locale} = useContext(LocaleContext);
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const [keyword, setKeyword] = useState(searchParams.get('title')||'');

  useEffect(()=>{
    setLoading(true);
    getActiveNotes().then(({data})=>{
      setNotes(data);
      setLoading(false);
      
    })
  },[])

  function onKeywordChange(word){
    setKeyword(word);
    setSearchParams({title:word})
}

  return (
      <div className="home-container">
        <div className="home-header">
          <h1>{locale === 'en'? 'Welcome back, ':'Selamat datang kembali, '}{name}!</h1>
          <div className="button-logout" onClick={onLogout}>
            <FiLogOut className='button-logout' size={30}></FiLogOut>
            <p>Logout</p>
          </div>
        </div>
        <h1>{locale === 'en' ? 'Active Notes': 'Catatan Aktif'}</h1>
          {loading ?
          <div className='notes-list-empty'>
            <p>Loading . . .</p>
          </div> : 
          notes.length !== 0 ? 
            <>
              <SearchBar keyword={keyword} onKeywordChange={onKeywordChange}></SearchBar>
              <NotesList notes={notes} keyword={keyword}></NotesList>
            </> :
          <div className='notes-list-empty'>
            <p>{locale === 'en'?'Notes empty!':'Catatan Kosong!'}</p>
          </div>}
      </div>
  )
}

Home.propTypes={
  onLogout:PropTypes.func.isRequired,
  name:PropTypes.string.isRequired
}