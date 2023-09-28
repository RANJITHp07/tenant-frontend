import React from 'react'

function Form() {
  return (
    <div>
        <form>
            <input type='text' name="username" />
            <input  type='email' name="email"/>
            <input  type='password' name="password"/>
             <input  type='password' name="re-password"/>
        </form>
    </div>
  )
}

export default Form