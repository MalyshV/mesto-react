import React from 'react';
import PopupWithForm from './PopupWithForm';

function DeleteCardPopup(props){
  return(
    <PopupWithForm name="cardDeleteForm" title="Вы уверены?" isOpen={props.isOpen} onClose={props.onClose}>
      <button type="submit" className="input-container__button input-container__button_type_delete" onClick={props.onClose}>Да</button>
    </PopupWithForm>
  )
}

// переделать текст для кнопки. Надо вынести в props все тексты. Сейчас задвоение кнопки 

export default DeleteCardPopup;