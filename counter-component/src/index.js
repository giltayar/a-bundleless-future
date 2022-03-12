import html from './html.js'

export function makeCounterComponent(rootElement) {
  rootElement.innerHTML = html

  const counterValueElement = rootElement.querySelector('.counter-value')

  rootElement.querySelector('.increase-counter').addEventListener('click', function () {
    counterValueElement.textContent = parseInt(counterValueElement.textContent, 10) + 1
  })

  rootElement.querySelector('.decrease-counter').addEventListener('click', function () {
    counterValueElement.textContent = Math.max(parseInt(counterValueElement.textContent, 10) - 1, 0)
  })
}
