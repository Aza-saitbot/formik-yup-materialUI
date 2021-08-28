import React from 'react';
import { Button } from '@material-ui/core';
import {useFormikContext} from "formik";

const ButtonWrapper = ({ children, ...otherprops }) => {
  const {submitForm} = useFormikContext();
  const handleSubmit = () => submitForm()

  const configButton = {
    ...otherprops,
    fullWidth: true,
    onClick:handleSubmit
  };

  return <Button {...configButton}>{children}</Button>;
};

export default ButtonWrapper;
