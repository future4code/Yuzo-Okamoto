import styled from 'styled-components';

import { Grid, Card, CardMedia, IconButton } from '@material-ui/core';

const StyledGrid = styled(Grid)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const StyledCard = styled(Card)`
  margin: 0 16px;
`;

const StyledCardMedia = styled(CardMedia)`
  max-height: 45vh;
  min-height: 45vh;
  @media (orientation: portrait) {
    width: 45vw;
    max-height: 40vh;
    min-height: 40vh;
  }
`;

const StyledDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 16px;
  padding: 0 16px;
`;

const StyledIconButton = styled(IconButton)`
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.1);
  background: #ffffff;
  * {
    font-size: 36px !important;
  }
  :nth-child(1) {
    stroke: #ffbc03;
    stroke-width: 1.5;
  }
  :nth-child(2) {
    font-size: 44px !important;
    stroke: #fe4c69;
    stroke-width: 1.5;
  }
  :nth-child(3) {
    stroke: #9c4edb;
    stroke-width: 0.5;
  }
  :nth-child(4) {
    stroke: #2be6af;
    stroke-width: 0.5;
  }
  :nth-child(5) {
    stroke: #12adee;
    stroke-width: 0.5;
  }
`;

export { StyledGrid, StyledCard, StyledCardMedia, StyledDiv, StyledIconButton };
