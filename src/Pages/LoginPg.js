import React, { useState,useRef } from 'react'

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
                        <input type='text' ref={username} onChange={handleOnChange} style={{
                            borderRadius: '10px',
                            position: 'relative',
                            top: '100px',
                            left: '0px'
                        }}/>
                        <input type='password'  ref={password} onChange={handleOnChange} style={{
                            borderRadius: '10px',
                            left: '0px'
                        }}/>
                        <button type='submit' onClick={subBtn} disabled={!disabled} style={{
                            borderRadius: '10px',
                            position: 'relative',
                            top: '200px',
                            left: '-300px'
                        }}>Login</button> 
                    </form>
                </div>
            }
        </div>
    )
}

export default Login