import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Card(props){
  const currentUser = React.useContext(CurrentUserContext);

  const isOwn = props.owner._id === currentUser._id;

  const cardDeleteButtonClassName = (
    `element__delete-button ${isOwn ? 'element__delete-button_visible' : 'element__delete-button_hidden'}`
  ); 

  function handleClick() {
    props.onCardClick(props);
  }

  function handleDeletePlaceClick() {
    props.onDeleteButtonClick(props);
  }

  return(
      <div key={props.id} className="element">
        <img className="element__image" src={props.link} alt={props.name} onClick={handleClick} />
        <div className="element__description">
          <h2 className="element__title">{props.name}</h2>
          <div className="element__like-area">
            <button className="element__like-button page__buttons" type="button"></button>
            <span className="element__like-counter">{props.likes.length}</span>
          </div>
          <button className={`{cardDeleteButtonClassName} page__buttons`} type="reset" onClick={handleDeletePlaceClick}></button>
        </div>
      </div>
  )
}

export default Card;