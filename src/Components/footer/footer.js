import React from "react"

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';



// Import CSS file
import './footer.css'

// Import images from assests
import twitter from '../../assets/twitter.png'
import discord from '../../assets/discord.png'
import text from '../../assets/text.png'
import footer_bg from '../../assets/footer_bg.png'

export default function FooterPage() {

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
            <div className="footerContainer">
                <Box
                    sx={{
                        display: 'flex', flexDirection: 'column',
                        justifyContent: 'center', alignItems: 'center',
                    }}>
                    <Box className='footerIcon'>
                        <Button size="small" target="_blank" href="http://www.google.com/">
                            <img src={discord} alt="vi" className="navbarIcon" />
                        </Button>
                        <Button size="small" target="_blank" href="http://www.google.com/">
                            <img src={twitter} alt="twitter" className="navbarIcon" />
                        </Button>
                        <Button size="small" target="_blank" href="http://www.google.com/">
                            <img src={text} alt="text" className="navbarIcon" />
                        </Button>
                    </Box>

                    <Typography sx={{
                        fontSize: {
                            md: 25,
                            sm: 20,
                            xs: 15
                        }
                    }} gutterBottom variant='h3' className='footerText'>
                        team@solquestnft.com            
                    </Typography>
                    <img src={footer_bg} alt="backgrond" style={{ width: '100vw', height:'auto' }} />
                </Box>
            </div>
        </ThemeProvider>
    )
}
