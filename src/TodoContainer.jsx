import React from 'react'
import Header from './Header'
import InputTodo from './InputTodo'
import Navbar from './Navbar'
import TodosList from './TodosList'

export default function TodoContainer() {
  const outerDiv = {
    display : 'flex'
  }
  const innerDiv = {
    display : 'flex',
    flexDirection : 'column',
    alignItems : 'center',
    width : '50vw'
  }

  const title='My todos'
  const arraytodos = ['thing1', 'thing2', 'okay']

  return (
    <div style={outerDiv} >
        <Navbar/>
        <div style={innerDiv}>
        <Header title={title}/>
        <InputTodo/>
        <TodosList arraytodos={arraytodos} />
        </div>
    </div>
  )
}
