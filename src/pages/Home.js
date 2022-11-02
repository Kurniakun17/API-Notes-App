import React, {useState, useEffect} from 'react'
import {FiLogOut} from 'react-icons/fi';
import NotesList from '../components/NotesList';
import SearchBar from '../components/SearchBar';
import UseInput from '../contexts/UseInput';
import { getActiveNotes } from '../utils/network-data';

export default function Home({onLogout, name}) {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [keyword, setKeyword] = UseInput('');
  
  useEffect(()=>{
    setLoading(true);
    getActiveNotes().then(({data})=>{
      setNotes(data);
      setLoading(false);
    })
  },[])

  return (
      <div className="home-container">
        <div className="home-header">
          <h1>Welcome back, {name}!</h1>
          <div className="button-logout" onClick={onLogout}>
            <FiLogOut className='button-logout' size={30}></FiLogOut>
            <p>Logout</p>
          </div>
        </div>
        <h1>Active Notes</h1>
          {loading ?
          <div className='notes-list-empty'>
            <p>Loading . . .</p>
          </div> : 
          notes.length !== 0 ? 
            <>
              <SearchBar keyword={keyword} onKeywordChange={setKeyword}></SearchBar>
              <NotesList notes={notes} keyword={keyword}></NotesList>
            </> :
          <div className='notes-list-empty'>
            <p>Catatan Kosong!</p>
          </div>}
      </div>
  )
}
