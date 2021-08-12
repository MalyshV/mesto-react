import React from 'react';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup(props){
  return(
    <PopupWithForm name="userPhotoform" title="Обновить аватар" isOpen={props.isOpen} onClose={props.onClose}>
      <input id="url" type="url" className="input-container__item" name="avatar" placeholder="Ссылка на фото" defaultValue="" tabIndex="1" required></input>
      <span className="input-container__input-error" id="url-error"></span>
    </PopupWithForm>
  )
}

export default EditAvatarPopup;