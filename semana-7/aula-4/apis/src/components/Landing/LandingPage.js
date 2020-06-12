import React from "react";
import styled from "styled-components";

const LandingWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 0;
  > h5 {
    margin-top: 3rem;
  }
`;

export default function LandingPage() {
  return (
    <LandingWrapper>
      <h2>Curso FS Labenu</h2>
      <h5>Atividade APIs</h5>
    </LandingWrapper>
  );
}
