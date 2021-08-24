import React, { useState, useEffect } from 'react';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function EditProfilePopup(props) {
  const [name, setName]  = useState('');
  const [description, setDescription] = useState('');
  const currentUser = React.useContext(CurrentUserContext);

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, props.isOpen]); 

  function handleSubmit(e) {
    e.preventDefault();

    props.onUpdateUser({
      name,
      about: description,
    });
  }

  return(
    <PopupWithForm name="profileForm" title="Редактировать профиль" textOnButton="Сохранить" isOpen={props.isOpen} onClose={props.onClose} onSubmit={handleSubmit}>
      <input id="username" className="input-container__item" defaultValue={name} onChange={handleNameChange} type="text" name="name"  placeholder="Имя" tabIndex="1" minLength="2" maxLength="40" />
      <span className="input-container__input-error" id="username-error"></span>
      <input id="job" className="input-container__item" defaultValue={description} onChange={handleDescriptionChange} type="text" name="about" placeholder="Профессия" tabIndex="2" minLength="2" maxLength="200" />
      <span className="input-container__input-error" id="job-error"></span>
    </PopupWithForm>
  )
}

export default EditProfilePopup;