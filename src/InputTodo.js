import React from 'react'
import Button from './Button'

export default function InputTodo() {
  const inputStyle = {
    width : '100%',
    marginBottom : '7%',
    borderRadius : '10em',
    height : '65%'
  }
  return (
    <div style={{width : '50%', marginBottom : '12px'}}>
      <input type='text' placeholder='    Add todo...' style={inputStyle}/>
      <Button type='add'/>
    </div>
  )
}
