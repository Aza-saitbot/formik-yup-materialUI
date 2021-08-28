import React from 'react';
import { CameraOutlined } from '@ant-design/icons';
import './UploadedPhoto.css';

export const UploadedPhoto = ({uploadedFiles,setUploadedFiles}) => {


  const onChangePhoto = (e) => {
    if (e.target.files && e.target.files.length) {
      let photo = e.target.files[0];
      let idPhoto = 'id' + Math.random().toString().slice(2);
      const instance = { id: idPhoto, image: photo };
      console.log(idPhoto);

      return setUploadedFiles([...uploadedFiles, instance]);
    }
  };

  const removeUploadedPhotos = (id) => {
    setUploadedFiles(uploadedFiles.filter((item) => item.id !== id));
  };

  return (
    <div className="photos">
      <h3>Фотография</h3>
      <div className="photos_items">
        <div className="photos_itemComment">
          <label htmlFor="file" className="photos__item">
            <CameraOutlined className="photos__item__icon" />
            <p>+</p>
            <input
              style={{ opacity: '0.0' }}
              type="file"
              id="file"
              name="file"
              onChange={(e) => onChangePhoto(e)}
            />
          </label>
          <div className="photos_comment">Главная фотография (обложка мероприятия)</div>
        </div>

        {uploadedFiles &&
          uploadedFiles.map((file) => {
            return (
              <div className="photo__add__wrapper">
                <p className="photo__add__close" onClick={() => removeUploadedPhotos(file.id)}>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.16663 1.16666L12.6571 12.6571M12.9857 1.16666L1.4952 12.6571"
                      stroke="white"
                      stroke-width="2"
                    />
                  </svg>
                </p>
                <div className="photo__add" key={file.id}>
                  <img src={URL.createObjectURL(file.image)} />
                </div>
                <div className="photo__add__comment">Главная фотография (обложка мероприятия)</div>
              </div>
            );
          })}
      </div>
    </div>
  );
};
