import { Box, Typography } from '@mui/material'
import React from 'react'
import { Result } from '../types';
import Meanings from './Meanings';
import { motion } from "framer-motion"


interface Props {
    results: Result[];
}

const Results = ({results} : Props) => {
    const result = results[0]
  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
        <Box>
        <Box sx={{
            display: "flex",
            justifyContent:'space-between',
            alignItems: 'center'
        }}>
            <Box sx={{
                display: "flex",
                flexDirection:'column'
            }}>
                <Typography sx={{
                    fontSize: "4rem",
                    fontWeight: 600
                }}>
                    {result.word}
                </Typography>

                <Typography sx={{
                    fontSize:"1.5rem",
                    color: "#A445ED",
                    marginBottom:"2rem"
                }}>
                    {result.phonetic}
                </Typography>
            </Box>
        
            <audio src={result?.phonetics[0].audio} controls></audio>

        </Box>
        
        {/* Meanings section */}

        {result.meanings.map((meaning) => {
            return <Meanings key={meaning.partOfSpeech} meaning={meaning}/>
        })}
    </Box>

    </motion.div>
    
  )
}

export default Results