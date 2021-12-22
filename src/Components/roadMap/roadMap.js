import React from "react"

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';



// Import CSS file
import './roadMap.css'

// Import images from assests
import Early2022 from './assets/Early2022.png'
import Late2022 from './assets/Late2022.png'
import Mid2022 from './assets/Mid2022.png'
import Jan from './assets/Jan.png'
import path from './assets/path.png'

export default function RoadMapPage() {

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
          }} gutterBottom variant="h3">
            ROADMAP
          </Typography>

          <Box sx={{
            width: '70%',
            display: 'flex', flexDirection: 'row', justifyContent: { xs: 'center', md: 'space-between' }, alignItems: 'center'
          }}
            style={{ position: 'relative'}}
            className='road'
          >
            <Box sx={{
              width: '25%', height: '30vw',
              display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
              alignItems: 'flex-start',
            }}>
              <img src={Early2022} alt="Early2022" style={{ width: '100%', position:'relative', left: "5vw"}} />
              <img src={Late2022} alt="Late2022" style={{ width: '100%' }} />
            </Box>
            <Box sx={{ width: '50%', }}>
              <img src={path} alt="path" style={{ width: '100%' }} />
            </Box>
            <Box sx={{
              width: '25%', height: '30vw',
              display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'flex-start'
            }}>
              <img src={Jan} alt="Jan" style={{ width: '100%', position:'relative', right: "7vw"}} />
              <img src={Mid2022} alt="Mid2022" style={{ width: '100%' }} />
            </Box>
            {/* <img src={quantum_logo} alt="quantum_logo" style={{ width: '100%' }} /> */}
          </Box>
        </Box>



      </div>
    </ThemeProvider>

  )

}
