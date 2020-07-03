import { useState } from 'react';

const useForm = (initialValues) => {
  const [fields, setValues] = useState(initialValues);

  const setFields = (event) => {
    setValues({
      ...fields,
      [event.target.id]: event.target.value,
    });
  };

  return [fields, setFields];
};

export default useForm;
