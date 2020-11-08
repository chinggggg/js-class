const yearAndMonth = document.getElementById('yearAndMonth')
const title = document.getElementById('title')
const data = document.getElementById('data')

const now = new Date()
const nowY = now.getFullYear()
const nowM = now.getMonth() + 1

const week = [
  '星期日',
  '星期一',
  '星期二',
  '星期三',
  '星期四',
  '星期五',
  '星期六',
]
let titleDisplay = ''
for (let i = 0; i < week.length; i++) {
  titleDisplay += '<th>'
  titleDisplay += week[i]
  titleDisplay += '</th>'
}
title.innerHTML = `<tr>${titleDisplay}</tr>`

const monthFirst = new Date('2020 / 11 / 1').getDay()
const day = new Date(2020, 11, 0).getDate()

const numberOfMember = monthFirst + day
const dataTemp = []

for (let i = 0; i < numberOfMember; i++) {
  if (i < monthFirst) {
    dataTemp.push('')
  } else {
    dataTemp.push(i - monthFirst + 1)
  }
}
console.log(dataTemp)

let dayDisplay = '<tr>'

for (let i = 0; i < dataTemp.length; i++) {
  dayDisplay += `<td>${dataTemp[i]}</td>`
  if ((i + 1) % 7 === 0) dayDisplay += '</tr><tr>'
}
data.innerHTML = dayDisplay
