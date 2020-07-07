import React from 'react';
import { render, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import api from '../../../api';
import Form from './index';

api.get = jest.fn();
api.post = jest.fn();
api.put = jest.fn();
api.delete = jest.fn();

describe('New task form handle changes, validy them and call onSubmit function', () => {
  const handleSubmit = jest.fn();
  const setFields = jest.fn();

  it('works with valid inputs', async () => {
    let fields = {
      taskName: '',
      taskDay: 'Monday',
    };

    const { getByPlaceholderText, getByTestId, getByText } = render(
      <Form fields={fields} setFields={setFields} handleSubmit={handleSubmit} />
    );

    const name = getByPlaceholderText('Name...');
    const day = getByTestId('taskDay');
    const monday = getByTestId('Monday');
    const saturday = getByTestId('Saturday');

    await act(async () => {
      userEvent.type(name, 'Maratona');
      userEvent.selectOptions(day, ['Saturday']);
    });

    // expect(name).toHaveValue('Maratona');
    // expect(monday.selected).toBe(false);
    // expect(saturday.selected).toBe(true);
    // expect(handleSubmit).toHaveBeenCalledTimes(1);
  });
});
