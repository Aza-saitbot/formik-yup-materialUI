import React from 'react';
import './App.css';
import { Grid, Typography, Container } from '@material-ui/core';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Textfield from './Component/FormsUI/Textfield';
import ValidationPhone from './Component/FormsUI/ValidationPhone';
import Select from './Component/FormsUI/Select';
import countries from './data/countries.json';
import { makeStyles } from '@material-ui/core/styles';
import DateTimePicker from './Component/FormsUI/DataTimePicker';
import DateTimeContainer from './Component/FormsUI/DateTimeContainer';
import Checkbox from './Component/FormsUI/Checkbox';
import Button from './Component/FormsUI/Button';
import ButtonAddDataTime from './Component/FormsUI/ButtonAddDataTime';

const INITIAL_FORM_STATE = {
  organizer: '',
  lastName: '',
  email: '',
  phone: '',
  addressLine1: '',
  addressLine2: '',
  city: '',
  state: '',
  country: '',
  message: '',
  termOfService: false,
  bookingTime: [''],
  arrivalDate: [''],
  arrivalTime: [''],
  departureDate: [''],
  departureTime: [''],
};

const FORM_VALIDATION = Yup.object().shape({
  organizer: Yup.string().required('Обязательное поле'),
  phone: Yup.string().required('Обязательное поле'),
  email: Yup.string().email('Не корректный Email').required('Введите эл. адрес'),
  city: Yup.string().required('Поле обязательное'),
  addressLine1: Yup.string().required('Поле обязательное'),
  addressLine2: Yup.string().required('Поле обязательное'),

  state: Yup.string().required('Поле обязательное'),
  country: Yup.string().required('Поле обязательное'),
  message: Yup.string().min(4, 'минимум 4 символа'),
  termOfService: Yup.boolean().oneOf([true], 'Примите условию?').required('Обязательное поле'),
  arrivalDate: Yup.array().of(Yup.string().required('Выберите дату приезда')),
  arrivalTime: Yup.array().of(Yup.string().required('Выберите время приезда')),
  departureDate: Yup.array().of(Yup.string().required('Выберите дату отъезда')),
  departureTime: Yup.array().of(Yup.string().required('Выберите время отезда')),
});

const useStyles = makeStyles((theme) => ({
  formWrapper: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(8),
  },
}));

const AppContainer = () => {
  const classes = useStyles();

  return (
    <div>
      <Grid container>
        <Container maxWidth="md">
          <Formik
            initialValues={{
              ...INITIAL_FORM_STATE,
            }}
            validationSchema={FORM_VALIDATION}
            onSubmit={(values) => console.log(values)}
          >
            <Form>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography>Информация об организаторе</Typography>
                </Grid>

                <Grid item xs={12}>
                  <label>Организатор</label>
                  <Textfield name="organizer" />
                </Grid>

                <Grid item xs={12}>
                  <Typography>Контактные данные</Typography>
                </Grid>

                <Grid item xs={4}>
                  <label>Телефон</label>
                  <ValidationPhone name="phone" />
                </Grid>
                <Grid item xs={4}>
                  <label>E-mail</label>
                  <Textfield name="email" label="Email" />
                </Grid>
                <Grid item xs={4}>
                  <label>Городо организатора</label>
                  <Textfield name="city" label="City" />
                </Grid>

                <Grid item xs={12}>
                  <Typography>Adress</Typography>
                </Grid>

                <Grid item xs={12}>
                  <Textfield name="addressLine1" label="Adress Line 1" />
                </Grid>
                <Grid item xs={12}>
                  <Textfield name="addressLine2" label="Adress Line 2" />
                </Grid>

                <Grid item xs={6}>
                  <Textfield name="state" label="State" />
                </Grid>
                <Grid item xs={12}>
                  <Select name="country" label="Country" options={countries} />
                </Grid>

                <Grid item xs={12}>
                  <Typography>Booking information</Typography>
                </Grid>
                <Grid item xs={12}>
                  <DateTimeContainer label="Добавление даты и время" />
                </Grid>

                {/*<Grid container spacing={2}>
                                        <Grid item xs={6}>
                                            <DateTimePicker name="arrivealDate" label="Дата приезда"/>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <DateTimePicker name="departureDate" label="Дата отъезда"/>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <DateTimeContainer name="dateTimePicker" label="Добавление даты и время"/>
                                        </Grid>
                                        <Grid item xs={3}>
                                            <ButtonAddDataTime onAddDataTime={onAddDataTime} color="primary" variant="contained">
                                                Добавить
                                            </ButtonAddDataTime>
                                        </Grid>
                                    </Grid>*/}

                <Grid item xs={12}>
                  <Textfield name="message" label="Подробное описание" multiline={true} rows={4} />
                </Grid>
                <Grid item xs={12}>
                  <Checkbox name="termOfService" legend="Условия обслуживания" label="Я согласен" />
                </Grid>

                <Grid item xs={6}>
                  <Button variant="outlined" color="secondary" type="reset">
                    Отмена
                  </Button>
                </Grid>
                <Grid item xs={6}>
                  <Button color="primary" variant="contained">
                    Далее
                  </Button>
                </Grid>
              </Grid>
            </Form>
          </Formik>
        </Container>
      </Grid>
    </div>
  );
};

export default AppContainer;
