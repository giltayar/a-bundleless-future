const counterElement = document.querySelector('#counter')

document.querySelector('#increase-counter').addEventListener('click', function () {
  counterElement.textContent = parseInt(counterElement.textContent ?? '0', 10) + 1
})

document.querySelector('#decrease-counter').addEventListener('click', function () {
  counterElement.textContent = Math.max(parseInt(counterElement.textContent ?? '0', 10) - 1, 0)
})
