import React from 'react';

function Main() {
  return(
    <main className="content page__container">
      <section className="profile">
        <div className="profile__avatar">
          <img className="profile__image" alt="фото пользователя" src=""></img>
          <div className="profile__icon"></div>
          <div className="profile__info">
            <div className="profile__change">
              <h1 className="profile__user-name">Жак-Ив Кусто</h1>
              <button className="profile__edit-button page__buttons" type="button"></button>
            </div>
            <p className="profile__user-job">Исследователь океана</p>
          </div>
        </div>
        <button className="profile__add-button page__buttons" type="submit"></button>
      </section>
      <section className="elements">
        <ul className="elements__list">
        </ul>
      </section>
    </main>
  )
}

export default Main;