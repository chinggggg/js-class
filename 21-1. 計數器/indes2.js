const target = document.getElementById('target')
const addButton = document.getElementById('add')
const subButton = document.getElementById('sub')
const dataLoading = `<div class="spinner-border text-secondary" role="status">
<span class="sr-only">Loading...</span>
</div>`
// async function getDataFromServer() {
//   // 一開始載入資料時加上資料載入的指示圖
//   targetText.innerHTML = dataLoading

// GET data
function getDataFromServer() {
  target.innerHTML = dataLoading

  const jsonData = `{
    "total": 1089,
    "id": 1
  }`

  const data = JSON.parse(jsonData)

  // console.log(data)
  setTimeout(function () {
    target.innerHTML = data.total
  }, 500)
}

// update data
function updateDataToServer(value) {
  const total = +target.innerHTML + value

  target.innerHTML = dataLoading
  const data = { total: total }
  const body = JSON.stringify(data)

  const jsonData = `{
    "total": ${total},
    "id": 1
  }`
  const responseData = JSON.parse(jsonData)

  setTimeout(function () {
    target.innerHTML = responseData.total
  }, 500)
}

// function changeValueAsync(callback) {
//   setTimeout(function () {
//     callback()
//   }, 1000)
// }

addButton.addEventListener('click', function () {
  updateDataToServer(1)
})

subButton.addEventListener('click', function () {
  updateDataToServer(-1)
})

getDataFromServer()
