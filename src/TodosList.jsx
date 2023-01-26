import React, { Component } from 'react'
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
const inputStyle={
  ...labelstyle,
  borderWidth : '0 0 3px 0',
  borderColor : 'orange',
  padding : 0,
  margin : 0
}

// ~~~~~~ Todo item component
class TodoItem extends Component { 
  state = {
    editable : false,
    text : this.props.itemtext
  }
  
  handleClick = (e) => {
    this.setState({editable : true, text : e.target.textContent})
  }

  handleChange = (e) => {
    this.setState({text: e.target.value})
  }

  handleBlur = () => {
    this.setState({editable : false})
  }

  render(){
    const rem = this.props.rem
    return (
    <div style={itemdivstyle}>
      <input type='checkbox' style={{marginRight : 10, flexGrow : '1'}}  />
      {!this.state.editable && 
        <label onClick={this.handleClick} style={labelstyle}>{this.state.text}</label>}
      {this.state.editable && 
        <input type='text' 
          value={this.state.text} onChange={this.handleChange} 
          onBlur={this.handleBlur} style={inputStyle} />}
      <Button func={rem} type='remove'/>
    </div>
  )}
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
      {arraytodos.map((item,index) => (
        <TodoItem itemtext={item} rem={() => {rem(index)}} key={item} />
      ))}
    </div>
  )
}
