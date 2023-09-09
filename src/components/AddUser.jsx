import React, { useState } from 'react'
import { useGlobleContext } from '../context/Context'
import { v4 as uuid } from 'uuid'

const AddUser = () => {

  const { addUser } = useGlobleContext()
  const [inputFirld, setInputFirld] = useState('')

  const handleChange = (e) => {
    setInputFirld(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    const newData = {
      id: uuid,
      name: inputFirld
    }
    addUser(newData)
  }

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <label>Name :-</label>
          <input type='text' name='name' value={inputFirld} onChange={handleChange} placeholder='Enter Name' />
          <button type='submit'>Submit</button>
        </form>
        <a href='/'>Cancel</a>
      </div>
    </>
  )
}

export default AddUser