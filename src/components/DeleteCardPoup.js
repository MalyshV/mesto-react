import React from 'react';
import PopupWithForm from './PopupWithForm';

function DeleteCardPopup(){
  return(
    <PopupWithForm name="cardDeleteform" title="Вы уверены?">
      <button type="submit" className="input-container__button input-container__button_type_delete">Да</button>
    </PopupWithForm>
  )
}

// переделать текст для кнопки. Надо вынести в props все тексты

export default DeleteCardPopup;