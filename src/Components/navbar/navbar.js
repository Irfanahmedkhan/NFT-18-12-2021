import React from "react"
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-scroll';
import useScrollTrigger from '@mui/material/useScrollTrigger';

import Slide from "@material-ui/core/Slide";

// import CSS
import './navbar.css';


//import Images
import NFT from '../../assets/NFT.png'
import DAO from '../../assets/DAO.png'
import GAME from '../../assets/GAME.png'
import ROADMAP from '../../assets/ROADMAP.png'
import TEAM from '../../assets/TEAM.png'
import FAQ from '../../assets/FAQ.png'
import twitter from '../../assets/twitter.png'
import discord from '../../assets/discord.png'
import text from '../../assets/text.png'

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


const Navbar = (props) => {

  const trigger = useScrollTrigger();

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  return (
    <>
      <div id="back-to-top-anchor" ></div>
      <Slide appear={false} direction="down" in={!trigger} >
        <AppBar sx={{ background: { xs: 'transparent', md: '#C6DFD3' }, boxShadow: 'none' }} >
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
                    <MenuItem key={i} onClick={handleCloseNavMenu}
                      sx={{
                        alignItems: 'center',


                      }}>
                      {page}
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
                <Button size="small" target="_blank" href="http://www.google.com/">
                  <img src={discord} alt="vi" className="navbarIcon" />
                </Button>
                <Button size="small"target="_blank" href="http://www.google.com/">
                  <img src={twitter} alt="twitter" className="navbarIcon" />
                </Button>
                <Button size="small"target="_blank" href="http://www.google.com/">
                  <img src={text} alt="text" className="navbarIcon" />
                </Button>
              </Box>

            </Toolbar>
          </Container>
        </AppBar>
      </Slide>


    </>
  );
};
export default Navbar;
