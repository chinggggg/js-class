const name = document.getElementById('name')
console.log(name)

const phone = document.getElementById('phone')
const add = document.getElementById('add')
const account = document.getElementById('account')
const password = document.getElementById('password')
const confirm = document.getElementById('confirm')

const button = document.getElementById('button')
const error = document.getElementById('error')

button.addEventListener('click', function () {
  let errorItem = ''
  // if (name.value === '') {
  //alert('姓名沒填')
  //利用空白字串是假家族的情況來判斷
  if (!name.value) errorItem += ' 姓名沒填'
  if (!phone.value) errorItem += ' 電話沒填'
  if (!add.value) errorItem += ' 姓名沒填'
  if (!account.value) errorItem += ' 地址沒填'
  if (!account.value) errorItem += ' 帳號沒填'
  if (!password.value) errorItem += ' 密碼沒填'

  if (account.value.length < 6) errorItem += ' 帳號至少六位'
  if (password.value.length < 6) errorItem += ' 密碼至少六位'

  if (password.value !== confirm.value) errorItem += ' 兩次密碼不相同'

  error.innerHTML = errorItem
    ? '<span style="color: red;" > 錯誤:' + errorItem + '</span>'
    : '<span style="color: green;" > 資料完成輸出中 </span>'
})
