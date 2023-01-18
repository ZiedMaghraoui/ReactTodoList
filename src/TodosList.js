import React from 'react'
import Button from './Button'

const itemdivstyle = {
  width : '100%',
  height : '5vh',
  display : 'flex', 
  justifyContent : 'center',
  alignItems : 'center'
}


const TodoItem = ({itemtext}) => (
  <div style={itemdivstyle}>
    <input type='checkbox' style={{marginRight : 10}}/>
    <label style={{display : 'inline-block',width : '50%'}} htmlFor={itemtext}>{itemtext}</label>
    <Button type='remove'/>
  </div>
)

const arraytodos = ['thing1', 'thing2', 'thing5']

export default function TodosList() {
  const divstyle = {
    display : 'flex',
    width : '100%',
    justifyContent : 'center'
  }
  const formattedtodos = arraytodos.map((item) => (<div style={divstyle}><TodoItem itemtext={item} /></div>))
  return (formattedtodos)
}
