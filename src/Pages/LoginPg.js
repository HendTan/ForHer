import React, { useState,useRef } from 'react'
import '../App.css'
import ImageCar from '../component/Carousel'
import StrContent from '../component/Words'

const Login = () => {

    const username = useRef('')
    const password = useRef('')
    const [loggedIn,setLoggedIn] = useState(false)
    const [disabled,setEnabled] = useState(false)
    const handleOnChange = () => {
        if(username.current.value.length < 5 || password.current.value.length < 5){
            setEnabled(false)
        }else{
            setEnabled(true)
        }
    }
    const subBtn = (e) => {
        e.preventDefault()
        if(username.current.value === 'zixin0427' || password.current.value === 'zixin0427'){
            setLoggedIn(true)
        }else{
            username.current.value = ''
            password.current.value = ''
            setLoggedIn(false)
            alert('Something wrong there. Please type the username and password again')
        }
        
    }
    return (
        <div>
            {loggedIn? 
                <div>
                    <ImageCar />
                    <StrContent />
                </div>:
                <div>
                    <form >
                        <h5 style={{color: 'white', fontSize: '26px'}}>Username</h5>
                        <input type='text' ref={username} onChange={handleOnChange} style={{
                            borderRadius: '10px',
                            fontSize: '26px'
                        }}/>
                        <h5 style={{color: 'white', fontSize: '26px'}}>Password</h5>
                        <input type='password'  ref={password} onChange={handleOnChange} style={{
                            borderRadius: '10px',
                            fontSize: '26px'
                        }}/>
                        <button type='submit' onClick={subBtn} disabled={!disabled} style={{
                            borderRadius: '10px'
                        }}>Login</button> 
                    </form>
                </div>
            }
        </div>
    )
}

export default Login