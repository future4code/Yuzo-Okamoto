import React from 'react';
import { Section, Article, Title, Body } from './styles.js';
import TaskCard from '../TaskCard';

const DayCard = ({ day, taskList, editTask, deleteTask }) => {
  return (
    <Section>
      <Article>
        <Title>
          <h2>{day.name}</h2>
        </Title>
        <Body>
          {taskList &&
            taskList.map(
              (task) =>
                task.day === day.name && (
                  <TaskCard {...{ key: task.id, task, editTask, deleteTask }} />
                )
            )}
        </Body>
      </Article>
    </Section>
  );
};

export default DayCard;
