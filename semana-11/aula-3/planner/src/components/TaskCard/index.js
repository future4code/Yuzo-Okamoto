import React, { useState } from 'react';
import { Task, TaskMenu, Editor } from './styles';

const TaskCard = ({ task, editTask, deleteTask }) => {
  const [active, setActive] = useState(false);
  const [edit, setEdit] = useState(false);
  const [value, setValue] = useState(task.name);

  const toggleMenu = () => {
    !edit && setActive(!active);
  };

  const toggleEditor = () => {
    setActive(!active);
    setEdit(!edit);
    setValue(task.name);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await editTask(task.id, { name: value });
    setTimeout(() => {
      setActive(false);
      setEdit(false);
    }, 600);
  };

  return (
    <div key={task.id}>
      <Task edit={edit}>
        <span onClick={toggleMenu}>{task.name}</span>
      </Task>

      <Editor edit={edit} onSubmit={handleSubmit}>
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          type='text'
          required
          minLength='3'
          maxLength='30'
        />
        <button type='submit'>Confirm</button>
        <button type='button' onClick={toggleEditor}>
          Cancel
        </button>
      </Editor>

      <TaskMenu active={active}>
        <div onClick={toggleEditor}>Edit</div>
        <div onClick={() => deleteTask(task.id)}>Delete</div>
      </TaskMenu>
    </div>
  );
};

export default TaskCard;
