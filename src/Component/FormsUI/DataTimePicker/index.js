import React from 'react';
import { TextField } from '@material-ui/core';
import { useField, useFormikContext } from 'formik';

const DateTimePicker = ({ name, type, ...otherprops }) => {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(name);

  const handleChange = (e) => {
    const { value } = e.target;
    setFieldValue(name, value);
  };

  const configDateTimePicker = {
    ...field,
    ...otherprops,
    type: `${type}`,
    variant: 'outlined',
    fullWidth: true,
    onChange: handleChange,
    InputLabelProps: {
      shrink: true,
    },
  };

  if (meta && meta.touched && meta.error) {
    configDateTimePicker.error = true;
    configDateTimePicker.helperText = meta.error;
  }

  return <TextField {...configDateTimePicker} />;
};

export default DateTimePicker;
