import React from 'react';
import { TextField } from '@material-ui/core';
import { useField, useFormikContext } from 'formik';

const ValidationPhone = ({ name, ...otherProps }) => {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(name);

  const getInputNumberValue = function (input) {
    return input.value.replace(/\D/g, '');
  };

  const onPhoneInput = (e) => {
    /*// validationPhone.onChange(e);*/

    let input = e.target;

    let inputNumberValue = getInputNumberValue(input);
    let formattedInputValue = '';

    /*Если цифровых символов не введено, то сразу выходим*/
    if (!inputNumberValue) {
      return (input.value = '');
    }
    /* если хоть один символ введен в инпуте, если если ввели 9,
      то добавляем сначало добавляем 7, в след строке добавляем +, если ввели 8, то отсавляем 8
     в конце строки уст-ем финальный отформатированный номер formattedInputValue,к-й отобразим для пол-ля/ input=value

    добавления скобок
    если в инпуте больше 1-го символа, то добавляем открывающий скобку и вырезаем formattedInputValue с 1 по макс 3 символа
    если больше 5 символов, то добавляем ")" и вырезаем от 4 до 7 символов
    если больше 8, то поставить 1-ый дефис, если больше 10 то поставить 2-й дефис

    */
    if (['7', '8', '9'].indexOf(inputNumberValue[0]) > -1) {
      if (inputNumberValue[0] == '9') inputNumberValue = '7' + inputNumberValue;
      let firstSymbols = inputNumberValue[0] == '8' ? '8' : '+7';
      formattedInputValue = firstSymbols + ' ';
      if (inputNumberValue.length > 1) {
        formattedInputValue += '(' + inputNumberValue.substring(1, 4);
      }
      if (inputNumberValue.length >= 5) {
        formattedInputValue += ') ' + inputNumberValue.substring(4, 7);
      }
      if (inputNumberValue.length >= 8) {
        formattedInputValue += '-' + inputNumberValue.substring(7, 9);
      }
      if (inputNumberValue.length >= 10) {
        formattedInputValue += '-' + inputNumberValue.substring(9, 11);
      }
    } else {
      let noRuNumber = (formattedInputValue = '+' + inputNumberValue);
      setFieldValue(name, noRuNumber);
      /*Не российские номера*/
    }
    let finishNumberValue = (input.value = formattedInputValue);

    setFieldValue(name, finishNumberValue);
  };

  const configTextfield = {
    ...field,
    ...otherProps,
    type: 'tel',
    fullWidth: true,
    variant: 'outlined',
    onChange: (e) => onPhoneInput(e),
    maxLength: '20',
    placeholder: '+7 (999) 555-45-33',
  };

  if (meta && meta.touched && meta.error) {
    configTextfield.error = true;
    configTextfield.helperText = meta.error;
  }

  return <TextField {...configTextfield} />;
};
export default ValidationPhone;
