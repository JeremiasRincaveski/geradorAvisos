const button = document.querySelector('button')
const quote = document.querySelector('.quote')
const id = document.querySelector('.id')

button.addEventListener('click', () => {
  button.classList.add('giro')
  button.disabled = true
  axios.get('https://api.adviceslip.com/advice')
  .then((response) => {
    setTimeout(() => {
      button.classList.remove('giro')
      button.disabled = false
      quote.innerHTML = response.data.slip.advice
      id.innerHTML = `advice #${response.data.slip.id}`  
    }, 3000)
  })
})