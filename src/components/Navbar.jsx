import React from 'react'
import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import{ Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
          <AppBar position='sticky' sx={{top:'auto',bottom: 0}}>
            <Toolbar>
            <Typography variant='outlined' sx={{flexGrow:1}}align = 'left'> NAVBAR </Typography>
              <Button variant='text' color='error'><Link to={ '/Stud' }> Home </Link> </Button>
              <Button variant='text' color='error'><Link to={ '/Me' }> Add blog </Link> </Button>
            </Toolbar>
          </AppBar>
    </div>
  )
}

export default Navbar