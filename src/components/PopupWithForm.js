import React from 'react';

function PopupWithForm(props) {
  return (
    <div className={`popup popup_type_${props.name} ${props.isOpen ? "popup_is-opened" : ""}`}>
    <div className="popup__content popup__content_theme_input">
      <button className="popup__close page__buttons" type="button" onClick={props.onClose}></button>
      <h2 className="popup__title">{props.title}</h2>
      <form className="form" action="#" name={props.name}>
        <fieldset className="input-container">
          {props.children}
          <button type="submit" className="input-container__button">Сохранить</button>
        </fieldset>
      </form>
    </div>
  </div>
  )
}

// children - вложенное содержимое в виде JSX-разметки, отличающейся для всех четырёх попапов. Внутри самого компонента оно будет доступно через специальный пропс children, который также должен быть подставлен в нужном месте в JSX.

// children - это инпуты, получается.. Вынесла код, который ниже:

/*<input id="username" className="input-container__item" type="text" name="name" placeholder="Имя" defaultValue="" tabIndex="1" minLength="2" maxLength="40" required></input>
          <span className="input-container__input-error" id="username-error"></span>
          <input id="job" className="input-container__item" type="text" name="about" placeholder="Профессия" defaultValue="" tabIndex="2" minLength="2" maxLength="200" required></input>
          <span className="input-container__input-error" id="job-error"></span>
*/

// скорее всего понадобится в класс кнопки добавить класс вроде button_${props.name}, чтобы убрать двойную кнопку в попапе  удаления карточки

export default PopupWithForm;