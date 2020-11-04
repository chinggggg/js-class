const clock = document.getElementById('clock')
const start = document.getElementById('start')
const stop = document.getElementById('stop')

let timerID = null

// 自動更換操作
// setInterval(function () {
//   let time = new Date().toLocaleTimeString()
//   clock.innerHTML = time
// }, 1000)

// setInterval(function () {
//   clock.innerHTML = new Date().toLocaleTimeString()
// }, 1000)

// 按鈕操作
start.addEventListener('click', function () {
  timerID = setInterval(function () {
    clock.innerHTML = new Date().toLocaleTimeString()
  }, 1000)
})

stop.addEventListener('click', function () {
  timerID = clearInterval(timerID)
})
