import styled from 'styled-components';
import bgImage from '../../assets/img/netflix-login-background.jpg';

export const FormWrapper = styled.div`
  background-image: url(${bgImage});
  background-size: cover;
  background-position: center;
  width: 100vw;
  height: 100vh;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledInput = styled.input``;

export const StyledForm = styled.form`
  display: flex;
  width: 600px;
  flex-direction: column;
  justify-content: space-between;
  background-color: black;
  border-radius: 5px;
  padding: 20px;
`;

export const SubmitButton = styled.input`
  cursor: pointer;
  border: none;
  border-radius: 3px;
  align-self: center;
  background: red;
  color: white;
  padding: 10px;
`;
