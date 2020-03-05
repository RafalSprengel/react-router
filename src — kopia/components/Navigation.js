import React from 'react';
import { NavLink } from 'react-router-dom'

const Navigation = () => {
    return (
        <>
            <ul>
                <li>
                    <NavLink exact to='/'>Home</NavLink>
                </li>
                <li>
                    <NavLink to='/products'>Products</NavLink>
                </li>
                <li>
                    <NavLink to='/contact'>Contact</NavLink>
                </li>
                <li>
                    <NavLink to='/admin'>Admin</NavLink>
                </li>
            </ul>
        </>
    )
}

export default Navigation