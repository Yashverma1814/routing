import React, { useContext } from 'react'
import { Input} from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import { AuthContext } from '../context/AuthContext'
import { Link, Navigate } from 'react-router-dom'

export const Login = () => {

    const [email,setEmail] = React.useState('');
    const [password,setPassword] = React.useState('');
    const {token,loading, handleLogin} = useContext(AuthContext)
    
    if(token==='QpwL5tke4Pnpja7X4'){
        return <Navigate to='/' />
    }

    return (
        <div>
        <center>
        <div  style={{width:"20rem"}}>
            <h2>Login</h2>
            <Input variant='outline' placeholder='Enter Email' value={email} onChange={(e)=>setEmail(e.target.value)} />
            <Input variant='outline' placeholder='Enter Password' value={password} onChange={(e)=>setPassword(e.target.value)} />
            <Link to={`/`}>
            {!loading?(<Button colorScheme='blue' onClick={()=>handleLogin({email,password})}>Log In</Button>):(
                <Button isLoading colorScheme='blue' variant='solid'>
                Email
              </Button>
            )}
            </Link>
        </div>
        </center>
        </div>
    )
}
