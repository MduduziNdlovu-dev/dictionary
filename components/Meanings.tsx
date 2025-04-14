import { Box, ListItem, Typography } from '@mui/material'
import React from 'react'
import { Meaning } from '../types'

interface Props {
  meaning: Meaning
}

const Meanings = ({meaning} : Props) => {
  return (
    <Box>
      <Box sx={{
        display:'flex',
        alignItems:'center'
      }}>
        <Typography sx={{
          fontWeight:600,
          fontStyle:'italic',
          fontSize: "1.5rem",
          marginRight: '1rem'
        }}>
          {meaning.partOfSpeech}
        </Typography>
        
        <Box sx={{
          width: "100%",
          height: '0',
          border:"0.5px solid #E9E9E9"
        }}>

        </Box>
      </Box>

      <Box sx={{
        margin: "2.5rem 0"
      }}>
        <Typography sx={{fontWeight:'1.25rem', color: "#757575"}}> Meaning</Typography>
        {meaning.definitions.map((definition) => (
          <ListItem key={definition.definition} sx={{ display: 'block', mb: '1rem' }}>
          <Typography sx={{ fontSize: '1rem' }}>
            {"-  - "}{definition.definition}
          </Typography>
          
          {definition.example && (
            <Typography sx={{ fontStyle: 'italic', color: '#757575', mt: '0.5rem' }}>
              Example: "{definition.example}"
            </Typography>
          )}
        </ListItem>
        )
          
        )}
        
      </Box>

      {meaning.synonyms.length > 0 && (
  <Box>
    <Typography sx={{ fontWeight: '1.25rem', color: "#757575" }}>
      Synonyms:{" "}
      {meaning.synonyms.map((syn, idx) => (
        <span key={idx} style={{ color: "#A445ED", marginRight: "0.5rem" }}>
          {syn}
        </span>
      ))}
    </Typography>
  </Box>
)}

    </Box>
  )
}

export default Meanings