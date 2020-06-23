import styled from 'styled-components';

import { Card, Box } from '@material-ui/core';

const StyledCard = styled(Card)`
  margin: 16px;
`;

const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export { StyledCard, StyledBox };
