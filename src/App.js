import React, {useState} from 'react';
import './App.css';
import { useInput } from './hooks/useInput';
import { UploadedPhoto } from './components/uploadedPhoto/UploadedPhoto';
import { RatingAddress } from './components/ratingAddress/RatingAddress';
import { DateTime } from './components/dateTime/DateTime';
import {ValidationPhone} from "./components/validationPhone/ValidationPhone";
import Basik from "./components/validationPhone/Basik";



const App = () => {
  const email = useInput('', { isEmpty: true, minLength: 3, isEmail: true });
  const organizer = useInput('', { isEmpty: true });
  const city = useInput('', { isEmpty: true });
  const generalInformation = useInput('', { isEmpty: true });
  const detailedDescription = useInput('', { isEmpty: true });
  const [stateValuePhone, setStateValuePhone] = useState('')
    const [uploadedFiles, setUploadedFiles] = useState('');
    const [startDate, setStartDate] = useState(new Date());
    const [startTime, setStartTime] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [endTime, setEndTime] = useState(new Date());
    const [selectRating, setSelectRating] = useState('');

   /* const formData = new FormData();
    formData.append('organizer', organizer.value);
    formData.append('phone', stateValuePhone);
    formData.append('email', email.value);
    formData.append('city', city.value);
    formData.append('generalInformation', generalInformation.value);
    formData.append('file', uploadedFiles);
    formData.append('detailedDescription', detailedDescription.value);
    formData.append('startDate', startDate);
    formData.append('startTime', startTime);
    formData.append('sendDate', endDate);
    formData.append('endTime', endTime);
    formData.append('selectRating', selectRating);*/



  return (
    <form className="app-wrapper">
      <div className="organizerName">
        <div className="organizerName__title">
          <h2>Информация об организаторе</h2>
        </div>
        <div className="organizerName__input">
          <h3>Организатор</h3>
          <input
            onChange={(e) => organizer.onChange(e)}
            onBlur={(e) => organizer.onBlur(e)}
            value={organizer.value}
            type="text"
            name="organizer"
            placeholder="Coca-Cola"
          />
          {organizer.isDirty && organizer.isEmpty && (
            <div className="error__component">Поле не может быть пустым</div>
          )}
        </div>
<Basik/>
      </div>
      <div>
        <div className="contactDetails">
          <h2>Конатактные данные</h2>
          <div className="contactDetails__inputs">
            <ValidationPhone
                setStateValuePhone={setStateValuePhone}
                stateValuePhone={stateValuePhone} />
            <div>
              <h3>Email</h3>
              <input
                onChange={(e) => email.onChange(e)}
                onBlur={(e) => email.onBlur(e)}
                value={email.value}
                type="text"
                name="email"
                placeholder="ivanov@email.ru"
              />
              {email.isDirty && email.isEmpty && (
                <div className="error__component">Поле не может быть пустым</div>
              )}
              {email.isDirty && email.minLengthError && (
                <div className="error__component">Не корректная длина</div>
              )}
              {email.isDirty && email.emailError && (
                <div className="error__component">Не корректный email</div>
              )}
            </div>
            <div>
              <h3>Город</h3>
              <input
                onChange={(e) => city.onChange(e)}
                onBlur={(e) => city.onBlur(e)}
                value={city.value}
                type="text"
                name="city"
                placeholder="Казань"
              />
              {city.isDirty && city.isEmpty && (
                <div className="error__component">Обязательная поля ввода</div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="generalInformation">
        <div>
          <div className="generalInformation__title">
            <h2>Общая информация</h2>
          </div>
          <div className="generalInformation__input">
            <h3>Название</h3>
            <input
              onChange={(e) => generalInformation.onChange(e)}
              onBlur={(e) => generalInformation.onBlur(e)}
              value={generalInformation.value}
              type="text"
              name="generalInformation"
            />
            {generalInformation.isDirty && generalInformation.isEmpty && (
              <div className="error__component">Обязательная поля ввода</div>
            )}
          </div>
        </div>
        <UploadedPhoto
            uploadedFiles={uploadedFiles}
            setUploadedFiles={setUploadedFiles}
        />
        <div className="detailedDescription">
          <h3>Подробное описание</h3>
          <textarea
            onChange={(e) => detailedDescription.onChange(e)}
            onBlur={(e) => detailedDescription.onBlur(e)}
            value={detailedDescription.value}
            name="detailedDescription"
          />
          {detailedDescription.isDirty && detailedDescription.isEmpty && (
            <div className="error__component">Поле не может быть пустым</div>
          )}
        </div>
        <DateTime
            startDate={startDate}
            setStartDate={setStartDate}
            startTime={startTime}
            setStartTime={setStartTime}
            endDate={endDate}
            setEndDate={setEndDate}
            endTime={endTime}
            setEndTime={setEndTime}

        />
        <RatingAddress
            selectRating={selectRating}
            setSelectRating={setSelectRating}
        />
        <div className="buttonCancelNext">
          <button className="buttonCancel">Отмена</button>
          <button className="buttonNext" type="submit" >Далее</button>
        </div>
      </div>
    </form>
  );
};

export default App;
