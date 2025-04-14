'use client'

import { motion } from 'framer-motion'
import { Box, Typography, Switch, MenuItem, Select } from '@mui/material'
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks'
import { useCustomTheme } from '../context/ThemeContext'

const Nav = () => {
  const { darkMode, toggleDarkMode, font, setFont } = useCustomTheme()

  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop:"1rem" }}>
        <Typography sx={{ fontWeight: 700 }}>
          <LibraryBooksIcon sx={{ mr: 1 }} />
          Dictionary
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
          <Select
            value={font}
            onChange={(e) => setFont(e.target.value)}
            size="small"
          >
            <MenuItem value="Geist">Geist</MenuItem>
            <MenuItem value="Serif">Serif</MenuItem>
            <MenuItem value="Mono">Monospace</MenuItem>
          </Select>
          <Switch checked={darkMode} onChange={toggleDarkMode} />
        </Box>
      </Box>
    </motion.div>
  )
}

export default Nav
