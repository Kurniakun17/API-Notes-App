import React from 'react'

import NoteItem from './NoteItem';

export default function NotesList({notes}) {
    return (
        <div className='notes-list'>
            {notes.map((note)=>{
                return <NoteItem key={note.id} {...note}></NoteItem>
            })}
        </div>
    )
}
