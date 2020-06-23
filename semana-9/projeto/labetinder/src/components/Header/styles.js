import styled from 'styled-components';

import { Grid, AppBar, ButtonGroup, Button } from '@material-ui/core';

const StyledGrid = styled(Grid)`
  height: 15vh;
  @media (orientation: portrait) {
    height: 12vh;
  }
`;

const StyledAppBar = styled(AppBar)`
  height: 5vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledButtonGroup = styled(ButtonGroup)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
`;

const StyledButton = styled(Button)`
  background: ${(props) =>
    props.active === 'true' ? '#FD3874' : '#DADFE6'} !important;
  color: ${(props) =>
    props.active === 'true' ? '#FAFAFA' : '#9d9fa1'} !important;
`;

export { StyledGrid, StyledAppBar, StyledButtonGroup, StyledButton };
