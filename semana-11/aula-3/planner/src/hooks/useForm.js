import { useState } from 'react';

const useForm = (initialValues) => {
  const [fields, setFields] = useState(initialValues);

  const handleFields = (event) => {
    setFields({ ...fields, [event.target.id]: event.target.value });
  };
  return [fields, handleFields];
};

export default useForm;
