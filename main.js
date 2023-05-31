const button = document.querySelector('button')
const quote = document.querySelector('.quote')
const id = document.querySelector('.id')

button.addEventListener('click', () => {
  axios.get('https://api.adviceslip.com/advice')
  .then((response) => {
    quote.innerHTML = response.data.slip.advice
    id.innerHTML = `advice #${response.data.slip.id}`
  })
})