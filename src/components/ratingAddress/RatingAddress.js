import React, { useEffect, useState } from 'react';
import './RatingAddress.css';
import { Dropdown } from 'react-bootstrap';
import { GetRatingApi } from '../../api/getRatingAPI';
import { useInput } from '../../hooks/useInput';

export const RatingAddress = ({selectRating,setSelectRating}) => {
    const [ratings, setRatings] = useState('');
  const address = useInput('', { isEmpty: true });

  useEffect(async () => {
    const data = await GetRatingApi();
    setRatings(data);
  }, []);

  return (
    <div className="ratingAddress">
      <div className="ratingAddress__rating">
        <h2>Рейтинг мероприятия</h2>
        <Dropdown className="ratingSelect">
          <Dropdown.Toggle
            style={{
              backgroundColor: 'white',
              color: '#211536',
              border: '#cdb1fb',
            }}
            name="rating"
            className="ratingSelect__toggle"
          >
            <p>{selectRating || 'Выберите рейтинг'}</p>
          </Dropdown.Toggle>
          <Dropdown.Menu className="ratingSelect__menu">
            {ratings &&
              ratings.map((rating) => (
                <Dropdown.Item
                  className="ratingSelect__item"
                  onClick={() => setSelectRating(rating.title)}
                  key={rating.id}
                >
                  {rating.title}
                </Dropdown.Item>
              ))}
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div className="ratingAddress__address">
        <h2>Адрес мероприятия</h2>
        <input
          onChange={(e) => address.onChange(e)}
          onBlur={(e) => address.onBlur(e)}
          value={address.value}
          type="text"
          name="address"
        />
        {address.isDirty && address.isEmpty && (
          <div className="error__component">Заполните поле адреса</div>
        )}
      </div>
    </div>
  );
};
