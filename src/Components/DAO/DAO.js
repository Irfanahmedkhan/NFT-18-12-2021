import React from "react"

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Image from "../images_asset/Images_asset";

// import CSS file
import './DAO.css'

export default function DAOPage() {

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

      <div className="DAO_container">

        <Box className="DAO" sx={{ m: 2, color: 'white', display: 'flex', flexDirection: 'column', alignItems: "center",justifyContent:'center' }}>
          <Box
            sx={{
              width: '80%',
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
              alignItems: 'center',
            }}
            style={{ margin: '5% 0' }}
          >
            <Typography sx={{
              fontSize: {
                md: 55,
                sm: 40,
                xs: 30
              }
            }} gutterBottom variant='h3'>
              TOKEN
            </Typography>

            <Typography sx={{
              fontSize: {
                md: 25,
                sm: 20,
                xs: 15
              }
            }} gutterBottom variant='h5'>
              A fun text to speech web app to let you speak through your computer in whatever voice synthesis module that is available to your Browser/Operating System.A fun text to speech web app to let you speak through your computer in
              whatever voice synthesis module that is available to your Browser/Operating System. <br /><br />

              A fun text to speech web app to let you speak through your computer in whatever voice synthesis module that is available to your Browser/Operating System.A fun text to speech web app to let you speak through your computer in
            </Typography>

          </Box>
          <Image
            src="DAO_book.png"
            alt="book at token page"
            style={{
              width: "70%",
              height: 'auto',
              position: 'relative',
              top: '10vw',
              zIndex: '-50',
            }}
          />


          {/* <img src={book} alt="book" /> */}

        </Box>
        <Image src='DAO_bg.png' alt="DAO background" className="DAO_container_image" />

      </div>
    </ThemeProvider>

  )

}
