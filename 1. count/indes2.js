const target = document.getElementById('target')
const addButton = document.getElementById('add')
const subButton = document.getElementById('sub')

addButton.addEventListener('click', function () {
  target.innerHTML = +target.innerHTML + 1
})

subButton.addEventListener('click', function () {
  target.innerHTML = +target.innerHTML - 1
})
