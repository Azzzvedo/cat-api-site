'use strict'

const faveIcons = document.querySelectorAll('.cat-card__fav')
const randomCatButton = document.querySelector('.random-cat__button-container')
const randomCatImage = document.querySelector('.random-cat')

if (faveIcons) {
  faveIcons.forEach(faveIcon => {
    faveIcon.addEventListener('click', e => {
      e.preventDefault()
      e.target.classList.toggle("filter")
    })
  })
}

const fetchImgUrl = async function () {
  const response = await fetch('https://api.thecatapi.com/v1/images/search')
  const [data] = await response.json()
  return data
}

if (randomCatButton) {
  randomCatButton.addEventListener('click', async e => {
    e.preventDefault()
    const imgData = await fetchImgUrl()
    randomCatImage.src = imgData.url
  })
}
