import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.footer`
  background: #18222e;
  grid-row: 3;
  grid-column: 1 / 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  font-style: italic;
  font-weight: bold;
`;

class Footer extends React.Component {
  render() {
    return (
      <FooterWrapper>
        <h4>yuzokamoto@github</h4>
      </FooterWrapper>
    );
  }
}

export default Footer;
