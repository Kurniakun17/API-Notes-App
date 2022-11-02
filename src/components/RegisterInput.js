import React, {useContext} from 'react';
import UseInput from '../contexts/UseInput';
import { Link } from 'react-router-dom';
import LocaleContext from '../contexts/LocaleContext';
import PropTypes from 'prop-types';

export default function RegisterInput({onRegister}) {
    const {locale} = useContext(LocaleContext);
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
        <input id='name' className='input-login' type={'text'} placeholder={"'Kurnia'"} value={name} onChange={setName}></input>
        <label htmlFor='email'>Email</label>
        <input id='email' className='input-login' type={'email'} placeholder="'test123@gmail.com'" value={email} onChange={setEmail}></input>
        <label htmlFor='password'>Password</label>
        <input id='password' type={'password'} placeholder="'test1234'" value={password} onChange={setPassword}></input>
        <label htmlFor='confirm' >Confirm</label>
        <input id='confirm' type={'password'} placeholder="'test1234'" value={confirm} onChange={setConfirm}></input>
        <button type='submit'>Sign Up </button>
        <h4>{locale === 'en'? 'Already have an account? ':'Sudah punya akun? '}<Link to={'/'}>Login</Link></h4>
    </form>
  )
}

RegisterInput.propTypes={
  onRegister:PropTypes.func.isRequired
}