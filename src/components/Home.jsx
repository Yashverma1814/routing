import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { Navigate } from 'react-router-dom'
import { Navbar } from './Navbar'

export const Home = () => {

  const {token} = useContext(AuthContext)

  if(token===''){
    return <Navigate to='/login' />
  }
  return (
    
    <div>
      <Navbar />
      Home Page
    </div>
  )
}
