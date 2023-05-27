import React from 'react'
import { Typography, TextField } from '@mui/material'
const First = ()=> {
  return (
    <div>
      <h1 color='skyblue'>Blog form</h1>
      <h5>Enter blog name</h5>
      <input placeholder="name" input/>
      <br></br>
      <h5>Descreption about your blog</h5>
      <input placeholder="Descreption" input/>
      <br></br>
      <h5>Authors name</h5>
      <input placeholder="Name" input/>
      <br></br><br></br>
      <button>Create blog</button>
      <br></br><br></br>
  
   
    </div>
  )
}

export default First