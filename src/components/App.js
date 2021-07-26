import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function App() {
  return (
    <div className="page">
      <Header />
      <Main />
      <Footer />

      <div className="popup" id="popup">
        <div className="popup__content popup__content_theme_input">
          <button className="popup__close page__buttons" type="button"></button>
          <h2 className="popup__title">Редактировать профиль</h2>
          <form className="form" action="#" name="profile-form">
            <fieldset className="input-container">
              <input id="username" className="input-container__item" type="text" name="name"  placeholder="Имя" defaultValue="" tabIndex="1" minLength="2" maxLength="40" required></input>
              <span className="input-container__input-error" id="username-error"></span>
              <input id="job" className="input-container__item" type="text" name="about" placeholder="Профессия" defaultValue="" tabIndex="2" minLength="2" maxLength="200" required></input>
              <span className="input-container__input-error" id="job-error"></span>
              <button type="submit" className="input-container__button">Сохранить</button>
            </fieldset>
          </form>
        </div>
      </div>

      <div className="popup" id="popup_card">
        <div className="popup__content popup__content_theme_input">
          <button className="popup__close page__buttons" type="button"></button>
          <h2 className="popup__title">Новое место</h2>
          <form className="form" action="#" name="card-form">
            <fieldset className="input-container">
              <input id="placename" className="input-container__item" type="text" name="name" placeholder="Название" defaultValue="" tabIndex="1" minLength="2" maxLength="30" required></input>
              <span className="input-container__input-error" id="placename-error"></span>
              <input id="urlcard" type="url" className="input-container__item" name="link" placeholder="Ссылка на картинку" defaultValue="" tabIndex="2" required></input>
              <span className="input-container__input-error" id="urlcard-error"></span>
              <button type="submit" className="input-container__button">Создать</button>
            </fieldset>
          </form>
        </div>
      </div>

      <div className="popup" id="popup_photo">
        <div className="popup__content popup__content_theme_photo">
          <button className="popup__close page__buttons" type="button"></button>
          <figure className="popup__figure">
            <img className="popup__image" src="#" alt="Изображение указанного района"></img>
            <figcaption className="popup__text"></figcaption>
          </figure>
        </div>
      </div>

      <div className="popup" id="popup_profile_photo">
        <div className="popup__content popup__content_theme_input">
          <button className="popup__close page__buttons" type="button"></button>
          <h2 className="popup__title">Обновить аватар</h2>
          <form className="form" action="#" name="userPhotoform">
            <fieldset className="input-container">
              <input id="url" type="url" className="input-container__item" name="avatar" placeholder="Ссылка на фото" defaultValue="" tabIndex="1" required></input>
              <span className="input-container__input-error" id="url-error"></span>
              <button type="submit" className="input-container__button">Сохранить</button>
            </fieldset>
          </form>
        </div>
      </div>

      <div className="popup" id="popup_delete">
        <div className="popup__content popup__content_theme_delete">
          <button className="popup__close page__buttons" type="button"></button>
          <h2 className="popup__title popup__title_theme_delete">Вы уверены?</h2>
          <fieldset className="input-container">
            <button type="submit" className="input-container__button input-container__button_type_delete">Да</button>
          </fieldset>
        </div>
      </div>

      <template id="card-template">
        <li className="element">
          <img className="element__image" src="#" alt="Изображение указанного района"></img>
          <div className="element__description">
            <h2 className="element__title"></h2>
            <div className="element__like-area">
              <button className="element__like-button page__buttons" type="button"></button>
              <span className="element__like-counter"></span>
            </div>
            <button className="element__delete-button page__buttons" type="reset"></button>
          </div>
        </li>
      </template>

    </div>
  );
}

export default App;
