import React from 'react'
import { AppBar, Typography } from '@mui/material';


export const Header = () => {
  return (
    <div>
        <AppBar position='sticky'>
            <Typography>Hello World</Typography>
        </AppBar>
    </div>
  )
}

export default Header;