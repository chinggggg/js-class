const title = document.getElementById('title')
const data = document.getElementById('data')

const newdata = `"學生姓名","國文","數學","英文"
"陳小花",90,65,77
"張大頭",80,75,60
"李一百",100,60,85`

const newdata2 = newdata.replace(/"/gi, '')

const displaydata = newdata2.split('\n')
const titleitems = displaydata[0].split(',')

let titledisplay = ''
for (let i = 0; i < titleitems.length; i++) {
  titledisplay += `<th>${titleitems[i]}</th> `
}
title.innerHTML = `<tr>${titledisplay}</tr> `
// --
const students = []

for (let i = 1; i < displaydata.length; i++) {
  const tamp = displaydata[i].split(',')
  const student = {
    name: tamp[0],
    chinese: tamp[1],
    math: tamp[2],
    english: tamp[3],
  }
  students.push(student)
}

let totlaChinese = 0
let totlaMath = 0
let totlaEnglish = 0

let studentdisplay = ''
for (let i = 0; i < students.length; i++) {
  studentdisplay += `<tr>
  <td>${students[i].name}</td>
  <td>${students[i].chinese}</td>
  <td>${students[i].math}</td>
  <td>${students[i].english}</td>
  </tr>`
  totlaChinese += +students[i].chinese
  totlaMath += +students[i].math
  totlaEnglish += +students[i].english
}
let avgDisplay = `<tr>
<td>平均分數</td>
<td>${(totlaChinese / 3).toFixed(0)}</td>
<td>${(totlaMath / 3).toFixed(0)}</td> 
<td>${(totlaEnglish / 3).toFixed(0)}</td> 
</tr>`

data.innerHTML = studentdisplay + avgDisplay
