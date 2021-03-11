const popupMap = document.querySelector ('.popup-map');
const btnCloseMap = popupMap.querySelector('.btn-map-close');
const btnOpenPopupMap = document.querySelector('.map-open-img');

btnOpenPopupMap.addEventListener('click', function() {
  popupMap.classList.add('popup-open');
})

btnCloseMap.addEventListener('click', function() {
  popupMap.classList.remove('popup-open');
})
