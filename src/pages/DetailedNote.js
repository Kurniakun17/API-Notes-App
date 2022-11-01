import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { showFormattedDate } from '../utils';
import { archiveNote, deleteNote, getNote, unarchiveNote } from '../utils/network-data';
import Button from '../components/Button'

export default function DetailedNote() {
  const navigate = useNavigate();

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

  async function onDeleteHandler(id){
    const response = await deleteNote(id);
    navigate('/')
  }

  async function onArchivedHandler(id){
    const response = await archiveNote(id);
    navigate('/')
  }

  async function onUnarchivedHandler(id){
    const response = await unarchiveNote(id)
    navigate('/')
  }


  return (
    <div className='detail-page'>
      <div className="note-item">
        <h2 className='detail-page__title'>
          {note.title}
        </h2>
        <p className='detail-page__createdAt'>
          {showFormattedDate(note.createdAt)}
        </p>
        <p className='detail-page__body'>
          {note.body}
        </p>
        <div className="button-container">
          <Button value={'Edit'} ></Button>
          {note.archived?<Button value={'Unarchived'} func={()=>onUnarchivedHandler(id)} ></Button>:<Button value={'Archived'} func={()=>onArchivedHandler(id)}></Button>}
          <Button value={'Delete'} func={()=>onDeleteHandler(id)}></Button>
        </div>
      </div>
    </div>
  )
}
