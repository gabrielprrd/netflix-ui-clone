import React from 'react';
import { useForm } from 'react-hook-form';

// Components
import UsernameInput from '../../components/input/UsernameInput/index';
import NameInput from '../../components/input/NameInput/index';
import EmailInput from '../../components/input/EmailInput/index';
import PasswordInput from '../../components/input/PasswordInput/index';

// Styles
import * as S from './styles';

export default function Register() {
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({ criteriaMode: 'all' });

  const submitForm = (data) => {
    console.log(data);
    // sends info to server through a post request
  };

  return (
    <S.FormWrapper>
      <S.StyledForm onSubmit={handleSubmit(submitForm)}>
        <UsernameInput control={control} name="username" />
        {errors.username && <p>{errors.username.types.required}</p>}
        {errors.username && <p>{errors.username.types.minLength}</p>}
        {errors.username && <p>{errors.username.types.maxLength}</p>}
        {errors.username && <p>{errors.username.types.pattern}</p>}

        <NameInput control={control} name="fullname" />
        {errors.fullname && <p>{errors.fullname.types.required}</p>}
        {errors.fullname && <p>{errors.fullname.types.minLength}</p>}
        {errors.fullname && <p>{errors.fullname.types.maxLength}</p>}

        <EmailInput control={control} name="email" />
        {errors.email && <p>{errors.email.types.required}</p>}

        <PasswordInput control={control} name="password" />
        {errors.password && <p>{errors.password.types.required}</p>}
        {errors.password && <p>{errors.password.types.minLength}</p>}
        {errors.password && <p>{errors.password.types.maxLength}</p>}

        <S.SubmitButton type="submit" name="submitBtn" value="Create Account" />
      </S.StyledForm>
    </S.FormWrapper>
  );
}
