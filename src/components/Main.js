import React from 'react';

function Main() {
  function handleEditAvatarClick(e) {
    e.preventDefault();
    const popup = document.querySelector('#popup');
    popup.classList.add('popup_is-opened');
  }

  function handleEditProfileClick(e) {
    e.preventDefault();
    const popup = document.querySelector('#popup_profile_photo');
    popup.classList.add('popup_is-opened');
  }

  function handleAddPlaceClick(e) {
    e.preventDefault();
    const popup = document.querySelector('#popup_card');
    popup.classList.add('popup_is-opened');
  }

  return(
    <main className="content page__container">
      <section className="profile">
        <div className="profile__avatar">
          <img className="profile__image" alt="фото пользователя" src=""></img>
          <button className="profile__icon page__buttons" onClick={handleEditAvatarClick}></button>
          <div className="profile__info">
            <div className="profile__change">
              <h1 className="profile__user-name">Жак-Ив Кусто</h1>
              <button className="profile__edit-button page__buttons" type="button" onClick={handleEditProfileClick}></button>
            </div>
            <p className="profile__user-job">Исследователь океана</p>
          </div>
        </div>
        <button className="profile__add-button page__buttons" type="submit" onClick={handleAddPlaceClick}></button>
      </section>
      <section className="elements">
        <ul className="elements__list">
        </ul>
      </section>
    </main>
  )
}

export default Main;