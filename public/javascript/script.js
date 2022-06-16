'use strict'

console.log('connected');


const faveIcons = document.querySelectorAll('.cat-card__fav')
console.log(faveIcons);
faveIcons.forEach(faveIcon => {
  faveIcon.addEventListener('click', e => {
    e.preventDefault()
    console.log('TEST');
    console.log(e);
    e.target.classList.toggle("filter")
  })
})
