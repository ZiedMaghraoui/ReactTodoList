import React from 'react'
import Button from './Button'

const itemdivstyle = {
  width : '100%',
  height : '5vh',
  display : 'flex', 
  justifyContent : 'center',
  alignItems : 'center'
}

const labelstyle ={
  display : 'inline-block',
  width : '50%'
}


const TodoItem = ({itemtext, rem}) => {
  const checktodo = (e) => {
    const check = e.target
    const label = check.nextSibling
    if (check.checked){
      label.style.textDecoration = 'line-through'
      label.style.color = 'gray'
    } else {
      label.style.textDecoration = 'none'
      label.style.color = 'black'
    }
  }
  
  return (
  <div style={itemdivstyle}>
    <input type='checkbox' style={{marginRight : 10}} onClick={checktodo} />
    <label style={labelstyle} htmlFor={itemtext}>{itemtext}</label>
    <Button func={rem} type='remove'/>
  </div>
)}


export default function TodosList({arraytodos, rem}) {
  const formattedtodos = arraytodos.map((item) => (<TodoItem itemtext={item} rem={rem} key={item} />))
  return (formattedtodos)
}
