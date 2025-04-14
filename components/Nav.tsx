import React from 'react'
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import { Box, Switch, Typography } from '@mui/material';

const Nav = () => {
  return (
    <Box sx={{
        display: 'flex',
        alignItems: "center",
        justifyContent: "space-between"

    }}>
        <Typography sx={{fontWeight: 700}}>
            Dictionary
        </Typography>

        <Box sx={{
            display: 'flex',
            alignItems: "center",
            justifyContent:"space-between",
            width:'20vw'
        }}>
            <Typography>
                Font Switcher
            </Typography>
            <Box>
                <Switch/> Dark Mode 
            </Box>
        </Box>
        
    </Box>
  )
}

export default Nav