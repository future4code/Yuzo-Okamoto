import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent, wait } from '@testing-library/react';
import App from './App';

describe('Create, delete and favorite posts created by user', () => {
  test('Must record what the user is typing in the input', () => {
    const { getByPlaceholderText } = render(<App />);
    const Input = getByPlaceholderText(/novo post/i);

    fireEvent.change(Input, { target: { value: 'Hi, my name is Joe!' } });
    expect(Input.value).toContain('Hi, my name is Joe!');
  });

  test('Must create a new post after clicking on submit button', () => {
    const { getByPlaceholderText, getByText, getByTestId } = render(<App />);
    const Input = getByPlaceholderText(/novo post/i);
    const SubmitButton = getByText(/adicionar/i);

    fireEvent.change(Input, { target: { value: 'Hi, my name is Joe!' } });
    fireEvent.click(SubmitButton);
    expect(getByTestId('Post')).toBeTruthy();
  });

  test('Must toggle the post favorite option with click event', () => {
    const { getByPlaceholderText, getByText, getByTestId } = render(<App />);
    const Input = getByPlaceholderText(/novo post/i);
    const SubmitButton = getByText(/adicionar/i);

    fireEvent.change(Input, { target: { value: 'Hi, my name is Joe!' } });
    fireEvent.click(SubmitButton);
    expect(getByTestId('like-button').textContent).toMatch(/curtir/i);

    fireEvent.click(getByTestId('like-button'));
    expect(getByTestId('like-button').textContent).toMatch(/descurtir/i);

    fireEvent.click(getByTestId('like-button'));
    expect(getByTestId('like-button').textContent).toMatch(/curtir/i);
  });

  test('Must delete post on click', () => {
    const {
      getByPlaceholderText,
      getByText,
      getByTestId,
      queryByTestId,
    } = render(<App />);
    const Input = getByPlaceholderText(/novo post/i);
    const SubmitButton = getByText(/adicionar/i);

    fireEvent.change(Input, { target: { value: 'Hi, my name is Joe!' } });
    fireEvent.click(SubmitButton);

    fireEvent.click(getByTestId('delete-button'));
    expect(queryByTestId('Post')).toBeNull();
  });
});
