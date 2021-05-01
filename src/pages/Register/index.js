import React from 'react';
import { useForm } from 'react-hook-form';
import * as S from './styles';

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ criteriaMode: 'all' });

  const submitForm = (data) => {
    console.log(data);
    // sends info to server through a post request
  };

  const userNameRegex = /(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/gi;

  return (
    <S.FormWrapper>
      <S.StyledForm onSubmit={handleSubmit(submitForm)}>
        <label htmlFor="username">Username:</label>
        <input
          {...register('username', {
            required: {
              value: true,
              message: 'Username is required',
            },
            minLength: {
              value: 4,
              message: 'Username should have at least 4 characters',
            },
            maxLength: {
              value: 20,
              message: "Username can't be bigger than 20",
            },
            pattern: {
              value: userNameRegex,
              message:
                'Username should contain only alphanumeric characters, underscore and dots',
            },
          })}
          id="username"
          placeholder="Username"
        />
        {errors.username && <p>{errors.username.types.required}</p>}
        {errors.username && <p>{errors.username.types.minLength}</p>}
        {errors.username && <p>{errors.username.types.maxLength}</p>}
        {errors.username && <p>{errors.username.types.pattern}</p>}

        <label htmlFor="fullname">Full name:</label>
        <input
          {...register('fullname', {
            required: {
              value: true,
              message: 'Name is required',
            },
            minLength: {
              value: 4,
              message: 'Name should have at least 4 characters',
            },
            maxLength: {
              value: 50,
              message: "Name can't be bigger than 50",
            },
          })}
          id="fullname"
          placeholder="Full name"
        />
        {errors.fullname && <p>{errors.fullname.types.required}</p>}
        {errors.fullname && <p>{errors.fullname.types.minLength}</p>}
        {errors.fullname && <p>{errors.fullname.types.maxLength}</p>}

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          {...register('email', {
            required: {
              value: true,
              message: 'Email is required',
            },
          })}
          id="email"
          placeholder="Email"
        />
        {errors.email && <p>{errors.email.types.required}</p>}

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          {...register('password', {
            required: {
              value: true,
              message: 'Password is required',
            },
            minLength: {
              value: 6,
              message: 'Password should have at least 6 characters',
            },
            maxLength: {
              value: 20,
              message: "Password can't have more than 20 characters",
            },
          })}
          id="password"
          placeholder="Password"
        />
        {errors.password && <p>{errors.password.types.required}</p>}
        {errors.password && <p>{errors.password.types.minLength}</p>}
        {errors.password && <p>{errors.password.types.maxLength}</p>}

        <S.SubmitButton type="submit" name="submitBtn" value="Create Account" />
      </S.StyledForm>
    </S.FormWrapper>
  );
}
