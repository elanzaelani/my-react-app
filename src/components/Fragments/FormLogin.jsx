import React from 'react'
import InputForm from '../Elements/Input'
import Button from '../Elements/Button'

const FormLogin = () => {
  const handleLogin = (e) => {
    e.preventDefault()
    localStorage.setItem('email', e.target.email.value)
    localStorage.setItem('password', e.target.email.value)
    console.log(e.target.email.value)
    console.log(e.target.password.value)
    console.log("Login yuk")
    window.location.href="/products"
  }
  return (
    <div>
      <form onSubmit={handleLogin}>
          <InputForm 
          label="Email"
          type="email"
          placeholder="example@gmail.com"
          name="email"
          />
          <InputForm 
          label="Password"
          type="password"
          placeholder="******"
          name="password"
          />
          <Button variant="bg-blue-600 w-full" type="submit">Login</Button>
        </form>
    </div>
  )
}

export default FormLogin
