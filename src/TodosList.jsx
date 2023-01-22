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


const TodoItem = ({itemtext}) => {
  const checktodo = () => {
    const check = document.querySelector('#'+itemtext)
    const label = check.nextSibling
    if (check.checked){
      label.style.textDecoration = 'line-through'
    } else {
      label.style.textDecoration = 'none'
    }
  }
  
  return (
  <div style={itemdivstyle}>
    <input type='checkbox' id={itemtext} style={{marginRight : 10}} onClick={checktodo} />
    <label style={labelstyle} htmlFor={itemtext}>{itemtext}</label>
    <Button type='remove'/>
  </div>
)}


export default function TodosList({arraytodos}) {
  const formattedtodos = arraytodos.map((item) => (<TodoItem itemtext={item} key={item} />))
  return (formattedtodos)
}
