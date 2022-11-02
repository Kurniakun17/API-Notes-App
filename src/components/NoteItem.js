import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import LocaleContext from '../contexts/LocaleContext';
import { showFormattedDate } from '../utils'
import PropTypes from 'prop-types';

export default function NoteItem({id, title, createdAt, body}) {
    const {locale} = useContext(LocaleContext);
    createdAt = showFormattedDate(createdAt, locale);

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

NoteItem.propTypes={
    id:PropTypes.string.isRequired, 
    title:PropTypes.string.isRequired,
    createdAt:PropTypes.string.isRequired,
    body:PropTypes.string.isRequired
}