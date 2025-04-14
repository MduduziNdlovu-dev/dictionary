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
        {meaning.definitions.map((definition) => {
          return (
            <ListItem key={definition.definition}>
            {definition.definition}
            </ListItem>
          )
        })}
        
      </Box>

      {meaning.synonyms.length > 0 && <Box>
        <Typography sx={{fontWeight:'1.25rem', color: "#757575"}}> Synonyms: <span style={{color:"#A445ED"}}>{meaning.synonyms} </span> </Typography>

      </Box>}
    </Box>
  )
}

export default Meanings