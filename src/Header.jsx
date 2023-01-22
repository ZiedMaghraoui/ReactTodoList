import React from 'react'

export default function Header({title}) {
  const style = {
    color : '#c4c4c4',
    fontSize : '100px'
  }
  return (
    <div style={{width : '100%', display : 'flex', justifyContent : 'center'}}>
        <h1 style={style}>{title}</h1>
    </div>
  )
}
