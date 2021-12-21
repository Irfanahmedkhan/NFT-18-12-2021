import React from "react"
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { Link, Element } from 'react-scroll';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import CssBaseline from '@mui/material/CssBaseline';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Zoom from '@mui/material/Zoom';
import Slide from "@material-ui/core/Slide";

// import CSS
import './navbar.css';

//import pages
import MainSectionPage from '../mainSection/mainSection';
import DAOPage from '../DAO/DAO.js';
import GamePage from '../game/game.js';
import RoadMapPage from '../roadMap/roadMap.js';
import TeamPage from '../team/team.js';
import FAQPage from '../FAQ/FAQ.js';

//import Images
import NFT from './assets/NFT.png'
import DAO from './assets/DAO.png'
import GAME from './assets/GAME.png'
import ROADMAP from './assets/ROADMAP.png'
import TEAM from './assets/TEAM.png'
import FAQ from './assets/FAQ.png'
import twitter from './assets/twitter.png'
import vi from './assets/vi.png'
import text from './assets/text.png'

const pages = [
  <Link
    activeClass="active"
    spy={true}
    smooth={true}
    duration={500}
    to="mainSectionPage"
  >
    <img src={NFT} alt="NFT" className="navbarIcon" />
  </Link>,
  <Link
    spy={true}
    smooth={true}
    duration={500}
    to="DAOPage"
  >
    <img src={DAO} alt="DAO" className="navbarIcon" />
  </Link>,
  <Link
    spy={true}
    smooth={true}
    duration={500}
    to="gamePage"
  >
    <img src={GAME} alt="game" className="navbarIcon" />
  </Link>,
  <Link
    spy={true}
    smooth={true}
    duration={500}
    to="teamPage"
  >
    <img src={TEAM} alt="team" className="navbarIcon" />
  </Link>,
  <Link
    spy={true}
    smooth={true}
    duration={500}
    to="roadMapPage"
  >
    <img src={ROADMAP} alt="roadmap" className="navbarIcon" />
  </Link>,

  <Link
    spy={true}
    smooth={true}
    duration={500}
    to="FAQPage"
  >
    <img src={FAQ} alt="FAQ" className="navbarIcon" />
  </Link>,

];
const sideIcons = [<img src={vi} alt="vi" className="navbarIcon" />, <img src={twitter} alt="twitter" className="navbarIcon" />, <img src={text} alt="text" className="navbarIcon" />];

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

const Navbar = (props) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const trigger = useScrollTrigger();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    < >
      <CssBaseline />
      <div id="back-to-top-anchor" ></div>
      <Slide appear={false} direction="down" in={!trigger} >
        <AppBar sx={{ flexGrow: 1, background: { xs: 'transparent', md: '#C6DFD3'}, boxShadow: 'none' }} >
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              {/* Mobile view */}
              <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: 'block', md: 'none' },
                  }}
                >
                  {pages.map((page, i) => (
                    <MenuItem key={i} onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">{page}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>

              {/* Desktop view */}
              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                {pages.map((pageMobile, i) => (
                  <Button
                    key={i}
                    onClick={handleCloseNavMenu}
                    size="small"
                    sx={{ my: 2, color: 'white', display: 'block' }}
                  >
                    {pageMobile}

                  </Button>
                ))}
              </Box>

              <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }} style={{ flexWrap: "nowrap" }}>
                {sideIcons.map((icon, i) => (
                  <Button size="small" key={i} onClick={handleCloseNavMenu} >
                    {icon}
                  </Button>
                ))}
              </Box>

            </Toolbar>
          </Container>
        </AppBar>
      </Slide>

      {/* sub pages */}
      <Element name="mainSectionPage" className="element">
        <MainSectionPage />
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

      {/* scroll to Top */}
      <ScrollTop {...props}>
        <Fab color="white" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </>
  );
};
export default Navbar;
