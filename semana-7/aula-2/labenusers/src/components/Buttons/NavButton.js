import React from "react";
import styled from "styled-components";

const NavButtonWrapper = styled.button`
  font-size: 80%;
  font-weight: bold;
  align-self: flex-end;
  color: black;
  border: none;
  border-radius: 5px;
  padding: 0.5rem;
`;

function Users(props) {
  return (
    <NavButtonWrapper onClick={props.handler}>
      Voltar para {props.load}
    </NavButtonWrapper>
  );
}

export default Users;
