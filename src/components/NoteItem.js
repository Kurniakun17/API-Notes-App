import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { showFormattedDate } from '../utils'

export default function NoteItem({id, title, createdAt, body, archived, onDelete,}) {
    const navigate = useNavigate();
    createdAt = showFormattedDate(createdAt);

    return (
        <div className='note-item'>
            <h2 className='note-item__title'>
                <Link to={`/detailed/${id}`}>{title}</Link>
            </h2>
            <p className='note-item__createdAt'>
                {createdAt}
            </p>
            <p className='note-item__body'>
                {body}
            </p>
        </div>
    )
}
