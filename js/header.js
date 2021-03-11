const inputPoisk = document.querySelector('.input-poisk');
const btnPoisk = document.querySelector('.btn-poisk');
const subLinks = document.querySelectorAll('.sub-menu-link');
const subMenu = document.querySelector('.catalog-sub-menu');
const catalogLink = document.querySelector('.catalog-link');


inputPoisk.addEventListener('blur', function() {
  if (inputPoisk.value) {
    btnPoisk.classList.add('btn-poisk-open');
  } else {
    btnPoisk.classList.remove('btn-poisk-open');
  }
});

catalogLink.addEventListener('focus', function() {
  subMenu.classList.add('open-sub-menu');
});

for (var i = 0; i < subLinks.length; i++) {
  if ( i !== subLinks.length-1) {
  subLinks[i].addEventListener('focus', function () {
    subMenu.classList.add('open-sub-menu');
  });
  } else { subLinks[i].addEventListener('blur', function() {
    subMenu.classList.remove('open-sub-menu');
    });
    };
};

document.addEventListener('click', function() {
    subMenu.classList.remove('open-sub-menu');
  });
