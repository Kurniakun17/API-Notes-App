import React, { useContext } from 'react'
import AddNote from '../components/AddNote'
import LocaleContext from '../contexts/LocaleContext'


export default function Add() {
  const {locale} = useContext(LocaleContext);
  return (
    <div className='add-container'>
      <h1>{locale==='en'?'Add Notes':'Tambah Catatan'}</h1>
        <div className="add-new-page__input">
            <AddNote></AddNote>
        </div>
    </div>
  )
}
