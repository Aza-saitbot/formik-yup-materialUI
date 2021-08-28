import React from 'react';
import { Formik, Field, FieldArray } from 'formik';
import './../../App.css';
import * as yup from 'yup';

const re =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const Basic = () => {
  const validationSchema = yup.object().shape({
    name: yup.string().typeError('Должно быть строкой').required('Поле обязательное'),
    secondName: yup.string().typeError('Должно быть строкой').required('Поле обязательное'),
    password: yup.string().typeError('Должно быть строкой').required('Поле обязательное'),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password')], 'Пароли не совпадают')
      .required('Поле обязательное'),
    email: yup.string().matches(re, 'Не корректный Email ').required('Введите email'),
    confirmEmail: yup
      .string()
      .oneOf([yup.ref('email')], 'Email не соппадают')
      .required('Обязательное поле'),
    phoneNumbers: yup.number().required('Поле обязательное'),
  });

  return (
    <div>
      <h1>Anywhere in your app!</h1>
      <Formik
        initialValues={{
          name: '',
          secondName: '',
          password: '',
          confirmPassword: '',
          email: '',
          confirmEmail: '',
          phoneNumbers: ['', ''],
          phNumbers: [''],
        }}
        validateOnBlur
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isValid, dirty }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor={'name'}>Имя</label>
              <Field
                type="text"
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
              />
              {errors.name && touched.name && <div className="error__component">{errors.name}</div>}
            </div>
            <div>
              <label htmlFor={'secondName'}>Фамилия</label>
              <Field
                type="text"
                name="secondName"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.secondName}
              />
              {errors.secondName && touched.secondName && (
                <div className="error__component">{errors.secondName}</div>
              )}
            </div>
            <div>
              <label htmlFor={'password'}>Пароль</label>
              <Field
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              {errors.password && touched.password && (
                <div className="error__component">{errors.password}</div>
              )}
            </div>
            <div>
              <label htmlFor={'confirmPassword'}>Подвердите пароль</label>
              <Field
                type="text"
                name="confirmPassword"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.confirmPassword}
              />
              {errors.confirmPassword && touched.confirmPassword && (
                <div className="error__component">{errors.confirmPassword}</div>
              )}
            </div>
            <div>
              <label htmlFor={'email'}>Email адрес</label>
              <Field
                type="text"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              {errors.email && touched.email && (
                <div className="error__component">{errors.email}</div>
              )}
            </div>
            <div>
              <label htmlFor={'confirmEmail'}>Подвердите Email адрес</label>
              <Field
                type="text"
                name="confirmEmail"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.confirmEmail}
              />
              {errors.confirmEmail && touched.confirmEmail && (
                <div className="error__component">{errors.confirmEmail}</div>
              )}
            </div>
            <div>
              <label htmlFor="onePhone">первый номер</label>
              <Field
                type="text"
                id="onePhone"
                name="phoneNumbers[0]"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.onePhone}
              />
              {/* {errors.phoneNumbers[0] && touched.phoneNumbers[0] && (
                <div className="error__component">{errors.phoneNumbers[0]}</div>
              )} */}
            </div>
            <div>
              <label htmlFor="oneTwo">второй номер</label>
              <Field
                type="text"
                id="oneTwo"
                name="phoneNumbers[1]"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.onePhone}
              />
            </div>
            <div>
              <label>Динамическое получение JSX</label>
              <FieldArray name="phNumbers">
                {(fieldArrayProps) => {
                  console.log('fieldsArrayProps', fieldArrayProps);
                  const { push, remove, form } = fieldArrayProps;
                  const { values } = form;
                  const { phNumbers } = values;
                  return (
                    <div>
                      {phNumbers.map((phNumber, index) => (
                        <div key={index}>
                          <Field name={`phNumbers[${index}]`} />
                          {index > 0 && (
                            <button type="button" onClick={() => remove(index)}>
                              -
                            </button>
                          )}

                          <button type="button" onClick={() => push('')}>
                            +
                          </button>
                        </div>
                      ))}
                    </div>
                  );
                }}
              </FieldArray>
            </div>
            {/* <button type="rest">Отмена</button> */}
            <button type="submit" disabled={!isValid && !dirty} onClick={handleSubmit}>
              Submit
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Basic;

// validate={values => {
//     const errors = {};
//     if (!values.email) {
//         errors.email = 'Required';
//     } else if (
//         !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
//     ) {
//         errors.email = 'Invalid email address';
//     }
//     return errors;
// }}
// onSubmit={(values, { setSubmitting }) => {
//     setTimeout(() => {
//         alert(JSON.stringify(values, null, 2));
//         setSubmitting(false);
//     }, 400);
// }}

/*
isSubmitting,
/!* and other goodies *!/*/
