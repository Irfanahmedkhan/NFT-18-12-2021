import React from "react"
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


import fan from './assets/fan.png'
import items from './assets/items.png'
import logo from './assets/logo.png'

import './mainSection.css'

export default function MainSectionPage() {
  return (

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
            // p: 1,
            // m: 1,
          }}
        >
          <Typography variant="h3" gutterBottom wrap component="div">
            NFT GAME
          </Typography>

          <Typography variant="h6" gutterBottom wrap component="div">
            A fun text to speech web app to let you speak through your computer in
            whatever voice synthesis module that is available to your Browser/Operating System.

            A fun text to speech web app to let you speak through your computer in
            whatever voice synthesis module that is available to your Browser/Operating System.
          </Typography>
        </Box>

        <img src={items} alt="items" />

      </Box>






    </div>
  )

}
