const table99 = document.getElementById('table99')

let display = ''

for (let i = 1; i < 10; i++) {
  display += '<tr>'
  for (let j = 1; j < 10; j++) {
    display += `<td> ${i}x${j}=${i * j}</td> `
  }

  display += '</tr>'
}
table99.innerHTML = display
