import React from 'react'
import plusicon from './images/plus.png'
import trashicon from './images/trash.png'

export default function Button({type}) {
  const iconstyle = {
    width : 18
  }
  const buttonstyle = {
    padding : 0,
    backgroundColor : 'none',
    background : 'none',
    border : 'none',
    cursor : 'pointer',
    // position: 'relative',
    // top: 0,
    // left: 0,
    // zIndex : 10
  }

  if (type === 'add') {
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
    return (
      <button style={plusstyle} ><img src={plusicon} alt='add' style={iconstyle} /> </button>
    )
  }
  if (type === 'remove') {
    return (
      <button style={buttonstyle}><img src={trashicon} alt='remove' style={iconstyle}/> </button>
    )
  }
}
