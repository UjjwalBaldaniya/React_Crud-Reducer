import React from 'react'
import { useGlobleContext } from '../context/Context'

const UserList = () => {

    const { users, deleteUser } = useGlobleContext()
    console.log(users)
    return (
        <>
            {users.map((user) => (
                <div className='d-flex' key={user.id}>
                    <p>{user.name}</p>
                    <a href={`/edit/${ user.id }`}>Edit</a>
                    <button onClick={() => deleteUser(user.id)}>Delete</button>
                </div>
            ))}
        </>
    )
}

export default UserList