import React from 'react'
import UseInput from '../components/UseInput';
import { Link } from 'react-router-dom';

export default function LoginInput({onLogin}) {
  const [email, setEmail] = UseInput('');
  const [password, setPassword] = UseInput('');
  function onSubmitHandler(e){
    e.preventDefault();
    onLogin({email,password});
  }

  return (
    <form className='input-login' onSubmit={onSubmitHandler}>
        <label htmlFor='email'>Email</label>
        <input id='email' className='input-login' type={'email'} placeholder='test@123.com' value={email} onChange={setEmail}></input>
        <label htmlFor='password'>Password</label>
        <input id='password' type={'password'} placeholder='test1234' value={password} onChange={setPassword}></input>
        <button type='submit'>Sign in</button>
        <h4>Belum punya akun? Ayo <Link to={'/register'}>sign up</Link></h4>
    </form>
  )
}
