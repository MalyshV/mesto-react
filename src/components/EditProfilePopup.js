import React from 'react';
import PopupWithForm from './PopupWithForm';

function EditProfilePopup(props) {
  return(
    <PopupWithForm name="profile-form" title="Редактировать профиль" isOpen={props.isOpen} onClose={props.onClose}>
      <input id="username" className="input-container__item" type="text" name="name"  placeholder="Имя" defaultValue="" tabIndex="1" minLength="2" maxLength="40" required></input>
      <span className="input-container__input-error" id="username-error"></span>
      <input id="job" className="input-container__item" type="text" name="about" placeholder="Профессия" defaultValue="" tabIndex="2" minLength="2" maxLength="200" required></input>
      <span className="input-container__input-error" id="job-error"></span>
    </PopupWithForm>
  )
}

export default EditProfilePopup;