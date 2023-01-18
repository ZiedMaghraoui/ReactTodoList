import React from 'react'
import xicon from './images/x.png'

export default function Navbar() {
  const divstyle = {
    backgroundColor : '#009489',
    display : 'flex',
    flexDirection : 'column',
    width : '15vw',
    height : '92vh',
    padding : 20
  }
  const iconstyle = {
    width : 18
  }
  const homestyle = {
    fontSize : 24,
    textDecoration : 'none',
    fontWeight : 'bold',
    color : '#ff9d24'
  }
  const aboutstyle = {
    color : '#00e3d0',
    textDecoration : 'none'
  }
  return (
    <div style={divstyle} >
      <a href=''><img src={xicon}  style={iconstyle} alt='close'/></a>
      <a style={homestyle} href=''>Home</a>
      <a style={aboutstyle} href=''>About</a>
    </div>
  )
}
