import styled from "styled-components";

const StyledNavItem = styled.div`
  cursor: pointer;
  border-radius: 5px;
  display: flex;
  font-weight: bold;
  padding: 5% 12%;
  margin: 0 10px;
  background: ${(props) => (props.id === props.activeNav ? "#282828" : "none")};
  color: ${(props) => (props.id === props.activeNav ? "#fafafa" : "#b3b3b3")};
  :hover {
    color: #fafafa;
  }
`;

export { StyledNavItem };
