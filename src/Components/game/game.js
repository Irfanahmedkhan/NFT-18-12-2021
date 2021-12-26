import React from "react"

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// import CSS file
import './game.css'

// // import picturs from assets folder

import game_choseDoor from '../../assets/game_choseDoor.png'
import game_weapons from '../../assets/game_weapons.png'
import game_whiteQ from '../../assets/game_whiteQ.png'
import game_yellowQ from '../../assets/game_yellowQ.png'
import game_greenQ from '../../assets/game_greenQ.png'
import game_attack from '../../assets/game_attack.png'
import game_point from '../../assets/game_point.png'

export default function GamePage() {

  const images = [<img src={game_whiteQ} alt="white question box" />, <img src={game_whiteQ} alt="white question box" />, <img src={game_whiteQ} alt="whiteQ" />, <img src={game_yellowQ} alt="yellow question box" />, <img src={game_attack} alt="attack box" />, <img src={game_greenQ} alt="green question box" />,];
  const gamePoints = [
    'Use your unique NFTs and Tokens to play multiple time perday.',
    'Mobile friendly, so you can complete your daily quests and earn rewards on the go.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
]
  // Typography stype
  const theme = createTheme();
  theme.typography.h4 = {
    fontFamily: 'Billy-Bold, Arial',
  }; theme.typography.h6 = {
    fontFamily: 'Billy-Light, Arial',
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
            
            fontSize: {
              md: 100,
              sm: 50,
              xs: 30
            },

          }} gutterBottom variant="h4">
            GAME
          </Typography>

          <Box className='game_image1'
            sx={{
              display: 'flex', flexDirection: { xs: 'column', sm: 'row', md: 'row' },
              flexWrap: "wrap", width: '80%', justifyContent: {xs:'center',sm:'space-between'}, alignItems: { xs: 'center', sm: 'flex-start' },
            }}

          >
            <Box sx={{ width: { xs: '100%', sm: '55%' }, paddingBottom: { xs: '5%', sm: '0%' } }}

            >
              {gamePoints.map((point, i) => {
                return (
                  <Box key={i} sx={{
                    display: 'flex', flexDirection: 'row', justifyContent: 'space-between',
                    alignItems: 'center', marginBottom:'5%', height: 'auto'
                  }}
                  >
                    <img
                      src={game_point}
                      alt="game point"
                      style={{ width: '8%'  }}
                    />
                    <Typography variant='h6' sx={{
                      fontSize: {
                        md: 35,
                        sm: 25,
                        xs: 15
                      }
                    }} style={{ width: '87%' }}>
                      {point}
                    </Typography>
                  </Box>
                )
              })}

            </Box>

            <Box
              sx={{
                display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
                width: { xs: '80%', sm: '40%' }, paddingBottom: { xs: '5%', sm: '0%' }
              }}

            >
              <div >
                <img
                  src={game_choseDoor}
                  alt="chose the door"
                />

              </div>
              <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center' }}>
                {images.map((image, i) => (
                  <Button size="small" key={i} style={{ width: '30%', padding: 0, }}>
                    {image}
                  </Button>
                ))}
              </div>
            </Box>



          </Box>
          <img src={game_weapons} alt="game page weapons"
            style={{ width: '80%', margin: '3vw 0' }}
          />
        </Box>
      </div>
    </ThemeProvider>

  )

}
