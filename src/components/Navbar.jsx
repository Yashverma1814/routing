import React from 'react'
import {Link} from 'react-router-dom'

export const Navbar = () => {
  return (
    <div className='nav'>
        <Link to="/">Home</Link>
        <Link to="/product">Products</Link>
        <Link to="/product/:id">Products Details</Link>
    </div>
  )
}
