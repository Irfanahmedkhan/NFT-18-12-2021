import React from "react"

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';



// Import CSS file
import './FAQ.css'

// Import images from assests


const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({

  '&:not(:last-child)': {
    border: 'none',
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '1.2rem', color: 'white' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: '#4C575B',
  border: 'none',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
    MuiExpansionPanel: {
      root: {
        '&:before': {
          display: 'none'
        },
      },
    },
  
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  paddingLeft: theme.spacing(5),
  backgroundColor: '#4C575B',

}));



export default function FAQPage() {

  // Typography stype
  const theme = createTheme();
  theme.typography.h3 = {
    fontFamily: 'Billy-Bold, Arial',

  };

  theme.typography.h4 = {
    fontFamily: 'Open Sans, Arial',
    color: '#FDC400',
  };


  theme.typography.h5 = {
    fontFamily: 'Billy-Light, Arial',
    color: 'white',
  };

  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <ThemeProvider theme={theme}>

      <div className="FAQContainer">

        <Box
          sx={{
            display: 'flex', flexDirection: 'column',
            justifyContent: 'center', alignItems: 'center',
          }}
          className='FAQ'
        >
          <Typography sx={{
            fontSize: {
              md: 100,
              sm: 50,
              xs: 30
            }
          }} gutterBottom variant="h3" style={{ margin: '5vw 0vw' }}>
            F.A.Q
          </Typography>


        </Box>
        <Box
          sx={{
            display: 'flex', flexDirection: 'column',
            justifyContent: 'center', alignItems: 'center',
          }}

        >
          <div className='quizDiv'>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} style={{border: 'none'}}>
              <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                <Typography
                  sx={{
                    fontSize: {
                      md: 40,
                      sm: 30,
                      xs: 20
                    }
                  }} style={{ letterSpacing: '1px' }} gutterBottom variant='h4'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{
                  fontSize: {
                    md: 40,
                    sm: 30,
                    xs: 15
                  }
                }} gutterBottom variant='h5'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                  malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                  sit amet blandit leo lobortis eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
              <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                <Typography
                  sx={{
                    fontSize: {
                      md: 40,
                      sm: 30,
                      xs: 20
                    }
                  }} style={{ letterSpacing: '1px' }} gutterBottom variant='h4'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{
                  fontSize: {
                    md: 40,
                    sm: 30,
                    xs: 15
                  }
                }} gutterBottom variant='h5'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                  malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                  sit amet blandit leo lobortis eget.
                </Typography>
              </AccordionDetails>
            </Accordion><Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
              <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                <Typography
                  sx={{
                    fontSize: {
                      md: 40,
                      sm: 30,
                      xs: 20
                    }
                  }} style={{ letterSpacing: '1px' }} gutterBottom variant='h4'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{
                  fontSize: {
                    md: 40,
                    sm: 30,
                    xs: 15
                  }
                }} gutterBottom variant='h5'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                  malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                  sit amet blandit leo lobortis eget.
                </Typography>
              </AccordionDetails>
            </Accordion>


          </div>
        </Box>

      </div>
    </ThemeProvider>

  )

}
