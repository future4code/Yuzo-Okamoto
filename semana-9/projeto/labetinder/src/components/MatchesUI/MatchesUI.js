import React from 'react';

import { Grid, CardHeader, Avatar, Typography } from '@material-ui/core';

import { StyledCard, StyledBox } from './styles';

const MatchesUI = ({ matches }) => {
  return (
    <Grid item xs={12}>
      {matches.length ? (
        matches.map(({ id, name, photo, bio }) => (
          <StyledCard key={id}>
            <CardHeader
              avatar={<Avatar aria-label={name} alt={name} src={photo} />}
              title={name}
              subheader={bio}
            />
          </StyledCard>
        ))
      ) : (
        <StyledBox>
          <Typography>Você ainda não teve matches...</Typography>
          <Typography>Continue tentando!</Typography>
        </StyledBox>
      )}
    </Grid>
  );
};

export default MatchesUI;
