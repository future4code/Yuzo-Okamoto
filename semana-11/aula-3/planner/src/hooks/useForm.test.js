import { renderHook, act } from '@testing-library/react-hooks';
import '@testing-library/jest-dom/extend-expect';
import useForm from './useForm';

describe('handle changes', () => {
  it('updates value', async () => {
    const { result } = renderHook(() =>
      useForm({
        taskName: '',
        taskDay: 'Monday',
      })
    );

    await act(async () => {
      result.current[1]({ id: 'taskName', value: 'Estudar' });
    });
    expect(result.current[0].taskName).toBe('Estudar');
  });

  it('clears value', async () => {
    const { result } = renderHook(() =>
      useForm({
        taskName: '',
        taskDay: 'Monday',
      })
    );

    await act(async () => {
      result.current[1]({ id: 'taskName', value: 'Estudar' });
      result.current[1]({ id: 'taskName', value: 'Estudar', clear: true });
    });

    expect(result.current[0].taskName).toBe('');
  });
});
