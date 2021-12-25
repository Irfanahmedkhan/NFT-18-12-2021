import React from "react"
import Navbar from "../Components/navbar/navbar"
import { Element } from 'react-scroll';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Zoom from '@mui/material/Zoom';
import Box from '@mui/material/Box';
import { Helmet } from 'react-helmet'


//import pages
import MainSectionPage from '../Components/mainSection/mainSection';
import DAOPage from '../Components/DAO/DAO.js';
import GamePage from '../Components/game/game.js';
import RoadMapPage from '../Components/roadMap/roadMap.js';
import TeamPage from '../Components/team/team.js';
import FAQPage from '../Components/FAQ/FAQ.js';
import Footer from '../Components/footer/footer'

import './index.css'

export default function Home(props) {

  function ScrollTop(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
      target: window ? window() : undefined,
      disableHysteresis: true,
      threshold: 100,
    });

    const handleClick = (event) => {
      const anchor = (event.target.ownerDocument || document).querySelector(
        '#back-to-top-anchor',
      );

      if (anchor) {
        anchor.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        });
      }
    };

    return (
      <Zoom in={trigger}>
        <Box
          onClick={handleClick}
          role="presentation"
          sx={{ position: 'fixed', bottom: 25, right: 25 }}
        >
          {children}
        </Box>
      </Zoom>
    );
  }

  return (

    <div>
      <Helmet>
        <title>SOL QuestNFT</title>
        <meta name='description' content='NFT games' />
        <meta name='keywords' content='NFT, play to earn, games, earn money' />
      </Helmet>
      <Navbar />
      <Element name="mainSectionPage" className="element">
        {/* <MainSectionPage /> */}
      </Element>
      <Element name="DAOPage" className="element">
        <DAOPage />
      </Element>
      <Element name="gamePage" className="element">
        <GamePage />
      </Element>
      <Element name="teamPage" className="element">
        <TeamPage />
      </Element>
      <Element name="roadMapPage" className="element">
        <RoadMapPage />
      </Element>
      <Element name="FAQPage" className="element">
        <FAQPage />
      </Element>
      <Footer />

      {/* scroll to Top */}
      <ScrollTop {...props}>
        <Fab color="white" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </div>
  )

}
