import styled from "styled-components";

const StyledHeader = styled.header`
  height: 100%;
  background: #040404;
  width: 20vw;
  color: #b3b3b3;
  display: flex;
  flex-direction: column;
`;

const HeaderLogo = styled.div`
  cursor: pointer;
  color: #fafafa;
  text-align: center;
  margin: 20px 0;
`;

const HeaderNav = styled.nav``;

const NavSelect = styled.select`
  margin: 20px auto;
  font-weight: bold;
  background: #121212;
  color: #fafafa;
`;

export { StyledHeader, HeaderLogo, HeaderNav, NavSelect };
