import React, { useState } from 'react';
import { api } from '../utils/Api';

console.log(api);

function Main(props) {

  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setuserAvatar] = useState('');

  React.useEffect(() => {
    Promise.all([
      api.getUserInfo(),
      api.getInitialCards(),
    ])
    .then(([userData, cardsData]) => {
      setUserName(userData.name);
      setUserDescription(userData.about);
      setuserAvatar(userData.avatar);

      console.log(cardsData)

      //section.renderInitialCards(cardsData);
    })
    .catch((error) => {
      console.log(error);
    })
  }, [])

  return(
    <main className="content page__container">
      <section className="profile">
        <div className="profile__avatar">
          <img className="profile__image" alt="фото пользователя" src={userAvatar}></img>
          <button className="profile__icon page__buttons" onClick={props.onEditAvatar}></button>
          <div className="profile__info">
            <div className="profile__change">
              <h1 className="profile__user-name">{userName}</h1>
              <button className="profile__edit-button page__buttons" type="button" onClick={props.onEditProfile}></button>
            </div>
            <p className="profile__user-job">{userDescription}</p>
          </div>
        </div>
        <button className="profile__add-button page__buttons" type="submit" onClick={props.onAddPlace}></button>
      </section>
      <section className="elements">
        <ul className="elements__list">
        </ul>
      </section>
    </main>
  )
}

export default Main;