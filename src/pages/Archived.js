import React, { useContext, useEffect, useState } from 'react'
import NotesList from '../components/NotesList';
import { getArchivedNotes } from '../utils/network-data';
import SearchBar from '../components/SearchBar';
import LocaleContext from '../contexts/LocaleContext';
import { useSearchParams } from 'react-router-dom';

export default function Archived() {
    const {locale} = useContext(LocaleContext);
    const [notes, setNotes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchParams, setSearchParams] = useSearchParams();
    const [keyword, setKeyword] = useState(searchParams.get('title')||'');

    useEffect(()=>{
        getArchivedNotes().then(({error, data})=>{
            if(!error){
                setNotes(data);
                setLoading(false);
            }
        })
    },[])

    function onKeywordChange(word){
        setKeyword(word);
        setSearchParams({title:word})
    }

    if(loading){
        return <div className='notes-empty-list'>
            <p>Loading . . .</p>
        </div>
    }

    return (
        <div>
            <h1>{locale ==='en'?'Archived Notes':'Catatan Terarsip'}</h1>
            <SearchBar keyword={keyword} onKeywordChange={onKeywordChange}></SearchBar>
            <NotesList notes={notes} keyword={keyword}></NotesList>
        </div>
    )
}
