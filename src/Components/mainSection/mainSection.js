import React from "react"
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Image from "../images_asset/Images_asset";

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

          <Image
            src="mainSection_logo.png"
            alt="page title"
            style={{
              width: "100%"
            }}
          />
          <Image
            src="mainSection_fan.png"
            alt="page logo"
            style={{
              width: "100%"
            }}
          />


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
          <Image
            src="mainSection_items.png"
            alt="page logo"
            style={{
              marginBottom: '15vw', width: '80vw', height: 'auto'
            }} />

        </Box>
      </div>
    </ThemeProvider>

  )

}
