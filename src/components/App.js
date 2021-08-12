import React, {useState} from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
//import PopupWithForm from './PopupWithForm';
import EditAvatarPopup from './EditAvatarPopup';
import ImagePopup from './ImagePopup';
import EditProfilePopup from './EditProfilePopup';
import AddPlacePopup from './AddPlacePopup';
import DeleteCardPopup from './DeleteCardPoup';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);

  function handleEditAvatarClick(e) {
    e.preventDefault();
    setIsEditProfilePopupOpen(true);
  }

  function handleEditProfileClick(e) {
    e.preventDefault();
    setIsAddPlacePopupOpen(true);
  }

  function handleAddPlaceClick(e) {
    e.preventDefault();
    setIsEditAvatarPopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
  }

  return (
    <div className="page">
      <Header />
      <Main 
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
      />
      <Footer />
      <EditAvatarPopup
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      />
      <EditProfilePopup
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      />
      <AddPlacePopup
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      />
      <ImagePopup />
      <DeleteCardPopup />

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
