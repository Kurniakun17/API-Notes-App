import React from 'react'
import { showFormattedDate } from '../utils'

export default function NoteItem({title, createdAt, body}) {
    createdAt = showFormattedDate(createdAt);
  return (
    <div className='note-item'>
        <h4 className='note-item__title'>
            {title}
        </h4>
        <p className='note-item__createdAt'>
            {createdAt}
        </p>
        <p className='note-item__body'>
            {body}
        </p>
    </div>
  )
}
