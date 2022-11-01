import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { showFormattedDate } from '../utils';
import { getNote } from '../utils/network-data';


export default function DetailedNote() {
  const [loading, setLoading] = useState(true);
  const {id} = useParams();
  const [note, setNote] = useState(async ()=>{
    getNote(id).then(({error,data})=>{
      if(!error){
        setLoading(false);
        setNote(data);
      }
    })
  })

  if(loading){
    return <p>Loading . . . </p>
  }

  return (
    <div className='detail-page'>
      <div className="note-item">
        <h4 className='detail-page__title'>
          {note.title}
        </h4>
        <p className='detail-page__createdAt'>
          {showFormattedDate(note.createdAt)}
        </p>
        <p className='detail-page__body'>
        {note.body}
        </p>
      </div>
    </div>
  )
}
