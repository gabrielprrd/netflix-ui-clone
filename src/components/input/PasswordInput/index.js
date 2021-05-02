import React, { useState } from 'react';
import { TextField, IconButton } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import { useController } from 'react-hook-form';

export default function PasswordInput({ control, name }) {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const {
    field: { ref, ...inputProps },
  } = useController({
    name,
    control,
    rules: {
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
    },
    defaultValue: '',
  });

  return (
    <TextField
      {...inputProps}
      inputRef={ref}
      variant="outlined"
      label="Password"
      id="password"
      type={showPassword ? 'text' : 'password'}
      InputProps={{
        endAdornment: (
          <IconButton onClick={handleClickShowPassword}>
            {showPassword ? <Visibility /> : <VisibilityOff />}
          </IconButton>
        ),
      }}
    />
  );
}
