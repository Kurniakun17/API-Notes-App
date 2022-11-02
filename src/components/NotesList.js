import React from 'react'

import NoteItem from './NoteItem';

export default function NotesList({notes, keyword}) {
    notes = notes.filter((note)=>{
        return note.title.toLowerCase().includes(keyword.toLowerCase())
    })
    
    return (
        <div className='notes-list'>
            {notes.map((note)=>{
                return <NoteItem key={note.id} {...note}></NoteItem>
            })}
        </div>
    )
}
