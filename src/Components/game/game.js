import React from "react"

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import './game.css'

import points from './assets/points.png'
import choseDoor from './assets/choseDoor.png'

export default function GamePage() {
  return (

    <div className="game_container">
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',

        }}
      >
        <Box >
          <Typography variant="h3" gutterBottom wrap component="div">
            TOKEN
          </Typography>
        </Box>

        <Box className='game_image1'
          sx={{
            display: 'flex', flexDirection: { xs: 'column', sm: 'row', md: 'row' },
            flexWrap: 'wrap', width: '80%', justifyContent: { xs: 'center', md: 'space-between' },
          }}
          style={{ padding: '0 10%', border: '3px solid red' }}>
          <Box sx={{ maxWidth: '45%', justifyContent: 'center', alignItems: 'center', }}>
            <img src={points} alt="points" />
          </Box>
          <Box sx={{ width: '5%' }}></Box>
          <Box sx={{ maxWidth: '45%', height: '100%', justifyContent: 'center', alignItems: 'center', }}>
            <Box sx={{ height: '60%' }}>
              <img src={choseDoor} alt="choseDoor" />
            </Box>
            <Box sx={{ height: '20%' }}>
              <img src={choseDoor} alt="choseDoor" />
            </Box>

          </Box>

        </Box>
      </Box>



    </div>
  )

}
