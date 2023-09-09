import React from 'react'
import { useGlobleContext } from '../context/Context'

const Header = () => {

    return (
        <>
            <div className='d-flex'>
                <h1>My Team</h1>
                <a href='/adduser'>Add User</a>
            </div>
        </>
    )
}

export default Header