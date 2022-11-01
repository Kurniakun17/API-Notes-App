import React from 'react'
import { useNavigate } from 'react-router-dom';
import UseInput from '../contexts/UseInput';
import { addNote } from '../utils/network-data';

export default function AddNote() {
    const navigate = useNavigate();
    const [title, setTitle] = UseInput();
    const [body, setBody] = UseInput();

    const onSubmitHandler = async (e)=>{
        e.preventDefault();

        await addNote({title,body})
        navigate('/')
    }
    
  return (
    <form onSubmit={onSubmitHandler}>
        <input type="text" className='add-new-page__input__title' placeholder="Title" value={title} onChange={setTitle} required/>
        <textarea type="text" className='add-new-page__input__body' placeholder="Body" value={body} onChange={setBody} required/>
        <button type='submit' className='button'>Submit</button>
    </form>
  )
}
