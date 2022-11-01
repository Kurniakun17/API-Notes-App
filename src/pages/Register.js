import React from 'react'
import { register } from '../utils/network-data';
import RegisterInput from '../components/RegisterInput';
import { useNavigate } from 'react-router-dom';


export default function Register() {
    const navigate = useNavigate();
    async function onRegisterHandler(name,email,password,confirm){
        if(password === confirm){
            const user = {name, email, password}
            const {error} = await register(user);
            if(!error){
                navigate('/');
            }
            return;
        }
        alert('password dan konfirmasi password tidak sesuai!')
    }

    return (
        <div className='register-container'>
            <h1>Register</h1>
            <RegisterInput onRegister={onRegisterHandler}></RegisterInput>
        </div>
    )
}
