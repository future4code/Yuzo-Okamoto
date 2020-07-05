import React, { useState, useEffect } from 'react';
import week from '../../data/week';
import api from '../../api';
import useForm from '../../hooks/useForm';
import DayCard from '../DayCard';
import { AppWrap, Header, Form, FieldGroup, Main } from './styles';

function App() {
  const [taskList, setTaskList] = useState([]);
  const [fields, setFields] = useForm({
    taskName: '',
    taskDay: 'Monday',
  });

  useEffect(() => {
    getTaskList();
  }, []);

  const getTaskList = async () => {
    try {
      const { data } = await api.get('/');
      setTaskList(data);
    } catch (error) {
      console.debug('Get Task List Axios', error.data);
    }
  };

  const createTask = async () => {
    const body = {
      name: fields.taskName,
      day: fields.taskDay,
      completed: false,
    };
    try {
      await api.post('/', body);
      getTaskList();
      setFields({ clear: true });
    } catch (error) {
      console.debug('Create Task Axios', error.data);
    }
  };

  const editTask = async (taskId, body) => {
    try {
      await api.put(`/${taskId}`, body);
      getTaskList();
    } catch (error) {
      console.debug('PUT Task Axios', error.data);
    }
  };

  const deleteTask = async (taskId) => {
    try {
      await api.delete(`/${taskId}`);
      getTaskList();
    } catch (error) {
      console.debug('DELETE Task Axios', error.data);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createTask();
  };

  return (
    <AppWrap>
      <Header>
        <div>
          <h1>Weekly Planner</h1>
        </div>
        <div>
          <Form autoComplete='off' onSubmit={handleSubmit}>
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
          </Form>
        </div>
      </Header>

      <Main>
        {week.map((day) => (
          <DayCard
            {...{ key: day.name, day, taskList, editTask, deleteTask }}
          />
        ))}
      </Main>
    </AppWrap>
  );
}

export default App;
