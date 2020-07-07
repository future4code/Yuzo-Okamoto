import { useState } from 'react';

const useForm = (initialValues) => {
  const [fields, setFields] = useState(initialValues);

  const handleFields = ({ id, value, clear = false }) => {
    clear
      ? setFields({ ...fields, taskName: '' })
      : setFields({ ...fields, [id]: value });
  };
  return [fields, handleFields];
};

export default useForm;
