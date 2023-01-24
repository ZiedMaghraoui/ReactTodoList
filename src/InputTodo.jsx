import React from 'react'
import Button from './Button'

export default function InputTodo({val,change,add}) {
  const inputStyle = {
    width : '100%',
    marginBottom : '7%',
    borderRadius : '10em',
    height : '65%'
  }
  return (
    <div style={{width : '50%', marginBottom : '12px'}}>
      <input name='inp' type='text' value={val} onChange={change} 
        placeholder='    Add todo...' style={inputStyle}/>
      <Button func={add} type='add'/>
    </div>
  )
}
