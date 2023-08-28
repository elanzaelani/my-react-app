import React from 'react'
import AuthLayout from '../components/Layout/AuthLayout'
import FormRegister from '../components/Fragments/FormRegister'
import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <div>
      <AuthLayout title= "Register" type ="register">
        <FormRegister/>
      </AuthLayout>
    </div>
  )
}

export default RegisterPage
