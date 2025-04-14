'use client'

import React from 'react'
import { Box, Switch, Typography, MenuItem, Select } from '@mui/material'
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks'
import { useCustomTheme } from '../context/ThemeContext'

const Nav = () => {
  const { darkMode, toggleDarkMode, font, setFont } = useCustomTheme()

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <Typography sx={{ fontWeight: 700 }}>
        <LibraryBooksIcon sx={{ mr: 1 }} />
        Dictionary
      </Typography>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Typography>Font:</Typography>
          <Select
            size="small"
            value={font}
            onChange={(e) => setFont(e.target.value)}
            sx={{ minWidth: 120 }}
          >
            <MenuItem value="Geist">Geist</MenuItem>
            <MenuItem value="Serif">Serif</MenuItem>
            <MenuItem value="Mono">Monospace</MenuItem>
          </Select>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Typography>Dark Mode</Typography>
          <Switch checked={darkMode} onChange={toggleDarkMode} />
        </Box>
      </Box>
    </Box>
  )
}

export default Nav
