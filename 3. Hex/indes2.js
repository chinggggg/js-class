const target = document.getElementById('target')
const one = document.getElementById('one')
const two = document.getElementById('two')
const three = document.getElementById('three')
const apply = document.getElementById('apply')
// console.log(one);

function changeHex(i) {
  let hex = i.toString(16)
  if (hex.length < 2) {
    hex = '0' + hex
  }
}

apply.addEventListener('click', function () {
  let color = '#'
  color += (+one.value).toString(16)
  color += (+two.value).toString(16)
  color += (+two.value).toString(16)
  target.style.color = color
  target.innerHTML = color
})
