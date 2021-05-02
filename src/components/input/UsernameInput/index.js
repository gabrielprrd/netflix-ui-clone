import React from 'react';
import { TextField } from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';

import { useController } from 'react-hook-form';

export default function UsernameInput({ control, name }) {
  const userNameRegex = /(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/gi;

  const {
    field: { ref, ...inputProps },
  } = useController({
    name,
    control,
    rules: {
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
    },
    defaultValue: '',
  });

  return (
    <TextField
      {...inputProps}
      inputRef={ref}
      variant="outlined"
      label="Username"
      id="username"
      InputProps={{
        endAdornment: <AccountCircle />,
      }}
    />
  );
}
