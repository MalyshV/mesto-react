import React from 'react';

function Card(props){
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
          <button className="element__delete-button page__buttons" type="reset" onClick={handleDeletePlaceClick}></button>
        </div>
      </div>
  )
}

export default Card;