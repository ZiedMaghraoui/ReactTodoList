import React from 'react'
import Button from './Button'

const TodoItem = ({itemtext}) => (
  <div style={{width : '100%', display : 'flex', justifyContent : 'center'}}>
    <input id={itemtext} type='checkbox'/>
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
