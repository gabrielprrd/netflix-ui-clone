import React from 'react';
import { TextField } from '@material-ui/core';

import { useController } from 'react-hook-form';

export default function UsernameInput({ control, name }) {
  const {
    field: { ref, ...inputProps },
  } = useController({
    name,
    control,
    rules: {
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
    },
    defaultValue: '',
  });

  return (
    <TextField
      {...inputProps}
      inputRef={ref}
      variant="outlined"
      label="Fullname"
      id="fullname"
    />
  );
}
