const dice = document.getElementById('dice')
const point = document.getElementById('point')
const start = document.getElementById('start')

const pointList = ['one', 'two', 'three', 'four', 'five', 'six']

start.addEventListener('click', function () {
  const p = Math.floor(Math.random() * 6) + 1
  point.innerHTML = p + '點'
  dice.innerHTML = `<i class="fas fa-dice-${pointList[p - 1]}"></i>`
})
