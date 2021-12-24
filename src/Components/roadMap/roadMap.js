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
import roadMap_path from '../../assets/roadMap_path.png'

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
          className='roadMap'
        >
          <Typography sx={{
            fontSize: {
              md: 65,
              sm: 45,
              xs: 30
            }
          }} style={{ marginBottom: '10vw' }} gutterBottom variant="h3">
            ROADMAP
          </Typography>


          {/* only show on small screen view  */}
          <Box
            sx={{
              width: '80%',
              display: { xs: 'flex', sm: 'none' }, flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexGrow: 1, 
            }}
            style={{ position: 'relative', marginBottom: '10vw', }}
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
                  fontSize: 10

                }}
                  style={{ padding: '5px', color: '#3c3025', border: '2px solid #3c3025', backgroundColor: '#F4CCA1' }}
                >
                  Token funding, Token listing, Game development, Castles A collaborative approach to land acquisition.
                </Typography>
              </Box><Box>
                <img src={roadMap_Late2022} alt="Early2022"
                  style={{ position: 'relative', top: '2vw', width: '70%', }} />
                <Typography variant='h6' sx={{
                  fontSize: 10

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
                <img src={roadMap_Early2022} alt="Early2022"
                  style={{ position: 'relative', top: '2vw', width: '70%', }} />
                <Typography variant='h6' sx={{
                  fontSize: 10

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
                  fontSize: 10

                }}
                  style={{ padding: '5px', color: '#3c3025', border: '2px solid #3c3025', backgroundColor: '#F4CCA1' }}
                >
                  Token funding, Token listing, Game development, Castles A collaborative approach to land acquisition.
                </Typography>
              </Box>
            </Box>



          </Box>

          <Box sx={{ width: { xs: '80%' }, display: { xs: 'flex', sm: 'none' } }}>
            <img src={roadMap_path} alt="path" style={{ width: '100%', height: '100%' }} />
          </Box>
          {/* ======================== */}

          <Box sx={{
            width: '80%',
            display: 'flex', flexDirection: 'row', justifyContent: { xs: 'center', md: 'space-between' }, alignItems: 'center'
          }}
          >
            <Box sx={{
              width: '25%', height: '30vw',
              display: 'flex', flexDirection: 'column',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
            }}>
              <Box style={{ minWidth: '100px', position: 'relative', left: "4vw", bottom: "4vw" }} sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex' }, flexDirection: 'column' }}>
                <img src={roadMap_Early2022} alt="Early2022"
                  style={{ width: '100%', }} />
                <Typography variant='h6' sx={{
                  fontSize: {
                    md: 15,
                    sm: 10,
                  },

                }}
                  style={{ padding: '5px', color: '#3c3025', border: '2px solid #3c3025', backgroundColor: '#F4CCA1' }}
                >
                  Token funding, Token listing, Game development, Castles A collaborative approach to land acquisition.
                </Typography>
              </Box>
              <Box style={{ minWidth: '100px' }} sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex' }, flexDirection: 'column' }}>
                <img src={roadMap_Late2022} alt="Early2022"
                  style={{ width: '100%', }} />
                <Typography variant='h6' sx={{
                  fontSize: {
                    md: 15,
                    sm: 10,
                  },

                }}
                  style={{ padding: '5px', color: '#3c3025', border: '2px solid #3c3025', backgroundColor: '#F4CCA1' }}
                >
                  Token funding, Token listing, Game development, Castles A collaborative approach to land acquisition.
                </Typography>
              </Box>
            </Box>

            <Box sx={{ width: { xs: '100%' }, display: { xs: 'none', sm: 'flex' } }}>
              <img src={roadMap_path} alt="path" style={{ width: '100%', height: '100%' }} />
            </Box>
            <Box sx={{
              width: '25%', height: '30vw',
              display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'flex-start'
            }}>
              <Box style={{ minWidth: '100px', position: 'relative', right: "4vw", bottom: "4vw" }} sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex' }, flexDirection: 'column' }}>
                <img src={roadMap_Early2022} alt="Early2022"
                  style={{ width: '100%', }} />
                <Typography variant='h6' sx={{
                  fontSize: {
                    md: 15,
                    sm: 10,
                  },

                }}
                  style={{ padding: '5px', color: '#3c3025', border: '2px solid #3c3025', backgroundColor: '#F4CCA1' }}
                >
                  Token funding, Token listing, Game development, Castles A collaborative approach to land acquisition.
                </Typography>
              </Box>
              <Box style={{ minWidth: '100px' }} sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex' }, flexDirection: 'column' }}>
                <img src={roadMap_Mid2022} alt="Early2022"
                  style={{ width: '100%', }} />
                <Typography variant='h6' sx={{
                  fontSize: {
                    md: 15,
                    sm: 10,
                  },

                }}
                  style={{ padding: '5px', color: '#3c3025', border: '2px solid #3c3025', backgroundColor: '#F4CCA1' }}
                >
                  Token funding, Token listing, Game development, Castles A collaborative approach to land acquisition.
                </Typography>
              </Box>
            </Box>
          </Box>







        </Box>
      </div>
    </ThemeProvider>

  )

}
