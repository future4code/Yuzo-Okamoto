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

const NavPlaylists = styled.div`
  cursor: pointer;
  border-radius: 5px;
  font-weight: bold;
  padding: 5% 12%;
  margin: 0 10px;
  color: #b3b3b3;
  > h6 {
    font-size: 16px;
    font-weight: bold;
    margin: 20px 0;
  }
  > p {
    padding-bottom: 8px;
    margin-bottom: 16px;
    border-bottom: 2px solid #b3b3b3;
    :hover {
      color: #fafafa;
    }
    > span {
      padding-right: 8px;
    }
  }
  > div {
    margin: 16px 0;
    :hover {
      color: #fafafa;
    }
  }
`;

const NavSelect = styled.select`
  border-radius: 3px;
  margin: 20px auto;
  font-weight: bold;
  background: #121212;
  color: #fafafa;
`;

export { StyledHeader, HeaderLogo, HeaderNav, NavPlaylists, NavSelect };
