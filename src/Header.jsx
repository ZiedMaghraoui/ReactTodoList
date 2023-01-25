import React from 'react'

const style = {
  color : '#dedede',
  fontSize : '650%',
  marginBottom : '4%'
}

export default function Header({title}) {
  return (
    <div style={{width : '100%', display : 'flex', justifyContent : 'center'}}>
        <h1 style={style}>{title}</h1>
    </div>
  )
}
