import React from "react"

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Import CSS file
import './team.css'

// Import images from assests
import character from './assets/character.png'
import quantum_logo from './assets/quantum_logo.png'

export default function TeamPage() {

  // Typography stype
  const theme = createTheme();
  theme.typography.h4 = {
    margin: 15,
    fontFamily: 'Billy-Bold, Arial',
    '@media (min-width:600px)': {
      fontSize: '2rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '2.5rem',
    },
  };
  theme.typography.h6 = {
    fontFamily: 'Billy-Light, Arial',
    marginBottom: '50px',
    fontWeight: 600,
    '@media (min-width:600px)': {
      fontSize: '1rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '1.5rem',
    },
  };
  theme.typography.h3 = {
    fontFamily: 'Billy-Bold, Arial',
  };
  theme.typography.h5 = {
    fontFamily: 'Billy-Light, Arial',
  };

  return (
    <ThemeProvider theme={theme}>

      <div className="teamContainer">

        <Box
          sx={{
            display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'center', alignItems: 'center'
          }}
        >
          <Box
            sx={{
              width: '80%',
              display: 'flex', flexDirection: { xs: 'column', md: 'row' },
              flexWrap: 'wrap', justifyContent: { xs: 'center', md: 'space-between' },
              alignItems: { xs: 'center', md: 'flex-start' }
            }}

          >
            <Box sx={{
              width: { xs: '45%', sm: '35%', md: '25%' },
              padding: '1%'
            }}>
              <img src={quantum_logo} alt="quantum_logo" style={{ width: '100%' }} />
            </Box>
            <Box sx={{ width: { sm: '100%', md: '65%' } }} >
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'flex-start',
                  flexDirection: 'column',
                  alignItems: { xs: 'center', sm: 'center', md: 'flex-start' },
                }}
        
                >
                <Typography sx={{
                  fontSize: {
                    md: 55,
                    sm: 40,
                    xs: 30
                  }
                }} gutterBottom variant="h3">
                  TEAM
                </Typography>

                <Typography sx={{
                  padding: '0',
                  fontSize: {
                    md: 25,
                    sm: 20,
                    xs: 15
                  }
                }} gutterBottom wrap variant="h5">
                  A fun text to speech web app to let you speak through your computer in
                  whatever voice synthesis module that is available to your Browser/Operating System.<br /><br />

                  A fun text to speech web app to let you speak through your computer in
                  whatever voice synthesis module that is available to your Browser/Operating System.<br /><br />

                  A fun text to speech web app to let you speak through your computer in
                  whatever voice synthesis module that is available to your Browser/Operating System.
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

          {/* Swiper  */}
          <Box
            sx={{
              display: 'flex',
              width: '90%',
              justifyContent: 'center',
              alignItems: { xs: 'center', md: 'center' },
            }}

          >

            <Swiper
              // install Swiper modules
              modules={[Navigation, Pagination, A11y]}
              spaceBetween={0}
              slidesPerView='auto'
              navigation
              pagination={{ clickable: true }}
              // onSwiper={(swiper) => console.log(swiper)}
              // onSlideChange={() => console.log('slide change')}
              className='teamsCard'

            >
              <SwiperSlide  >
                <Box sx={{ display: 'flex', justifyContent: 'flex-start', flexDirection: 'column', alignItems: 'center', p: "0 5%" }}>
                  <img src={character} alt="character" />
                  <Box style={{ width: '250px' }}>
                    <Typography variant="h4">
                      JACK
                    </Typography>
                    <Typography variant="h6">
                      A fun text to speech web app to let you speak through your computer in
                      whatever voice synthesis module that is available to your Browser/Operating System.
                    </Typography>
                  </Box>
                </Box>
              </SwiperSlide>
              <SwiperSlide>
                <Box sx={{ display: 'flex', justifyContent: 'flex-start', flexDirection: 'column', alignItems: 'center', p: "0 5%" }}>
                  <img src={character} alt="character" />
                  <Box style={{ width: '250px' }}>
                    <Typography variant="h4" gutterBottom wrap component="div">
                      TONY
                    </Typography>
                    <Typography variant="h6" gutterBottom wrap component="div">
                      A fun text to speech web app to let you speak through your computer in
                      whatever voice synthesis module that is available to your Browser/Operating System.
                    </Typography>
                  </Box>
                </Box>
              </SwiperSlide><SwiperSlide>
                <Box sx={{ display: 'flex', justifyContent: 'flex-start', flexDirection: 'column', alignItems: 'center', p: "0 5%" }}>
                  <img src={character} alt="character" />
                  <Box style={{ width: '250px' }}>
                    <Typography variant="h4" gutterBottom wrap component="div">
                      RILEY
                    </Typography>
                    <Typography variant="h6" gutterBottom wrap component="div">
                      A fun text to speech web app to let you speak through your computer in
                      whatever voice synthesis module that is available to your Browser/Operating System.
                    </Typography>
                  </Box>
                </Box>
              </SwiperSlide><SwiperSlide>
                <Box sx={{ display: 'flex', justifyContent: 'flex-start', flexDirection: 'column', alignItems: 'center', p: "0 5%" }}>
                  <img src={character} alt="character" />
                  <Box style={{ width: '250px' }}>
                    <Typography variant="h4" gutterBottom wrap component="div">
                      MAX
                    </Typography>
                    <Typography variant="h6" gutterBottom wrap component="div">
                      A fun text to speech web app to let you speak through your computer in
                      whatever voice synthesis module that is available to your Browser/Operating System.
                    </Typography>
                  </Box>
                </Box>
              </SwiperSlide><SwiperSlide>
                <Box sx={{ display: 'flex', justifyContent: 'flex-start', flexDirection: 'column', alignItems: 'center', p: "0 5%" }}>
                  <img src={character} alt="character" />
                  <Box style={{ width: '250px' }}>
                    <Typography variant="h4" gutterBottom wrap component="div">
                      TOM
                    </Typography>
                    <Typography variant="h6" gutterBottom wrap component="div">
                      A fun text to speech web app to let you speak through your computer in
                      whatever voice synthesis module that is available to your Browser/Operating System.
                    </Typography>
                  </Box>
                </Box>
              </SwiperSlide><SwiperSlide>
                <Box sx={{ display: 'flex', justifyContent: 'flex-start', flexDirection: 'column', alignItems: 'center', p: "0 5%" }}>
                  <img src={character} alt="character" />
                  <Box style={{ width: '250px' }}>
                    <Typography variant="h4" gutterBottom wrap component="div">
                      STIFNY
                    </Typography>
                    <Typography variant="h6" gutterBottom wrap component="div">
                      A fun text to speech web app to let you speak through your computer in
                      whatever voice synthesis module that is available to your Browser/Operating System.
                    </Typography>
                  </Box>
                </Box>
              </SwiperSlide>

            </Swiper>

          </Box>

        </div>
      </div>
    </ThemeProvider>

  )

}
