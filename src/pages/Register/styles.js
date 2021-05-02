import styled from 'styled-components';
import device from '../../assets/device';
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

export const StyledForm = styled.form`
  display: flex;
  width: 600px;
  flex-direction: column;
  justify-content: space-between;
  background-color: white;
  border-radius: 5px;
  padding: 20px;

  /* Margin between Material UI inputs without the need to import useStyles */
  & > div {
    margin-top: 20px;
  }

  /* Error messages */
  p {
    color: red;
    margin-top: 4px;
  }

  /* Submit button */
  input[type='submit'] {
    margin-top: 20px;
  }

  @media ${device.tablet} {
    width: 90vw;
  }
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
