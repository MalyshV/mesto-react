import React from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup(props) {
  return(
    <PopupWithForm name="cardForm" title="Новое место" isOpen={props.isOpen} onClose={props.onClose}>
      <input id="placename" className="input-container__item" type="text" name="name" placeholder="Название" defaultValue="" tabIndex="1" minLength="2" maxLength="30" required></input>
      <span className="input-container__input-error" id="placename-error"></span>
      <input id="urlcard" type="url" className="input-container__item" name="link" placeholder="Ссылка на картинку" defaultValue="" tabIndex="2" required></input>
      <span className="input-container__input-error" id="urlcard-error"></span>
    </PopupWithForm>
  )
}

export default AddPlacePopup;