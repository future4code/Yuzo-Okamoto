import React from 'react';

import { CardHeader, Tooltip } from '@material-ui/core';

import ReplayRoundedIcon from '@material-ui/icons/ReplayRounded';
import ClearRoundedIcon from '@material-ui/icons/ClearRounded';
import FlashOnRoundedIcon from '@material-ui/icons/FlashOnRounded';
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';
import StarRoundedIcon from '@material-ui/icons/StarRounded';

import {
  StyledGrid,
  StyledCard,
  StyledCardMedia,
  StyledDiv,
  StyledIconButton,
} from './styles';

const SwipeUI = ({
  loadProfile,
  profile,
  clearAction,
  swipeAction,
  updateMatches,
  boost,
  superLike,
}) => {
  return (
    <StyledGrid item xs={12}>
      <StyledCard>
        {profile ? (
          <>
            <StyledCardMedia
              component='img'
              alt={profile.name}
              image={profile.photo}
              title={profile.name}
            />
            <CardHeader
              title={`${profile.name}, ${profile.age}`}
              subheader={profile.bio}
            />
          </>
        ) : (
          <div>Loading</div>
        )}
      </StyledCard>
      <StyledDiv>
        {/* Botões */}

        {/* Reseta todos os Matches */}
        <Tooltip title='Reseta suas Matches' arrow>
          <StyledIconButton
            onClick={async () => {
              await clearAction();
              updateMatches({ clear: true });
              loadProfile();
            }}
          >
            <ReplayRoundedIcon style={{ color: '#FFBC03' }} />
          </StyledIconButton>
        </Tooltip>

        {/* Swipe Left */}
        <Tooltip title='Swipe Left' arrow>
          <StyledIconButton
            onClick={async () => {
              await swipeAction({
                id: profile.id,
                choice: false,
              });
              loadProfile();
            }}
          >
            <ClearRoundedIcon style={{ color: '#FE4C69', fontSize: '48px' }} />
          </StyledIconButton>
        </Tooltip>

        {/* Boost */}
        <Tooltip title='Use seu Boost' arrow>
          <StyledIconButton onClick={boost}>
            <FlashOnRoundedIcon
              style={{ color: '#9C4EDB', fontSize: '48px' }}
            />
          </StyledIconButton>
        </Tooltip>

        {/* Swipe Right */}
        <Tooltip title='Swipe Right' arrow>
          <StyledIconButton
            onClick={async () => {
              (await swipeAction({
                id: profile.id,
                choice: true,
              })) && updateMatches({ clear: false });
              loadProfile();
            }}
          >
            <FavoriteRoundedIcon
              style={{ color: '#2BE6AF', fontSize: '48px' }}
            />
          </StyledIconButton>
        </Tooltip>

        {/* Super Like */}
        <Tooltip title='Dê um Super Like' arrow>
          <StyledIconButton onClick={superLike}>
            <StarRoundedIcon style={{ color: '#12ADEE', fontSize: '48px' }} />
          </StyledIconButton>
        </Tooltip>
      </StyledDiv>
    </StyledGrid>
  );
};

export default SwipeUI;
