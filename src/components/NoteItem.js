import React from 'react'
import { Link } from 'react-router-dom';
import { showFormattedDate } from '../utils'

export default function NoteItem({id, title, createdAt, body}) {
    createdAt = showFormattedDate(createdAt);
    
    return (
        <div className='note-item'>
            <h4 className='note-item__title'>
                <Link to={`/detailed/${id}`}>{title}</Link>
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
