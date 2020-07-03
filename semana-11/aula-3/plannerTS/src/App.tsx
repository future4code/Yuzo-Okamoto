import React, { useEffect, useState } from 'react';
import api from './services/api';
import styled from 'styled-components';

import {
  Grid,
  Typography,
  Container,
  Paper,
  Box,
  Button,
} from '@material-ui/core';
import DayCard from './components/DayCard';

import useForm from './hooks/useForm.js'

const BackgroundPaper = styled(Paper)`
  height: 100%;
  border-radius: 0;
`;

const AppGrid = styled(Grid)``;

const HeaderGrid = styled(Grid)`
  padding: 16px 0;
`;
const TitleGrid = styled(Grid)``;

const FormGrid = styled(Grid)`
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const InputBox = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 8px;
`;
const ContentGrid = styled(Grid)`
  border: 1px solid black;
`;
const CardGrid = styled(Grid)`
  border: 1px solid black;
  width: 100%;
`;

interface ITask {
  id: string;
  day: string;
  name: string;
  completed: boolean;
}

interface IFormValues {
  taskName: string;
  taskDay: string;
}

const weekDays = [
  {
    name: 'Monday',
  },
  {
    name: 'Tuesday',
  },
  {
    name: 'Wednesday',
  },
  {
    name: 'Thursday',
  },
  {
    name: 'Friday',
  },
  {
    name: 'Saturday',
  },
  {
    name: 'Sunday',
  },
];

const App: React.FC = () => {
  const [tasks, setTasks] = useState<ITask[]>([]);

  // Tive dificuldades em implementar o Typescript nesse custom hook
  const [fields, handleFieldChange] = useForm({
    taskName: '',
    taskDay: 'Monday'
  })

  useEffect(() => {
    api.get<ITask[]>('/').then((res) => {
      setTasks(res.data);
    });
  }, []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log(`submit ${fields.taskName} ${fields.taskDay}`)
  };

  return (
    <BackgroundPaper>
      <Container>
        <AppGrid container>
          <HeaderGrid item container xs={12}>
            <TitleGrid item xs={12} md={9}>
              <Typography variant='h1'>Weekly Planner</Typography>
            </TitleGrid>

            <FormGrid item xs={12} md={3}>
              <form onSubmit={handleSubmit}>
                <InputBox>
                  <label>Task</label>
                  <input id='taskName' value={fields.taskName} onChange={handleFieldChange} />
                </InputBox>
                <InputBox>
                  <label>Day</label>
                  <select id='taskDay' value={fields.taskDay} onChange={handleFieldChange}>
                    {/* Mapeia os dias da semana e os retorna como options*/}
                    {weekDays.map((day) => (
                      <option key={day.name} value={day.name}>
                        {day.name}
                      </option>
                    ))}
                  </select>
                </InputBox>
                <InputBox>
                  <Button variant='outlined' type='submit'>Create Task</Button>
                </InputBox>
              </form>
            </FormGrid>
          </HeaderGrid>

          <ContentGrid item container xs={12}>
                    
            {/* Mapeia os dias da semana e os envia como props */}
            {weekDays.map((day) => (
              <CardGrid item key={day.name}>
                <DayCard {...{ day, tasks }} />
              </CardGrid>
            ))}
          </ContentGrid>
        </AppGrid>
      </Container>
    </BackgroundPaper>
  );
};

export default App;
