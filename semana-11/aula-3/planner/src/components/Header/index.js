import React from 'react';
import Form from './Form';
import { SHeader } from './styles';

const Header = ({ fields, setFields, handleSubmit }) => {
  return (
    <SHeader>
      <div>
        <h1>Weekly Planner</h1>
      </div>
      <div>
        <Form {...{ fields, setFields, handleSubmit }} />
      </div>
    </SHeader>
  );
};

export default Header;
