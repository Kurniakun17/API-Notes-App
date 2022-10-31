import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login';
import Register from './pages/Register';
import { getUserLogged, putAccessToken } from './utils/network-data';

export default function App() {
    const [auth, setAuth] = useState();
    const [loading, setLoading] = useState();

    useEffect(()=>{
        getUserLogged().then(({error, data})=>{
            if(!error){
                setAuth(data);
            }
        })
    },[])

    async function LoginSucces({accessToken}){
        putAccessToken(accessToken);
        const {data} = await getUserLogged();

        setAuth(data);
    }

    return (
        <div>
            {!auth && 
            <Routes>
                <Route path='/*' element={<Login LoginSucces={LoginSucces}></Login>}/>
                <Route path='/register' element={<Register></Register>}/>
            </Routes>
            }
            {
                auth && 
                <p>Welcome! {auth.name}</p>
            }
        </div>
    )
}
