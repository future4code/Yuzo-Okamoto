import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TaskCard from './index';

const task = {
  id: 'abc123',
  name: 'Tarefa',
  day: 'Tuesday',
  completed: false,
};

const editTask = jest.fn();
const deleteTask = jest.fn();

it('renders correctly', () => {
  const { getByText, debug } = render(
    <TaskCard task={task} editTask={editTask} deleteTask={deleteTask} />
  );

  expect(getByText('Tarefa'));

  debug();
});
