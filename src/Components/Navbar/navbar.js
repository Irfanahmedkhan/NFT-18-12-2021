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
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import MainSectionPage from '../mainSection/mainSection';
import DAOPage from '../DAO/DAO.js';
import GamePage from '../game/game.js';
import RoadMapPage from '../roadMap/roadMap.js';
import TeamPage from '../team/team.js';
import FAQPage from '../FAQ/FAQ.js';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from "@material-ui/core/Slide";


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
    className="flex items-center justify-evenly"
  >
    <img src={NFT} alt="NFT" />
  </Link>,
  <Link
    spy={true}
    smooth={true}
    duration={500}
    to="DAOPage"
    className="flex items-center justify-evenly"
  >
    <img src={DAO} alt="DAO" />
  </Link>,
  <Link
    spy={true}
    smooth={true}
    duration={500}
    to="gamePage"
    className="flex items-center justify-evenly"
  >
    <img src={GAME} alt="game" />
  </Link>,
  <Link
    spy={true}
    smooth={true}
    duration={500}
    to="roadMapPage"
    className="flex items-center justify-evenly"
  >
    <img src={ROADMAP} alt="roadmap" />
  </Link>,
  <Link
    spy={true}
    smooth={true}
    duration={500}
    to="teamPage"
    className="flex items-center justify-evenly"
  >
    <img src={TEAM} alt="team" />
  </Link>,
  <Link
    spy={true}
    smooth={true}
    duration={500}
    to="FAQPage"
    className="flex items-center justify-evenly"
  >
    <img src={FAQ} alt="FAQ" />
  </Link>,

];
const settings = [<img src={vi} alt="vi" />, <img src={twitter} alt="twitter" />, <img src={text} alt="text" />];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const trigger = useScrollTrigger();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    < >
      <Slide appear={false} direction="down" in={!trigger} style={{border: '1px solid blue' }}>
        <AppBar style={{ background: 'transparent', boxShadow: 'none' }}>
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              {/* Desktop view */}
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
              >
                LOGO Desktop
              </Typography>
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
                  {pages.map((page) => (
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">{page}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>

              {/* Mobile view */}

              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
              >
                LOGO
              </Typography>

              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                {pages.map((page) => (
                  <Button
                    key={page}
                    onClick={handleCloseNavMenu}
                    size="small"
                    sx={{ my: 2, color: 'white', display: 'block' }}
                  >
                    {page}

                  </Button>
                ))}
              </Box>

              <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }} style={{ flexWrap: "nowrap" }}>
                {settings.map((setting) => (

                  <Button size="small" key={setting} onClick={handleCloseNavMenu} >
                    <Typography textAlign="center">{setting}</Typography>
                  </Button>
                ))}

              </Box>
            </Toolbar>
          </Container>




        </AppBar>
      </Slide>
      <Element name="mainSectionPage" className="element">
        <MainSectionPage />
      </Element>

      <Element name="DAOPage" className="element">
        <DAOPage />
      </Element>

      <Element name="gamePage" className="element">
        <GamePage />
      </Element>
      <Element name="roadMapPage" className="element">
        <RoadMapPage />
      </Element>
      <Element name="teamPage" className="element">
        <TeamPage />
      </Element>
      <Element name="FAQPage" className="element">
        <FAQPage />
      </Element>
    </>
  );
};
export default Navbar;
