import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import '../styles/Navigation.css';
import styled from 'styled-components';


import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

 const Navigation = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <nav>
    <AppBar>
      <div className="Navigation">
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={handleClick}
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>
            <StyledLink to="/">
              <p className="Link"> TEST2 </p>
            </StyledLink>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <StyledLink to="/api/summary">
              <p className="Link"> Test2 </p>
            </StyledLink>
          </MenuItem>
        </Menu>
      </div>
    </AppBar>
    </nav>
  )
}

export {Navigation};
