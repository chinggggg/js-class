const title = document.getElementById('title')
const data = document.getElementById('data')

const newdata = `"學生姓名","國文","數學","英文"
"陳小花",90,65,77
"張大頭",80,75,60
"李一百",100,60,85`

const newdata2 = newdata.replace(/"/gi, '')

const dasplaydata = newdata2.split('\n')

// '\n'分行記號!!!!!!

// const titlelist1 = dasplaydata[0]

const titlelist = dasplaydata[0].split(',')

let titledisplay = ''
for (let i = 0; i < titlelist.length; i++) {
  titledisplay += `<th>${titlelist[i]}</th>`
}

title.innerHTML = `<tr>${titledisplay}</tr>`

const students = []

for (let i = 1; i < dasplaydata.length; i++) {
  const tamp = dasplaydata[i].split(',')
  const student = {
    name: tamp[0],
    chinese: tamp[1],
    math: tamp[2],
    english: tamp[3],
  }
  students.push(student)
}
let totalChinese = 0
let totalMath = 0
let totalEnglish = 0

let studentDisplay = ''
for (let i = 0; i < students.length; i++) {
  studentDisplay += `<tr>
  <td>${students[i].name}</td>
  <td>${students[i].chinese}</td>
  <td>${students[i].math}</td>
  <td>${students[i].english}</td>
  </tr>`

  totalChinese += +students[i].chinese
  totalMath += +students[i].math
  totalEnglish += +students[i].english
}
let avgDisplay = `<tr>
<td>平均分數</td>
<td>${(totalChinese / 3).toFixed(0)}</td>
<td>${(totalMath / 3).toFixed(0)}</td>
<td>${(totalEnglish / 3).toFixed(0)}</td>
</tr>`
data.innerHTML = studentDisplay + avgDisplay
