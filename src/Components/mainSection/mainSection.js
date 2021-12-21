import React from "react"
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';


// import images from assets
import fan from './assets/fan.png'
import items from './assets/items.png'
import logo from './assets/logo.png'

// import css file
import './mainSection.css'

export default function MainSectionPage() {

  // Typography stype
  const theme = createTheme();
  theme.typography.h3 = {
    fontFamily: 'Billy-Bold, Arial',
  };
  theme.typography.h5 = {
    fontFamily: 'Billy-Light, Arial',
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="mainSection">

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
          }}
          className="boxImage"
        >
          <img src={logo} alt="logo" />
          <img src={fan} alt="fan" />

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
              alignItems: 'center',
            }}
            className="text"
          >
            <Typography sx={{
              fontSize: {
                md: 45,
                sm: 30,

              }
            }} gutterBottom variant='h3'>
              NFT GAME
            </Typography>

            <Typography sx={{
              fontSize: {
                md: 25,
                sm: 20,
                xs: 15
              }
            }} gutterBottom variant='h5'>
              A fun text to speech web app to let you speak through your computer in
              whatever voice synthesis module that is available to your Browser/Operating System.<br /><br />

              A fun text to speech web app to let you speak through your computer in
              whatever voice synthesis module that is available to your Browser/Operating System.
            </Typography>
          </Box>

          <img src={items} alt="items" style={{ marginBottom: '15vw' }} />
        </Box>
      </div>
    </ThemeProvider>

  )

}
