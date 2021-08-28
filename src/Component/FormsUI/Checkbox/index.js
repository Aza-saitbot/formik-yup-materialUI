import React from 'react';
import { Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel } from '@material-ui/core';
import { useField, useFormikContext } from 'formik';
const CheckmoxWrpper = ({ name, label, legend, ...otherprops }) => {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(name);

  const handleChange = (e) => {
    const { checked } = e.target;

    setFieldValue(name, checked);
  };

  const configCheckbox = {
    ...field,
    ...otherprops,
    onChange: handleChange,
  };

  const configFormControl = {};

  if (meta && meta.error && meta.touched) {
    configFormControl.error = true;
  }

  return (
    <FormControl {...configFormControl}>
      <FormLabel component="legend">{legend}</FormLabel>
      <FormGroup>
        <FormControlLabel
          control={<Checkbox {...configCheckbox} />}
          label={label}
        ></FormControlLabel>
      </FormGroup>
    </FormControl>
  );
};

export default CheckmoxWrpper;
