import React, {useState, useEffect} from 'react'
import {FiLogOut} from 'react-icons/fi';
import NotesList from '../components/NotesList';
import { getActiveNotes } from '../utils/network-data';

export default function Home({onLogout, name}) {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
      getActiveNotes().then(({data})=>{
          setNotes(data);
          setLoading(false);
      })
  },[])
  return (
      <div className="home-container">
        <div className="home-header">
          <h1>Welcome back, {name}!</h1>
          <div className="button-logout">
            <FiLogOut className='button-logout' onClick={onLogout} size={30}></FiLogOut>
            <p>Logout</p>
          </div>
        </div>
        <h1>Active Notes</h1>
        <div className='notes-body'>
          {loading ? 
          <div className='notes-list-empty'>
            <p>Loading . . .</p>
          </div> : 
          <NotesList notes={notes}></NotesList>}
        </div>
      </div>
  )
}
