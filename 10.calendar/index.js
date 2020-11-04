const yearAndMonth = document.getElementById('yearAndMonth')
const title = document.getElementById('title')
const data = document.getElementById('data')

const now = new Date()
const nowY = now.getFullYear()
const nowM = now.getMonth() + 1

yearAndMonth.innerHTML = nowY + '-' + nowM

const week = [
  '星期日',
  '星期一',
  '星期二',
  '星期三',
  '星期四',
  '星期五',
  '星期六',
]

let weekTitleDisplay = ''
for (let i = 0; i < week.length; i++) {
  weekTitleDisplay += `<th>${week[i]}</th>`
}
title.innerHTML = `<tr>${weekTitleDisplay}</tr>`

const monthFirst = new Date('2020/10/1').getDay()

//月份從0開始
const days = new Date(2020, 10, 0).getDate()

const numberOfMember = monthFirst + days

const dataTemp = []

for (let i = 0; i < numberOfMember; i++) {
  if (i < 4) {
    dataTemp.push('')
  } else {
    dataTemp.push(i - 3)
  }
}
console.log(dataTemp)

let dayDisplay = '<tr>'

for (let i = 0; i < dataTemp.length; i++) {
  dayDisplay += `<td>${dataTemp[i]}</td>`

  if ((i + 1) % 7 === 0) {
    dayDisplay += '</tr><tr>'
  }
}

dayDisplay += '</tr>'

data.innerHTML = `${dayDisplay}`
