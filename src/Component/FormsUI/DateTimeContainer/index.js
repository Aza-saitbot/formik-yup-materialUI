import React from 'react';
import { Grid, Button, TextField } from '@material-ui/core';
import { useField, FieldArray, Field } from 'formik';
import ButtonAddDataTime from '../ButtonAddDataTime';
import DateTimePicker from '../DataTimePicker';

const DateTimeContainer = ({ name, label, ...otherprops }) => {
  /* const [field, meta] = useField(name);*/

  /* const configDateTimePicker = {
        ...field,
        ...otherprops,
        type: 'date',
        variant: 'outlined',
        fullWidth: true,
        InputLabelProps: {
            shrink: true,
        },
    };*/
  /*if (meta && meta.touched && meta.error) {
        configDateTimePicker.error = true;
        configDateTimePicker.helperText = meta.error;
    }*/

  return (
    <Grid>
      <label>{label}</label>
      <FieldArray
        name="bookingTime"
        render={(fieldArrayProps) => {
          console.log('fieldArrayProps', fieldArrayProps);
          const { push, remove, form } = fieldArrayProps;
          const { values } = form;
          const { bookingTime } = values;


          return (
            <Grid>
              {bookingTime.map((item, index) => (
                <Grid container spacing={2} key={index}>
                  <Grid item xs={3}>
                    <DateTimePicker
                      format="dd/MM/yyyy"
                      type="date"
                      name={`arrivalDate[${index}]`}
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <DateTimePicker
                      type="time"
                      name={`arrivalTime[${index}]`}
                      // className={classes.textField}

                      inputProps={{
                        step: 300, // 5 min
                      }}
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <DateTimePicker
                      format="dd/MM/yyyy"
                      type="date"
                      name={`departureDate[${index}]`}
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <DateTimePicker
                      type="time"
                      name={`departureTime[${index}]`}
                      // className={classes.textField}
                      inputProps={{
                        step: 300, // 5 min
                      }}
                    />
                  </Grid>

                  {index > 0 && (
                    <Grid container spacing={2}>
                      <Grid item xs={3}>
                        <ButtonAddDataTime
                          onAddRemove={() => {
                            remove(index);
                          }}
                          color="primary"
                          variant="contained"
                        >
                          Удалить
                        </ButtonAddDataTime>
                      </Grid>
                    </Grid>
                  )}
                </Grid>
              ))}

              <Grid container spacing={2}>
                <Grid item xs={3}>
                  <ButtonAddDataTime
                    onAddRemove={() => push('')}
                    color="primary"
                    variant="contained"
                  >
                    Добавить
                  </ButtonAddDataTime>
                </Grid>
              </Grid>
            </Grid>
          );
        }}
      />
    </Grid>
  );
};

export default DateTimeContainer;

{
  /* <Grid>
<label>{label}</label>
<FieldArray
  name={name}
  render={(fieldArrayProps) => {
    console.log('fieldArrayProps', fieldArrayProps);
    const { push, remove, form } = fieldArrayProps;
    const { values } = form;
    const { dateTimePicker } = values;
    return (
      <Grid>
        {dateTimePicker.map((item, index) => (
          <Grid container spacing={2} key={index}>
            <Grid item xs={3}>
              <DateTimePicker type="date" name={`bookingTime${index}.arrivalDate`} />
            </Grid>
            {console.log(item, index)}

            <Grid item xs={3}>
              <DateTimePicker
                type="time"
                name={`bookingTime${index}.arrivalTime`}
                // className={classes.textField}

                inputProps={{
                  step: 300, // 5 min
                }}
              />
            </Grid>
            <Grid item xs={3}>
              <DateTimePicker type="date" name={`bookingTime${index}.departureDate`} />
            </Grid>
            <Grid item xs={3}>
              <DateTimePicker
                type="time"
                name={`bookingTime${index}.departureTime`}
                // className={classes.textField}
                inputProps={{
                  step: 300, // 5 min
                }}
              />
            </Grid>

            {index > 0 && (
              <Grid container spacing={2}>
                <Grid item xs={3}>
                  <ButtonAddDataTime
                    onAddRemove={() => remove(index)}
                    color="primary"
                    variant="contained"
                  >
                    Удалить
                  </ButtonAddDataTime>
                </Grid>
              </Grid>
            )}
          </Grid>
        ))}

        <Grid container spacing={2}>
          <Grid item xs={3}>
            <ButtonAddDataTime
              onAddRemove={() => push('')}
              color="primary"
              variant="contained"
            >
              Добавить
            </ButtonAddDataTime>
          </Grid>
        </Grid>
      </Grid>
    );
  }}
/>
</Grid>
 */
}
