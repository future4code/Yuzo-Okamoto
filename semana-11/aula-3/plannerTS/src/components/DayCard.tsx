import React from 'react';
import styled from 'styled-components';
import { Card, Box, Paper, Typography } from '@material-ui/core';
import { ContextMenu, MenuItem, ContextMenuTrigger } from 'react-contextmenu';

const CardWrap = styled(Card)`
  display: flex;
`;

const TitleBox = styled(Box)`
  display: flex;
  width: 150px;
  padding: 16px;
  border-right: 1px solid white;
`;

const TasksWrap = styled(Box)`
  display: flex;
  align-items: center;
`;

const TaskWrap = styled(Box)`
  .menu {
    background-color: black;
    padding: 8px;
    .menu-item {
      padding: 8px;
      margin: 3px 0px;
      border: none;
      cursor: pointer;
      :hover {
        background: grey;
      }
    }
  }
`;

const TaskBox = styled(Box)`
  margin: 0 8px;
`;

const TaskTypography = styled(Typography)`
  cursor: pointer;
  :hover {
    font-weight: 600;
  }
  padding: 8px;
  border: 1px solid black;
  border-radius: 4px;
`;

interface IDay {
  name: string;
}

interface IProps {
  day: IDay;
  tasks: [ITask];
}

interface ITask {
  id: string;
  day: string;
  name: string;
  completed: boolean;
}

const handleEdit = (event, data) => {
  console.log(data.foo);
  console.log('edit', data);
};

const handleDelete = (event, data) => {
  console.log('delete', data);
};

const TaskCard: React.FC<IProps> = ({ day, tasks }) => {
  return (
    <CardWrap>
      <TitleBox>{day && <Typography>{day.name}</Typography>}</TitleBox>
      <TasksWrap>
        {tasks &&
          tasks.map(
            (task) =>
              task.day.toLowerCase() === day.name.toLowerCase() && (
                <TaskWrap key={task.id}>
                  <ContextMenuTrigger id='task-item'>
                    <TaskBox>
                      <TaskTypography>{task.name}</TaskTypography>
                    </TaskBox>
                  </ContextMenuTrigger>
                  <ContextMenu id='task-item' className='menu'>
                    <MenuItem
                      className='menu-item'
                      data={{ foo: 'bar' }}
                      onClick={(e, data) => {
                        e.preventDefault();
                        e.stopPropagation();
                        handleEdit(e, data);
                      }}
                    >
                      Edit
                    </MenuItem>
                    <MenuItem
                      className='menu-item'
                      data={{ foo: 'dar' }}
                      onClick={handleDelete}
                    >
                      Delete
                    </MenuItem>
                  </ContextMenu>
                </TaskWrap>
              )
          )}
      </TasksWrap>
    </CardWrap>
  );
};

export default TaskCard;
