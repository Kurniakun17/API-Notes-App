import React from 'react'
import LoginInput from '../components/LoginInput';
import { login } from '../utils/network-data';

export default function Login({LoginSucces}) {
    async function onLogin(user){
        const {error, data} = await login(user);
        if(!error){
            LoginSucces(data);
        }
    }

    return (
        <div className='login-container'>
            <h1>Login</h1>
            <LoginInput onLogin={onLogin}></LoginInput>
        </div>
    )
}
