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
        display: 'flex',
        alignItems: 'center'
    }}>
        <TextField
        onChange={(e) => setQuery(e.target.value)}     
        sx={{
            backgroundColor: "#f4f4f4",
            borderRadius:"2rem",
            margin: "2.875rem 0",
            width: "100%",
            border: 'none'
        }}
    />
        <Button type="submit"
            onClick={(e) => {
                e.preventDefault();
                searchForQuery(query)
            }}
            sx={{
                color: 'black',
                border: '2px solid black',
                padding: "0.5rem 1rem",
                height: "3rem",
                borderRadius: "1rem",
                position: "relative",
                left: -100
            }}
        >
            Search
        </Button>

    </Box>
    
  )
}

export default Search