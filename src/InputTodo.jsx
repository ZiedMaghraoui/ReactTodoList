import React from 'react'
import Button from './Button'

const inputStyle = {
  width : '100%',
  marginBottom : '7%',
  borderRadius : '10em',
  borderWidth : 1,
  height : '65%',
  boxShadow: '-10px 9px 24px 2px rgba(0,0,0,0.1)'
}

export default function InputTodo({val,change,add}) {
  return (
    <div style={{width : '60%', marginBottom : '12px'}}>
      <input name='inp' type='text' value={val} onChange={change} 
        placeholder='  Add todo...' style={inputStyle}/>
      <Button func={add} type='add'/>
    </div>
  )
}
