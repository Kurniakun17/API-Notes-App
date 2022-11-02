import React, { useEffect, useMemo, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login';
import Register from './pages/Register';
import { getUserLogged, putAccessToken } from './utils/network-data';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ThemeContext from './contexts/ThemeContext';
import LocaleContext from './contexts/LocaleContext';
import Add from './pages/Add';
import DetailedNote from './pages/DetailedNote';
import Archived from './pages/Archived';

export default function App() {
    const [auth, setAuth] = useState();
    const [theme, setTheme] = useState(localStorage.getItem('theme')||'light');
    const [initializing, setInitializing] = useState(true);
    const [locale, setLocale] = useState(localStorage.getItem('locale') || 'en');

    useEffect(()=>{
        getUserLogged().then(({error, data})=>{
            if(!error){
                setAuth(data);
                setInitializing(false);
            }else{
                setInitializing(false);
            }
        })
        document.body.setAttribute('data-theme',theme)
    },[theme])

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

    function toggleLocale(){
        setLocale((prevLocale)=>{
            const newLocale = prevLocale === 'en'?'id':'en';

            localStorage.setItem('locale',newLocale);
            return newLocale
        })
    }

    function toggleTheme(){
        setTheme((prevTheme)=>{
            const newTheme = prevTheme === 'light' ? 'dark' : 'light';
            
            localStorage.setItem('theme', newTheme);
            return newTheme
        })
    }

    const LocaleContextValue = useMemo(()=>{
        return{
            locale,
            toggleLocale
        }
    },[locale])

    const ThemeContextValue = useMemo(()=>{
        return{
            theme,
            toggleTheme
        };
    },[theme]);


    return (<>
            {initializing ? null :
            <ThemeContext.Provider value={ThemeContextValue}>
                <LocaleContext.Provider value={LocaleContextValue}>
                    <Navbar auth={auth}></Navbar>
                    <div className='body-container'>
                        {!auth && 
                        <Routes>
                            <Route path='/*' element={<Login LoginSucces={LoginSucces}></Login>}/>
                            <Route path='/register' element={<Register></Register>}/>
                        </Routes>
                        }
                        {
                            auth && 
                            <Routes>
                                <Route path='/' element={<Home onLogout={onLogoutHandler} name={auth.name}></Home>}></Route>
                                <Route path='/add' element={<Add></Add>}></Route>
                                <Route path='/archived' element={<Archived></Archived>}></Route>
                                <Route path='/detailed/:id' element={<DetailedNote/>}></Route>
                            </Routes>
                        }
                    </div>
                </LocaleContext.Provider>
            </ThemeContext.Provider>
            }
        </>
    )
}
