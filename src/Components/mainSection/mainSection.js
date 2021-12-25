import React from "react"
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
// import css file
import './mainSection.css'
import mainSection_items from '../../assets/mainSection_items.png'
import mainSection_fan from '../../assets/mainSection_fan.png'
import mainSection_logo from '../../assets/mainSection_logo.png'
import mainsection_bg from '../../assets/mainsection_bg.png'

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



        <div className="title_images">
          <img
            src={mainSection_logo}
            alt="page title"
            style={{
              width: "100%"
            }}
          />
          <img
            src={mainSection_fan}
            alt="page logo"
            style={{
              width: "100%"
            }}
          />
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
              alignItems: 'center',
            }}
            className="text"
          >
            <Typography sx={{
              fontSize: {
                md: 65,
                sm: 40,
                xs: 30

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
            <img
            src={mainSection_items}
            alt="page logo"
            style={{
              width: '80vw', height: 'auto', margin: "5vw 0"
            }} />
          </div>
       
        </div>





      </div>
    </ThemeProvider>

  )

}
