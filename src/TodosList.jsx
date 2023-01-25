import React from 'react'
import Button from './Button'

const itemdivstyle = {
  width : '70%',
  marginBottom : '2%',
  display : 'flex', 
  alignItems : 'center'
}
const labelstyle ={
  flexGrow : '128',
  fontSize : 18
}

// ~~~~~~ Todo item component
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
    <input type='checkbox' style={{marginRight : 10, flexGrow : '1'}} onClick={checktodo} />
    <label style={labelstyle} htmlFor={itemtext}>{itemtext}</label>
    <Button func={rem} type='remove'/>
  </div>
  )
}

// ~~~~~~ Todo list component
const todoliststyle = {
  width : '100%',
  display : 'flex',
  flexDirection : 'column',
  alignItems : 'center',
  height : '50vh',
  overflow : 'auto',
}

export default function TodosList({arraytodos, rem}) {
  return ( 
    <div style={todoliststyle} >
      {arraytodos.map((item) => (<TodoItem itemtext={item} rem={rem} key={item} />))}
    </div>
  )
}
