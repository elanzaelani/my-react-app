import React from 'react'
import InputForm from '../Elements/Input'
import Button from '../Elements/Button'

const FormRegister = () => {
  return (
    <div>
      <form action="">
      <InputForm 
          label="Fullname"
          type="text"
          placeholder="Full Name"
          name="fullname"
          />
          <InputForm 
          label="Email"
          type="email"
          placeholder="example@gmail.com"
          name="email"
          />
          <InputForm 
          label="Password"
          type="password"
          placeholder="******gdf"
          name="password"
          />
          <InputForm 
          label="Confirm Password"
          type="password"
          placeholder="******"
          name="confpassword"
          />
          <Button variant="bg-blue-600 w-full">Register</Button>
        </form>
    </div>
  )
}

export default FormRegister
