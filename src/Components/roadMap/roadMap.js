import React from "react"

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';



// Import CSS file
import './roadMap.css'

// Import images from assests
import roadMap_Early2022 from '../../assets/roadMap_Early2022.png'
import roadMap_Late2022 from '../../assets/roadMap_Late2022.png'
import roadMap_Mid2022 from '../../assets/roadMap_Mid2022.png'
import path from '../../assets/path.png'
// import svg from '../../assets/svg.svg'

export default function RoadMapPage() {

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

      <div className="roadMapContainer">

        <Box
          sx={{
            display: 'flex', flexDirection: 'column',
            justifyContent: 'center', alignItems: 'center',
          }}
        >
          <Typography sx={{
            fontSize: {
              md: 100,
              sm: 50,
              xs: 30
            }
          }} style={{ margin: '25vw 0 0 0' }} gutterBottom variant="h3">
            ROADMAP
          </Typography>


          {/* only show on small screen view  */}

          <Box
            sx={{
              width: '80%',
              display: { xs: 'flex', sm: 'none' }, flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexGrow: 1, marginTop: '5vw',
            }}
            style={{ marginBottom: '10vw', }}
          >
            <Box sx={{
              width: '45%',
              display: 'flex', flexDirection: 'column',
              justifyContent: 'space-between',
              alignItems: 'center',

            }}
            >
              <Box>
                <img src={roadMap_Early2022} alt="Early2022"
                  style={{ position: 'relative', top: '2vw', width: '70%', }} />
                <Typography variant='h6' sx={{
                  fontSize: 15
                }}
                  style={{ padding: '5px', color: '#3c3025', border: '2px solid #3c3025', backgroundColor: '#F4CCA1' }}
                >
                  Token funding, Token listing, Game development, Castles A collaborative approach to land acquisition.
                </Typography>
              </Box><Box>
                <img src={roadMap_Late2022} alt="Early2022"
                  style={{ position: 'relative', top: '2vw', width: '70%', }} />
                <Typography variant='h6' sx={{
                  fontSize: 15

                }}
                  style={{ padding: '5px', color: '#3c3025', border: '2px solid #3c3025', backgroundColor: '#F4CCA1' }}
                >
                  Token funding, Token listing, Game development, Castles A collaborative approach to land acquisition.
                </Typography>
              </Box>
            </Box>

            <Box sx={{
              width: '45%',
              display: 'flex', flexDirection: 'column',
              justifyContent: 'space-between',
              alignItems: 'center',

            }}
            >
              <Box >
                <img src={roadMap_Early2022} alt="Jan 2022"
                  style={{ position: 'relative', top: '2vw', width: '70%', }} />
                <Typography variant='h6' sx={{
                  fontSize: 15

                }}
                  style={{ padding: '5px', color: '#3c3025', border: '2px solid #3c3025', backgroundColor: '#F4CCA1' }}
                >
                  Token funding, Token listing, Game development, Castles A collaborative approach to land acquisition.
                </Typography>
              </Box>
              <Box style={{}}
              >
                <img src={roadMap_Mid2022} alt="Early2022"
                  style={{ position: 'relative', top: '2vw', width: '70%', }} />
                <Typography variant='h6' sx={{
                  fontSize: 15

                }}
                  style={{ padding: '5px', color: '#3c3025', border: '2px solid #3c3025', backgroundColor: '#F4CCA1' }}
                >
                  Token funding, Token listing, Game development, Castles A collaborative approach to land acquisition.
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box sx={{ width: { xs: '80%' }, display: { xs: 'flex', sm: 'none' } }}>
            <img src={path} alt="path" style={{ width: '100%', height: '100%' }} />
          </Box>

          {/* ======================== */}


          {/* show on big screen */}
          <Box sx={{
            flexGrow: 1, display: { xs: 'none', sm: 'flex' },
            width: '80%', flexDirection: 'row',
            justifyContent: { xs: 'center', md: 'center' }, alignItems: 'center'
          }}
            style={{ marginTop: "5vw" }}
          >

            <Box sx={{ width: 'auto', height: 'auto' }}
              style={{
                display: 'flex', flexDirection: 'column',
                justifyContent: 'space-evenly',

              }}
            >
              <Box className="box">
                <img src={roadMap_Early2022} alt="Early2022"
                />
                <Typography variant='h6' sx={{
                  fontSize: {
                    md: 20,
                    sm: 15,
                  },
                }} style={{ padding: '5px', color: '#3c3025', border: '2px solid #3c3025', backgroundColor: '#F4CCA1' }}
                >
                  Token funding, Token listing, Game development, Castles A collaborative approach to land acquisition.
                </Typography>
              </Box>

              <Box style={{ marginTop: '15vw' }} className="box">
                <img src={roadMap_Late2022} alt="Early2022"
                />
                <Typography variant='h6' sx={{
                  fontSize: {
                    md: 20,
                    sm: 15,
                  },
                }} style={{ padding: '5px', color: '#3c3025', border: '2px solid #3c3025', backgroundColor: '#F4CCA1' }}
                >
                  Token funding, Token listing, Game development, Castles A collaborative approach to land acquisition.
                </Typography>
              </Box>
            </Box>

            <Box sx={{
              width: '40%', height: '40vw',
              display: { xs: 'none', sm: 'flex' }, justifyContent: 'center'
            }}>
              <img src={path} alt="path" style={{ width: '100%', height: '100%' }} />
            </Box>

            <Box sx={{ width: 'auto', height: 'auto' }}
              style={{
                display: 'flex', flexDirection: 'column',
                justifyContent: 'space-evenly',

              }}
            >
              <Box style={{ marginLeft: '-5vw' }} className="box">
                <img src={roadMap_Late2022} alt="Early2022"
                />
                <Typography variant='h6' sx={{
                  fontSize: {
                    md: 20,
                    sm: 15,
                  },
                }} style={{ padding: '5px', color: '#3c3025', border: '2px solid #3c3025', backgroundColor: '#F4CCA1' }}
                >
                  Token funding, Token listing, Game development, Castles A collaborative approach to land acquisition.
                </Typography>
              </Box>

              <Box style={{ marginTop: '15vw' }} className="box">
                <img src={roadMap_Mid2022} alt="Early2022"
                />
                <Typography variant='h6' sx={{
                  fontSize: {
                    md: 20,
                    sm: 15,
                  },
                }} style={{ padding: '5px', color: '#3c3025', border: '2px solid #3c3025', backgroundColor: '#F4CCA1' }}
                >
                  Token funding, Token listing, Game development, Castles A collaborative approach to land acquisition.
                </Typography>
              </Box>
            </Box>

          </Box>


          <Box style={{ marginTop: "5vw", width: '80%' }}>
            <Typography sx={{
              fontSize: {
                md: 35,
                sm: 25,
                xs: 15
              }
            }} gutterBottom variant='h5'>
              A fun text to speech web app to let you speak through your computer in whatever voice synthesis module that is available to your Browser/Operating System.A fun text to speech web app to let you speak through your computer in
              whatever voice synthesis module that is available to your Browser/Operating System. <br />
            </Typography>
          </Box>


        </Box>
      </div>
    </ThemeProvider>

  )

}
