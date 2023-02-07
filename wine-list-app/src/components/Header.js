import React, { useState } from 'react'
import { AppBar, Tab, Tabs, Toolbar, Typography } from '@mui/material';
import WineBarIcon from '@mui/icons-material/WineBar';


export const Header = () => {
    const [value, setValue] = useState();
  return (
    <div>
        <AppBar position="sticky">
            
        <Toolbar>
            <Typography>
                <WineBarIcon />
            </Typography>
            <Tabs 
            sx={{ml:'auto'}}
            textColor='inherit' 
            indicatorColor='secondary' 
            value={value} 
            onChange={( e, val) => setValue(val)}
            >
                <Tab label='Add Wine'/>
                    <Tab label='All Wines'/>
                    <Tab label='About Us'/>
            </Tabs>
        </Toolbar>
        </AppBar>
    </div>
  );
};

export default Header;