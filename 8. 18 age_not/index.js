const year = document.getElementById('year')
const month = document.getElementById('month')
const day = document.getElementById('day')
const checkAge = document.getElementById('checkAge')

let yearOption = '<option value="0">請選擇</option>'

for (let i = 1910; i < 2011; i++) {
  yearOption += `<option value="${i}">${i}</option>`
}
year.innerHTML = yearOption
//---------------------------------

let monthOption = '<option value="0">請選擇</option>'

for (let i = 1; i < 13; i++) {
  monthOption += `<option value="${i}">${i}</option>`
}
month.innerHTML = monthOption
//---------------------------------

let dayOption = '<option value="0">請選擇</option>'

for (let i = 1; i < 32; i++) {
  dayOption += `<option value="${i}">${i}</option>`
}
day.innerHTML = dayOption

//---------------------------------

let m = 0
let y = 0
let d = 0

year.addEventListener('change', function () {
  y = +year.value
  console.log('y', y)
  if (m && y) {
    const selectDays = new Date(y, m, 0).getDate()
    let dayOption = '<option value="0">請選擇</option>'

    for (let i = 1; i < selectDays + 1; i++) {
      dayOption += `<option value="${i}">${i}</option>`
    }
    day.innerHTML = dayOption
  }
})

month.addEventListener('change', function () {
  m = +month.value
  console.log('m', m)

  if (m && y) {
    const selectDays = new Date(y, m, 0).getDate()
    let dayOption = '<option value="0">請選擇</option>'

    for (let i = 1; i < selectDays + 1; i++) {
      dayOption += `<option value="${i}">${i}</option>`
    }
    day.innerHTML = dayOption
  }
})

day.addEventListener('change', function () {
  d = +day.value
})

console.log('select', y, m, d)

checkAge.addEventListener('click', function () {
  //後面都是系統預設可以抓得值
  const now = new Date()
  const nowY = now.getFullYear()
  const nowM = now.getMonth() + 1
  const nowD = now.getDate()
  console.log('now', nowY, nowM, nowD)

  let over18 = false
})
