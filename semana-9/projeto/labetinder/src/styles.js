import styled from 'styled-components';
import { Grid } from '@material-ui/core';

const StyledApp = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #dcdcdc;
`;

const SideGrid = styled(Grid)`
  @media (orientation: portrait) {
    display: none;
  }
`;

const StyledGridOutter = styled(Grid)`
  height: 95vh;
  max-height: 1000px;
  max-width: 500px;
  background: #f3f4f8;
  margin: 0 auto;
`;

const StyledGridInner = styled(Grid)`
  height: 100%;
  overflow: auto;
`;

export { StyledApp, SideGrid, StyledGridOutter, StyledGridInner };
