import React from 'react'
import Button from './Button'

export default function InputTodo() {
  const inputStyle = {
    width : '90%',
    marginBottom : '7%'
  }
  return (
    <div style={{width : '50%'}}>
      <input type='text' placeholder='Add todo...' style={inputStyle}/>
      <Button type='add'/>
    </div>
  )
}
