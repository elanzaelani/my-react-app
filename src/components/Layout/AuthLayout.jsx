import React from 'react'
import { Link } from 'react-router-dom'

function AuthLayout(props) {
    const{children,title,type}=props
  return (
    <div>
       <div className="flex justify-center min-h-screen items-center gap-3">
      <div className="w-full max-w-xs">
        <h1 className="text-3xl font-bold text-blue-600 mb-2">{title}</h1>
        <p className="font-medium text-slate-500 mb-8">
          welcome please enter your dtails{" "}
        </p>
        {children}
        <p className="text-sm mt-5 text-center">
          {type === 'login' ? "Don't have an acount?" : "Have an acount ?"}

          {type === 'login' ? <Link to="/register" className="font-bold text-blue-600"> Sign Up</Link> : <Link to="/login" className="font-bold text-blue-600"> Login</Link>}
          
        </p>
      </div>
      </div>
    </div>
  )
}

export default AuthLayout
