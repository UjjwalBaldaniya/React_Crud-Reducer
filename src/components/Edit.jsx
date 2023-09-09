import React from 'react'

const Edit = () => {
  return (
    <>
      <div>
        <form>
          <label>Name :-</label>
          <input type='text' name='name' placeholder='Enter Name' />
          <button>Submit</button>
        </form>
        <a href='/'>Cancel</a>
      </div>
    </>
  )
}

export default Edit