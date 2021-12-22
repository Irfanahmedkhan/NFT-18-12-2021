import React from "react"

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Image from "../images_asset/Images_asset";

// import CSS file
import './game.css'

// // import picturs from assets folder
// import points from './assets/points.png'
// import choseDoor from './assets/choseDoor.png'
// import weapons from './assets/weapons.png'
// import whiteQ from './assets/whiteQ.png'
// import yellowQ from './assets/yellowQ.png'
// import greenQ from './assets/greenQ.png'
// import attack from './assets/attack.png'

export default function GamePage() {
  const images = [<Image src='game_whiteQ.png' alt="white question mark" className='img'/>, <Image src='game_whiteQ.png' alt="white question mark" className='img'/>, <Image src='game_whiteQ.png' alt="white question mark" className='img'/>, <Image src='game_yellowQ.png' alt="yellow question mark" className='img'/>, <Image src='game_attack.png' alt="attack mark" className='img'/>, <Image src='game_greenQ.png' alt="green question mark" className='img'/>,];

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

          <Box sx={{
            display: 'flex', flexDirection: { xs: 'column', sm: 'row', md: 'row' },
            flexWrap: "wrap", width: '80%', justifyContent: 'space-between', alignItems: { xs: 'center', md: 'flex-start' },
          }}
          >
            <Box sx={{ width: { xs: '90%', sm: '50%' }, paddingBottom: { xs: '5%', sm: '0%' } }}>
              <Image
                src="game_points.png"
                alt="game points"
              />
            </Box>

            <Box sx={{ width: { xs: '90%', sm: '40%' }, paddingBottom: { xs: '5%', sm: '0%' } }}>
              <div style={{ height: "60%" }}>
                <Image
                  src="game_choseDoor.png"
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

            <Image src='game_weapons.png' alt="game page weapons"
              style={{ width: '100%', margin: '5vw 0', marginBottom: '10vw'}}
            />

          </Box>

        </Box>
      </div>
    </ThemeProvider>

  )

}
