import React from 'react';
import { TextField } from '@material-ui/core';

import { useController } from 'react-hook-form';

export default function EmailInput({ control, name }) {
  const {
    field: { ref, ...inputProps },
  } = useController({
    name,
    control,
    rules: {
      required: {
        value: true,
        message: 'Email is required',
      },
    },
    defaultValue: '',
  });

  return (
    <TextField
      {...inputProps}
      inputRef={ref}
      variant="outlined"
      label="Email"
      id="email"
      type="email"
    />
  );
}
