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
  
  return (
  <div style={itemdivstyle}>
    <input type='checkbox' style={{marginRight : 10, flexGrow : '1'}}  />
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
      {arraytodos.map((item,index) => (<TodoItem itemtext={item} rem={() => {rem(index)} } key={item} />))}
    </div>
  )
}
