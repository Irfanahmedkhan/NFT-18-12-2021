import React from "react"
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import './DAO.css'

import book from './assets/book.png'
import DAO_bg from './assets/DAO_bg.png'

export default function DAOPage() {
  return (

    <div className="DAO_container">

      <Box className="DAO" sx={{ my: 2, color: 'white', display: 'flex', flexDirection: 'column', alignItems: "center" }}>
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
          <Box sx={{ p: 1, m: 1 }}    >
            <Typography variant="h3" gutterBottom wrap component="div">
              TOKEN
            </Typography>

          </Box>


          <Box sx={{ p: 1, m: 1 }}    >
            <Typography variant="h6" wrap component="div">
              A fun text to speech web app to let you speak through your computer in
              whatever voice synthesis module that is available to your Browser/Operating System.A fun text to speech web app to let you speak through your computer in
              whatever voice synthesis module that is available to your Browser/Operating System.
            </Typography>

          </Box>
        </Box>
      <img src={book} alt="book" />

      </Box>
      <img src={DAO_bg} alt="DAO background" className="DAO_container_image" />

    </div>
  )

}
