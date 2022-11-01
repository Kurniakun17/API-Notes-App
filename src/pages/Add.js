import React from 'react'
import AddNote from '../components/AddNote'


export default function Add() {
  return (
    <div className='add-container'>
      <h1>Add Notes</h1>
        <div className="add-new-page__input">
            <AddNote></AddNote>
        </div>
    </div>
  )
}
