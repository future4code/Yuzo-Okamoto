import React from 'react';

import { Grid, Toolbar, Typography } from '@material-ui/core';

import WhatshotRoundedIcon from '@material-ui/icons/WhatshotRounded';
import PeopleRoundedIcon from '@material-ui/icons/PeopleRounded';

import {
  StyledGrid,
  StyledAppBar,
  StyledButtonGroup,
  StyledButton,
} from './styles';

const Header = ({ activeScreen, changeScreen }) => {
  return (
    <StyledGrid item xs={12}>
      <Grid container>
        <Grid item xs={12}>
          <StyledAppBar position='static'>
            <Toolbar>
              <Typography>LabeTinder</Typography>
            </Toolbar>
          </StyledAppBar>
        </Grid>

        <Grid item xs={12}>
          <StyledButtonGroup>
            <StyledButton
              active={activeScreen === 'swipe' ? 'true' : 'false'}
              variant='contained'
              onClick={(e) => {
                changeScreen('swipe');
              }}
            >
              <WhatshotRoundedIcon />
            </StyledButton>

            <StyledButton
              active={activeScreen === 'match' ? 'true' : 'false'}
              variant='contained'
              onClick={(e) => {
                changeScreen('match');
              }}
            >
              <PeopleRoundedIcon />
            </StyledButton>
          </StyledButtonGroup>
        </Grid>
      </Grid>
    </StyledGrid>
  );
};

export default Header;
