import React,{useContext} from 'react'
import UseInput from '../contexts/UseInput';
import { Link } from 'react-router-dom';
import LocaleContext from '../contexts/LocaleContext'
import PropTypes from 'prop-types';

export default function LoginInput({onLogin}) {
  const {locale} = useContext(LocaleContext);
  const [email, setEmail] = UseInput('');
  const [password, setPassword] = UseInput('');
  function onSubmitHandler(e){
    e.preventDefault();
    onLogin({email,password});
  }

  return (
    <form className='input-login' onSubmit={onSubmitHandler}>
        <label htmlFor='email'>Email</label>
        <input id='email' className='input-login' type={'email'} placeholder="'test@123.com'" value={email} onChange={setEmail}></input>
        <label htmlFor='password'>Password</label>
        <input id='password' type={'password'} placeholder="'test1234'" value={password} onChange={setPassword}></input>
        <button type='submit' className='button'>Login</button>
        <h4>{locale === 'en' ? "Don't have an account? ":"Belum punya akun? "}<Link to={'/register'}>Sign up</Link></h4>
    </form>
  )
}

LoginInput.propTypes={
  onLogin:PropTypes.func.isRequired
}