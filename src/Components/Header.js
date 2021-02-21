import React, { useEffect, useState } from 'react'
import './Header.css'


function Header({black}){
    const [blackHeader, setBlackHeader] = useState(false)
    useEffect(()=>{
        const scroll = ()=>{
            if(window.scrollY>10){
                setBlackHeader(true)
            }else{
                setBlackHeader(false)
            }
        }
        window.addEventListener('scroll', scroll)
        return () =>{
            window.removeEventListener('scroll', scroll)
        }
    },[])
    return (
        <header className={blackHeader?'black':''}>
            <div className="header--logo">
                <a href="/">
                    <img src="https://logodownload.org/wp-content/uploads/2014/10/netflix-logo.png" alt="netflix"/>
                </a>
            </div>
            <div className='header--user'>
                <a href="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="user"/>
                </a>
            </div>
        </header>
    )
}

export default Header