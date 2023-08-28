import React from 'react'
import Label from './Label'
import Input from './Input'

const InputForm = (props) => {
    const { name,label,type,placeholder}=props
  return (
    <div>
       <div className="mb-6">
        <Label htmlFor = {name}>{label}</Label>
        <Input name={name} type= {type} placeholder={placeholder}></Input>
       </div>
    </div>
  )
}

export default InputForm
