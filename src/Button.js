import React from 'react'
import plusicon from './images/plus.png'
import trashicon from './images/trash.png'

export default function Button({type}) {
  const iconstyle = {
    width : 18
  }
  const buttonstyle = {
    padding : 0,
    backgroundColor : '',
    border : 'none'
  }


  if (type === 'add') {
    return (
      <button style={buttonstyle} ><img src={plusicon} alt='add' style={iconstyle} /> </button>
    )
  }
  if (type === 'remove') {
    return (
      <button style={buttonstyle}><img src={trashicon} alt='remove' style={iconstyle}/> </button>
    )
  }
}
