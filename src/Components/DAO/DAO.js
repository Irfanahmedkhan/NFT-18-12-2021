import React from "react"

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';


// import CSS file
import './DAO.css'

// import images from assets folder
import DAO_bookHouse from '../../assets/DAO_bookHouse.png'
import DAO_bg from '../../assets/DAO_bg.png'
import DAO_halfBook from '../../assets/DAO_halfBook.png'
import DAO_bookEmpty from '../../assets/DAO_bookEmpty.png'

export default function DAOPage() {

  // Typography stype
  const theme = createTheme();
  theme.typography.h3 = {
    fontFamily: 'Billy-Bold, Arial',
  };
  theme.typography.h5 = {
    fontFamily: 'Billy-Light, Arial',
  }; theme.typography.h6 = {
    fontFamily: 'Billy-Light, Arial',
  };

  return (
    <ThemeProvider theme={theme}>

      <div className="DAO_container">

        <Box sx={{ color: 'white', display: 'flex', flexDirection: 'column', alignItems: "center", justifyContent: 'center' }}>
          <Box
            sx={{
              width: '80%',
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography sx={{
              fontSize: {
                md: 65,
                sm: 40,
                xs: 30
              },

            }}style={{ margin:'5vw 0vw'}} gutterBottom variant='h3'>
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
          <div className="bookImgDiv">
            <Box sx={{ flexGrow: 1, display: {xs:'none' , sm: 'flex' } }}>
              <img src={DAO_bookEmpty} alt="book at token page"
                style={{
                  width: "100%",
                  height: 'auto',
                  
                }} />
            </Box>
            <Box sx={{ flexGrow: 1, display: {xs: 'flex', sm: 'none'} }}>
            <img src={DAO_halfBook} alt="book at token page"
                style={{
                  width: "100%",
                  height: 'auto',
                }} />

            </Box>
            <Box sx={{ flexGrow: 1, display: {xs: 'none', sm: 'flex'} }}>

            <img src={DAO_bookHouse} alt="book at token page"
                style={{
                  width: "40%",
                  height: 'auto',
                  position:'absolute',
                  left: '55%'
                }} 
                className="bookText"
               />

            </Box>
            <Typography className="bookText" sx={{
              width:{xs: '80%', sm:'40%'},
              fontSize: {
                sm: '1.5vw',
                
                xs: '3vw'
              },color: '#3c3025',
              position: 'absolute',
              top: '2vw',
              left: {xs:'10vw',sm: '5vw'},
              overflowY:'hidden'
          
            }} gutterBottom variant='h6'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus porttitor mollis tellus a tincidunt. Ut pretium metus at nisi molestie, a sodales erat sollicitudin. Sed ut metus lacus. Mauris et eros velit.<br/><br/> 
              Curabitur sit amet ante est. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In non sem quis arcu porta vehicula vel sed lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus porttitor mollis tellus a tincidunt.<br/><br/> 
              Ut pretium metus at nisi molestie, a sodales erat sollicitudin. Sed ut metus lacus. Mauris et eros velit. Curabitur sit amet ante est. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In non sem<br/>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus porttitor mollis tellus a tincidunt. Ut pretium metus at nisi molestie, a sodales erat sollicitudin. Sed ut metus lacus. Mauris et eros velit. Curabitur sit amet ante est. Class aptent taciti sociosqu ad litora torquent In non sem quis arcu porta vehicula vel sed lorem.<br />
            </Typography>
          </div>
          <img src={DAO_bg} alt="DAO background" className="DAO_bg_image" />

        </Box>


        


      </div>
    </ThemeProvider>

  )

}
