import React from 'react'
import UseInput from '../contexts/UseInput';
import { Link } from 'react-router-dom';

export default function RegisterInput({onRegister}) {
    const [name, setName] = UseInput('');
    const [email, setEmail] = UseInput('');
    const [password, setPassword] = UseInput('');
    const [confirm, setConfirm] = UseInput('');

    function onSubmitHandler(e){
        e.preventDefault()
        onRegister(name,email,password,confirm);
    }

  return (
    <form className='input-register' onSubmit={onSubmitHandler}>
        <label htmlFor='name'>Name</label>
        <input id='name' className='input-login' type={'text'} placeholder='Masukan Nama' value={name} onChange={setName}></input>
        <label htmlFor='email'>Email</label>
        <input id='email' className='input-login' type={'email'} placeholder='Masukan Email' value={email} onChange={setEmail}></input>
        <label htmlFor='password'>Password</label>
        <input id='password' type={'password'} placeholder='Masukkan Password' value={password} onChange={setPassword}></input>
        <label htmlFor='confirm' >Confirm</label>
        <input id='confirm' type={'password'} placeholder='Konfirmasi Password' value={confirm} onChange={setConfirm}></input>
        <button type='submit'>Sign Up </button>
        <h4>Kembali ke <Link to={'/'}>Login</Link> page</h4>
    </form>
  )
}
