import React from 'react';
import { Title, Body } from './DayCard.styles';

const DayCard = ({ day, taskList }) => {
  return (
    <section>
      <Title>
        <h2>{day.name}</h2>
      </Title>
      <Body>
        {taskList &&
          taskList.map(
            (task) =>
              task.day === day.name && (
                <p key={task.id}>
                  <span>{task.name}</span>
                </p>
              )
          )}
      </Body>
    </section>
  );
};

export default DayCard;
