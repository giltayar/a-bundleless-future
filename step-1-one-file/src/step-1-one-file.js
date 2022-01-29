const counterElement = document.querySelector('#counter')

const counterValueElement = counterElement.querySelector('.counter-value')

counterElement.querySelector('.increase-counter').addEventListener('click', function () {
  counterValueElement.textContent = parseInt(counterValueElement.textContent, 10) + 1
})

counterElement.querySelector('.decrease-counter').addEventListener('click', function () {
  counterValueElement.textContent = Math.max(parseInt(counterValueElement.textContent, 10) - 1, 0)
})
