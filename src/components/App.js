import React, { useState, useEffect } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import EditAvatarPopup from './EditAvatarPopup';
import ImagePopup from './ImagePopup';
import EditProfilePopup from './EditProfilePopup';
import AddPlacePopup from './AddPlacePopup';
import DeleteCardPopup from './DeleteCardPoup';
import { api } from '../utils/api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isDeletePlacePopupOpen, setIsDeletePlacePopupOpen] = useState(false);
  const [selectCard, setSelectCard] = useState({});
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);

  useEffect(() => {
    Promise.all([
      api.getUserInfo(),
      api.getInitialCards(),
    ])
    .then(([userData, cardsData]) => {
      setCurrentUser(userData);
      setCards(cardsData);
    })
    .catch((error) => {
      console.log(error);
    })
  }, [])

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    const changeLikeCardStatus = isLiked? api.removeLike(card._id) : api.setlike(card._id);
    
    changeLikeCardStatus.then((newCard) => {
      setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    });
  }

  function handleCardClick(card) {
    setSelectCard({ name: card.name, link: card.link })
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleDeletePlaceClick() {
    setIsDeletePlacePopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsDeletePlacePopupOpen(false);
    setSelectCard({});
  }

  function handleUpdateUser(data) {
    api.setUserInfo(data)
      .then((userData) => {
        setCurrentUser(userData);
        closeAllPopups();
      })
  }

  function handleUpdateAvatar(data) {
    api.setUserAvatar(data)
      .then((userData) => {
        setCurrentUser(userData);
        closeAllPopups();
      })
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header />
        <Main 
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onCardClick={handleCardClick}
          onCardLike={handleCardLike}
          onDeleteButtonClick={handleDeletePlaceClick}
          cards={cards}
        />
        <Footer />
        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
        />
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />
        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
        />
        <ImagePopup
          card={selectCard}
          onClose={closeAllPopups}
        />
        <DeleteCardPopup
          isOpen={isDeletePlacePopupOpen}
          onClose={closeAllPopups}
        />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;