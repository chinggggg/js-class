const user = document.getElementById('user')
const computer = document.getElementById('computer')
const result = document.getElementById('result')
const scissors = document.getElementById('scissors')
const rock = document.getElementById('rock')
const paper = document.getElementById('paper')

//剪刀==1 石頭==2 布==3
let finalList = ['電腦－win', '你－win', '平手']

let userStates = 0
let comStates = 0
let final = 0

const StatesItem = ['剪刀', '石頭', '布']

scissors.addEventListener('click', function () {
  userStates = 1
  user.innerHTML = '你出了-' + StatesItem[userStates - 1]

  comStates = Math.floor(Math.random() * 3) + 1
  computer.innerHTML = '電腦出了-' + StatesItem[comStates - 1]

  if (userStates === comStates) final = 2

  if (userStates === 2 && comStates === 3) final = 1

  if (userStates === 3 && comStates === 2) final = 1

  if (userStates === 1 && comStates === 3) final = 1

  result.innerHTML = '結果：' + finalList[final]

  userStates = 0
  comStates = 0
  final = 0
})

rock.addEventListener('click', function () {
  userStates = 2
  user.innerHTML = '你出了-' + StatesItem[userStates - 1]

  comStates = Math.floor(Math.random() * 3) + 1
  computer.innerHTML = '電腦出了-' + StatesItem[comStates - 1]
  if (userStates === comStates) final = 2

  if (userStates === 2 && comStates === 3) final = 1

  if (userStates === 3 && comStates === 2) final = 1

  if (userStates === 1 && comStates === 3) final = 1

  result.innerHTML = '結果：' + finalList[final]

  userStates = 0
  comStates = 0
  final = 0
})

paper.addEventListener('click', function () {
  userStates = 3
  user.innerHTML = '你出了-' + StatesItem[userStates - 1]

  comStates = Math.floor(Math.random() * 3) + 1
  computer.innerHTML = '電腦出了-' + StatesItem[comStates - 1]
  if (userStates === comStates) final = 2

  if (userStates === 2 && comStates === 3) final = 1

  if (userStates === 3 && comStates === 2) final = 1

  if (userStates === 1 && comStates === 3) final = 1

  result.innerHTML = '結果：' + finalList[final]

  userStates = 0
  comStates = 0
  final = 0
})
