'use client'
import { Box, Button, TextField } from '@mui/material'
import React, { useState } from 'react'

interface Props {
    searchForQuery: (query : string) => void
}

const Search = ({searchForQuery}: Props) => {
    const [query, setQuery] = useState("")
    
  return (
    <Box component="form" sx={{
        display: 'flex'
    }}>
        <TextField
        onChange={(e) => setQuery(e.target.value)}     
        sx={{
            backgroundColor: "#f4f4f4",
            border: "1px solid #f4f4f4",
            borderRadius:"1rem",
            margin: "2.875rem 0",
            width: "100%"
        }}
    />
        <Button type="submit"
            onClick={(e) => {
                e.preventDefault();
                searchForQuery(query)
            }}
            sx={{
                color: 'black',
                border: 'black'
            }}
        >
            Search
        </Button>

    </Box>
    
  )
}

export default Search