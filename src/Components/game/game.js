import React from "react"

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// import CSS file
import './game.css'

// import picturs from assets folder
import points from './assets/points.png'
import choseDoor from './assets/choseDoor.png'
import weapons from './assets/weapons.png'
import whiteQ from './assets/whiteQ.png'
import yellowQ from './assets/yellowQ.png'
import greenQ from './assets/greenQ.png'
import attack from './assets/attack.png'

export default function GamePage() {
  const images = [<img src={whiteQ} alt="whiteQ" />, <img src={whiteQ} alt="whiteQ" />, <img src={whiteQ} alt="whiteQ" />, <img src={yellowQ} alt="yellowQ" />, <img src={attack} alt="attack" />, <img src={greenQ} alt="greenQ" />,];

  // Typography stype
  const theme = createTheme();
  theme.typography.h4 = {
    fontFamily: 'Billy-Bold, Arial',
  };

  return (
    <ThemeProvider theme={theme}>

      <div className="game_container">
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >

          <Typography sx={{
            p: 2, m: 0,
            fontSize: {
              md: 55,
              sm: 30,
              xs: 30
            }
          }} gutterBottom variant="h4">
            GAME
          </Typography>


          <Box className='game_image1'
            sx={{
              display: 'flex', flexDirection: { xs: 'column', sm: 'row', md: 'row' },
              flexWrap: "wrap", width: '80%', justifyContent: 'space-between', alignItems: { xs: 'center', md: 'flex-start' },
            }}
            >
            <Box sx={{ width: { xs: '90%', sm: '50%' }, paddingBottom: { xs: '5%', sm: '0%' } }}>
              <img src={points} alt="points" />
            </Box>

            <Box sx={{ width: { xs: '90%', sm: '40%' }, paddingBottom: { xs: '5%', sm: '0%' } }}>
              <div style={{ height: "60%" }}>
                <img src={choseDoor} alt="choseDoor" />
              </div>
              <div style={{ height: "40%", display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center' }}>
                {images.map((image, i) => (
                  <Button size="small" key={i} style={{ width: '30%', padding: 0, }}>
                    {image}
                  </Button>
                ))}
              </div>
            </Box>

            <img src={weapons} alt="weapons" style={{ margin: '5% 0', }} />

          </Box>

        </Box>
      </div>
    </ThemeProvider>

  )

}
