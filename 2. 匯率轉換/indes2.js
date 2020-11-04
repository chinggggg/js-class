const text = document.getElementById('text')
const usd2twd = document.getElementById('usd2twd')
const twd2usd = document.getElementById('twd2usd')
const moneyInput = document.getElementById('moneyInput')

usd2twd.addEventListener('click', function () {
  const money = +moneyInput.value
  text.innerHTML = (money * 28.5).toFixed(0)
})

twd2usd.addEventListener('click', function () {
  const money = +moneyInput.value
  text.innerHTML = (money / 28.5).toFixed(2)
})
