import React from 'react';
import PopupWithForm from './PopupWithForm';

function DeleteCardPopup(props){
  return(
    <PopupWithForm name="cardDeleteForm" title="Вы уверены?" isOpen={props.isOpen} onClose={props.onClose} textOnButton="Да">
    </PopupWithForm>
  )
}

export default DeleteCardPopup;