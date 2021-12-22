import React from "react"

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// import CSS file
import './game.css'

// // import picturs from assets folder
import game_points from '../../assets/game_points.png'
import game_choseDoor from '../../assets/game_choseDoor.png'
import game_weapons from '../../assets/game_weapons.png'
import game_whiteQ from '../../assets/game_whiteQ.png'
import game_yellowQ from '../../assets/game_yellowQ.png'
import game_greenQ from '../../assets/game_greenQ.png'
import game_attack from '../../assets/game_attack.png'

export default function GamePage() {

  const images = [<img src={game_whiteQ} alt="white question box" />, <img src={game_whiteQ} alt="white question box" />, <img src={game_whiteQ} alt="whiteQ" />, <img src={game_yellowQ} alt="yellow question box" />, <img src={game_attack} alt="attack box" />, <img src={game_greenQ} alt="green question box" />,];
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
            p: 2,
            fontSize: {
              md: 65,
              sm: 40,
              xs: 30
            },

          }} style={{ marginBottom: '5vw' }} gutterBottom variant="h4">
            GAME
          </Typography>

          <Box className='game_image1'
            sx={{
              display: 'flex', flexDirection: { xs: 'column', sm: 'row', md: 'row' },
              flexWrap: "wrap", width: '80%', justifyContent: 'space-between', alignItems: { xs: 'center', md: 'flex-start' },
            }}
          >
            <Box sx={{ width: { xs: '90%', sm: '50%' }, paddingBottom: { xs: '5%', sm: '0%' } }}>
              <img
                src={game_points}
                alt="game points"
              />
            </Box>

            <Box sx={{ width: { xs: '90%', sm: '40%' }, paddingBottom: { xs: '5%', sm: '0%' } }}>
              <div style={{ height: "60%" }}>
                <img
                  src={game_choseDoor}
                  alt="chose the door"
                />

              </div>
              <div style={{ height: "40%", display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center' }}>
                {images.map((image, i) => (
                  <Button size="small" key={i} style={{ width: '30%', padding: 0, }}>
                    {image}
                  </Button>
                ))}
              </div>
            </Box>

            <img src={game_weapons} alt="game page weapons"
              style={{ width: '100%', margin: '5vw 0', marginBottom: '10vw' }}
            />

          </Box>

        </Box>
      </div>
    </ThemeProvider>

  )

}
