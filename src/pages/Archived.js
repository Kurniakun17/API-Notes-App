import React, { useEffect, useState } from 'react'
import NotesList from '../components/NotesList';
import { getArchivedNotes } from '../utils/network-data';
import SearchBar from '../components/SearchBar';
import UseInput from '../contexts/UseInput';

export default function Archived() {
    const [notes, setNotes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [keyword, setKeyword] = UseInput('');

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
            <SearchBar keyword={keyword} onKeywordChange={setKeyword}></SearchBar>
            <NotesList notes={notes} keyword={keyword}></NotesList>
        </div>
    )
}
