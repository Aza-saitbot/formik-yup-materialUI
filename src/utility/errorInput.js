import { useEffect, useState } from 'react';

export const ErrorInput = ({ errors }) => {
  const [isEmpty, setIsEmpty] = useState('');

  useEffect(() => {
    for (const error in errors) {
      switch (error) {
        case 'isEmpty':
          console.log(errors['emailError']);
          if (errors['emailError']) {
            setIsEmpty('Поле не может быть пустым');
          }
          break;
      }
    }
  }, [errors['emailError']]);

  return <div style={{ color: 'red' }}>{isEmpty}</div>;

  //   for (const error in errors) {
  //     switch (error) {
  //       case 'isEmpty':
  //         if (errors['isEmpty']) {
  //           console.log('sdsd');
  //           // return <div style={{ color: 'red' }}>Поле не может быть пустым</div>;
  //         }

  //       //   case 'emailError':
  //       //     if (propsErrors['emailError']) {
  //       //       return <div style={{ color: 'red' }}>Не корректный email</div>;
  //       //     }
  //       //     break;
  //     }
  //   }
};

//   case 'maxLengthError':
//     if (propsErrors['maxLengthError']) {
//       return <div style={{ color: 'red' }}>Лимит введеных символов превышен</div>;
//     }

//   case 'minLengthError':
//     if (propsErrors['minLengthError']) {
//       return <div style={{ color: 'red' }}>Некорректная длина</div>;
//     }

//   case 'emailError':
//     if (propsErrors['emailError']) {
//       return <div style={{ color: 'red' }}>Не корректный email</div>;
//     }

//   default:
//     return <div style={{ color: 'red' }}>Не заполненное поле</div>;
// }
