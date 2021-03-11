const slides = document.querySelectorAll('.slide');
const btnSlides = document.querySelectorAll('.btn-slide');
const advantages = document.querySelectorAll('.advantages-list-item');
const btnAdvantages = document.querySelectorAll('.btn-advantages');

const resetActiveSlides = () => {
  slides.forEach((item) => {
    item.classList.remove('current-slide')
  })
  btnSlides.forEach((item) => {
    item.classList.remove('current-btn-promo')
  })
}

btnSlides.forEach((item, i) => {
  item.addEventListener('click', () => {
    resetActiveSlides();
    slides[i].classList.add('current-slide')
    item.classList.add('current-btn-promo')
  })
})

const resetActiveAdvantages= () => {
  advantages.forEach((item) => {
    item.classList.remove('current-advantage')
  })
  btnAdvantages.forEach((item) => {
    item.classList.remove('current-btn-advantages')
  })
}

btnAdvantages.forEach((item, i) => {
  item.addEventListener('click', () => {
    resetActiveAdvantages();
    advantages[i].classList.add('current-advantage')
    item.classList.add('current-btn-advantages')
  })
})
