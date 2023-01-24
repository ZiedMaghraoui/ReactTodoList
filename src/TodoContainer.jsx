import React, { Component } from 'react'
import Header from './Header'
import InputTodo from './InputTodo'
import Navbar from './Navbar'
import TodosList from './TodosList'

export default class TodoContainer extends Component {
  state = {
    todos : ['example of todo'],
    inp : ''
  }

  title='My todos'

  handleChange = (e) => {
    const {name, value} = e.target
    this.setState({[name]: value})
  }

  handleclick = () => {
    const inp = this.state.inp
    const addedtodos = this.state.todos
    if (inp !== ''){
      addedtodos.push(inp)
      this.setState({todos : addedtodos, inp : ''})
    }
  }

  handleremove = (e) => {
    const label = e.target.parentElement.previousSibling.innerText
    const remtodo = this.state.todos.filter((item) => (item !== label) )
    this.setState({todos : remtodo})
  }
  
  render() {
    const outerDiv = {
      display : 'flex',
    }
    const innerDiv = {
      display : 'flex',
      flexDirection : 'column',
      alignItems : 'center',
      width : '50vw'
    }

    return (
      <div style={outerDiv} >
          <Navbar/>
          <div style={innerDiv}>
          <Header title={this.title}/>
          <InputTodo change={this.handleChange} val={this.state.inp} add={this.handleclick} />
          <TodosList arraytodos={this.state.todos} rem={this.handleremove} />
          </div>
      </div>
    )
  }
}