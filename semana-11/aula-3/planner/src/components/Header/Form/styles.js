import styled from 'styled-components';

const SForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: 8px 16px;
  transition: all 0.3s ease-in-out;
`;

const FieldGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 8px;
  button,
  select {
    cursor: pointer;
  }
  input[type='text'],
  input[type='email'],
  input[type='number'],
  textarea,
  fieldset {
    -webkit-appearance: none;

    width: 100%;
    border: 1px solid #333;
    margin: 0;

    font-family: inherit;
    font-size: 90%;

    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  input:invalid {
    box-shadow: 0 0 5px 1px red;
  }

  input:focus:invalid {
    box-shadow: none;
  }
`;

export { SForm, FieldGroup };
