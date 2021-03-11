const popupWriteUs = document.querySelector ('.popup-write-us');
const btnCloseWriteUs = popupWriteUs.querySelector('.btn-write-us-close');
const btnOpenPopupWriteUs = document.querySelector('.btn-contacts');
const writeForm = popupWriteUs.querySelector('.write-form');
const writeUsInputUser = popupWriteUs.querySelector('.write-us-input-user');
const writeUsInputEmail = popupWriteUs.querySelector('.write-us-input-email');

let isStorageSuport = true;
let storageOne = '';
let storageTwo = '';

try {
  storageOne = localStorage.getItem('write-us-user');
  storageTwo = localStorage.getItem('write-us-email');
} catch (err) {
  isStorageSuport = false;
};

btnOpenPopupWriteUs.addEventListener('click', function() {
  popupWriteUs.classList.add('popup-open');
  writeUsInputUser.focus();
})

btnCloseWriteUs.addEventListener('click', function() {
  popupWriteUs.classList.remove('popup-open');
})

writeForm.addEventListener('submit', function (evt) {
  if (!writeUsInputUser.value || !writeUsInputEmail.value) {
    evt.preventDefault();
  } else {
    if (isStorageSuport){
      localStorage.setItem('write-us-user', writeUsInputUser.value);
      localStorage.setItem('write-us-email', writeUsInputEmail.value);
  };
  };
});
