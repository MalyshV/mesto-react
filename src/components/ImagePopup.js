import React from 'react';

// Здесь всё просто, этот компонент пока не имеет пропсов и вложенного содержимого ??? 

function ImagePopup(props) {
  return(
    <div className="popup" id="popup_photo" onClose={props.onClose}>
      <div className="popup__content popup__content_theme_photo">
        <button className="popup__close page__buttons" type="button" onClick={props.onClose}></button>
        <figure className="popup__figure">
          <img className="popup__image" src="#" alt="Изображение указанного района"></img>
          <figcaption className="popup__text"></figcaption>
        </figure>
      </div>
    </div>
  )
}

export default ImagePopup;
