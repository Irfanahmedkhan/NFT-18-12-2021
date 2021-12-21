import React from "react"

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';



// Import CSS file
import './footer.css'

// Import images from assests
import twitter from './twitter.png'
import vi from './vi.png'
import text from './text.png'

import bg from './bg.png'
// import path from './assets/path.png'

export default function FooterPage() {

    // Typography stype
    const theme = createTheme();
    theme.typography.h3 = {
        fontFamily: 'Billy-Bold, Arial',
    };
    theme.typography.h5 = {
        fontFamily: 'Billy-Light, Arial',
    };

    const sideIcons = [<img src={vi} alt="vi" />, <img src={twitter} alt="twitter" />, <img src={text} alt="text" />];

    return (
        <ThemeProvider theme={theme}>
            <div className="footerContainer">

                <Box
                    sx={{
                        display: 'flex', flexDirection: 'column',
                        justifyContent: 'center', alignItems: 'center',
                    }}>
                    <Box sx={{}} style={{}} className='footerIcon'>
                        {sideIcons.map((icon, i) => (
                            <Button size="small" key={i}>
                                {icon}
                            </Button>
                        ))}
                    </Box>

                    <Typography sx={{
                        fontSize: {
                            md: 25,
                            sm: 20,
                            xs: 15
                        }
                    }} gutterBottom variant='h3' className='footerText'>
                        team@solquestnft.com            </Typography>
                    <img src={bg} alt="backgrond" style={{ width: '100%' }} />



                </Box>
            </div>
        </ThemeProvider>
    )
}
