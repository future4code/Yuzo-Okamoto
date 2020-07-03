import styled from 'styled-components';

const AppWrap = styled.div`
  width: 100%;
  height: 100%;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  h1 {
    cursor: pointer;
  }
`;

const Form = styled.form`
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
    /* required to properly style form 
   elements on WebKit based browsers */
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

const Main = styled.main`
  max-width: 1300px;
  margin: 0 auto;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
`;

export { AppWrap, Header, Form, FieldGroup, Main };
