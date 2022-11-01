import React, { useEffect, useState } from 'react'
import NotesList from '../components/NotesList';
import { getArchivedNotes } from '../utils/network-data';

export default function Archived() {
    const [notes, setNotes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        getArchivedNotes().then(({error, data})=>{
            if(!error){
                setNotes(data);
                setLoading(false);
            }
        })
    },[])

    if(loading){
        return <div className='notes-empty-list'>
            <p>Loading . . .</p>
        </div>
    }

    return (
        <div>
            <h1>Archived Notes</h1>
            <NotesList notes={notes}></NotesList>
        </div>
    )
}
