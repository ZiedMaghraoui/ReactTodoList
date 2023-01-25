import React from 'react'
import plusicon from './images/plus.png'
import trashicon from './images/trash.png'

const iconstyle = {
  width : 18
}
const plusstyle = {
  padding : 0,
  backgroundColor : 'none',
  background : 'none',
  border : 'none',
  cursor : 'pointer',
  position: 'relative',
  top: "-89%",
  left: "92%"
}
const trashstyle = {
  padding : 0,
  backgroundColor : 'none',
  background : 'none',
  border : 'none',
  cursor : 'pointer',
  flexGrow : '1'
}

export default function Button({type, func}) {
  if (type === 'add') {
    return (
      <button onClick={func} style={plusstyle} ><img src={plusicon} alt='add' style={iconstyle} /> </button>
    )
  }
  if (type === 'remove') {
    return (
      <button onClick={func} style={trashstyle}><img src={trashicon} alt='remove' style={iconstyle}/> </button>
    )
  }
}
