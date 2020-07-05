import React from 'react';
import week from '../../../data/week';
import { SForm, FieldGroup } from './styles';

const Form = ({ fields, setFields, handleSubmit }) => {
  return (
    <SForm autoComplete='off' onSubmit={handleSubmit}>
      <FieldGroup>
        <label htmlFor='taskName'>Task Name</label>
        <input
          id='taskName'
          value={fields.taskName}
          onChange={(e) =>
            setFields({ id: e.target.id, value: e.target.value })
          }
          type='text'
          placeholder='Name...'
          required
          minLength='3'
          maxLength='30'
        />
      </FieldGroup>

      <FieldGroup>
        <label htmlFor='taskDay'>Task Day</label>
        <select
          id='taskDay'
          data-testid='taskDay'
          value={fields.taskDay}
          onChange={(e) =>
            setFields({ id: e.target.id, value: e.target.value })
          }
        >
          {week.map((day) => (
            <option key={day.name} data-testid={day.name}>
              {day.name}
            </option>
          ))}
        </select>
      </FieldGroup>

      <FieldGroup>
        <button type='submit'>New Task</button>
      </FieldGroup>
    </SForm>
  );
};

export default Form;
