import styled from 'styled-components';

const Task = styled.p`
  display: ${(props) => (props.edit ? 'none' : 'block')};
`;

const TaskMenu = styled.div`
  display: ${(props) => (props.active ? 'flex' : 'none')};
  font-size: 14px;
  justify-content: space-evenly;
  > div {
    cursor: pointer;
    :hover {
      background: rgba(0, 0, 0, 0.15);
    }
  }
`;

const Editor = styled.form`
  display: ${(props) => (props.edit ? 'block' : 'none')};
`;

export { Task, TaskMenu, Editor };
