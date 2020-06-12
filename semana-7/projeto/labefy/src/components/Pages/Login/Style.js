import styled from "styled-components";
// Foto de Ronê Ferreira no Pexels
import concertBG from "../../../assets/img/bg-concert-4k.jpg";

const StyledLoginPage = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  content: "";
  position: fixed;
  left: 0;
  right: 0;
  z-index: -1;

  display: block;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(${concertBG});
  background-size: cover;
  background-repeat: no-repeat;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 44px 32px;
  border-radius: 5px;
  background: rgba(0, 0, 0, 0.5);
  > input#username {
    margin-top: 16px;
    margin-bottom: 8px;
  }
  > input#password {
    margin-bottom: 8px;
  }
`;

const LoginLogo = styled.div`
  border-radius: 5px;
  padding: 5px;
  color: white;
  font-weight: bold;
  font-size: 22px;
  text-align: center;
`;

const LoginInput = styled.input`
  color: white;
  background: #2e2f33;
  height: 24px;
  border-radius: 5px;
  padding: 4px 8px;
  border: none;
  letter-spacing: 1px;
`;

const LoginButton = styled.button`
  color: white;
  background: #2ebd59;
  border: none;
  width: 50%;
  margin: 0 auto;
  padding: 5px;
  border-radius: 5px;
  text-transform: uppercase;
  font-weight: bold;
`;

export {
  StyledLoginPage,
  BackgroundImage,
  LoginForm,
  LoginLogo,
  LoginInput,
  LoginButton,
};
