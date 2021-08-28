import React from 'react';
import { Button } from '@material-ui/core';


const ButtonAddDataTime = ({ children,onAddRemove, ...otherprops }) => {


  const configButton = {
    ...otherprops,
    fullWidth: true,
    onClick:onAddRemove
  };

  return <Button {...configButton}>{children}</Button>;
};

export default ButtonAddDataTime;
