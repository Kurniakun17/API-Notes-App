import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login';
import Register from './pages/Register';
import {FiLogOut} from 'react-icons/fi';
import { getUserLogged, putAccessToken } from './utils/network-data';

export default function App() {
    const [auth, setAuth] = useState();
    const [loading, setLoading] = useState();
    const [initializing, setInitializing] = useState(true);

    useEffect(()=>{
        getUserLogged().then(({error, data})=>{
            if(!error){
                setAuth(data);
                setInitializing(false);
            }else{
                setInitializing(false);
            }
        })
    },[])

    async function LoginSucces({accessToken}){
        putAccessToken(accessToken);
        const {data} = await getUserLogged();
        setAuth(data);
    }

    function onLogoutHandler(){
        setAuth(()=>{
            return null
        })
        putAccessToken('')
    }

    return (<>
            {initializing ? null :
            <div>
                {!auth && 
                <Routes>
                    <Route path='/*' element={<Login LoginSucces={LoginSucces}></Login>}/>
                    <Route path='/register' element={<Register></Register>}/>
                </Routes>
                }
                {
                    auth && 
                    <>
                        <p>Welcome! {auth.name}</p>
                        <FiLogOut onClick={onLogoutHandler}></FiLogOut>
                    </>
                    
                }
            </div>
            }
        </>
    )
}
