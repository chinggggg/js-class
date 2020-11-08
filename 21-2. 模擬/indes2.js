const target = document.getElementById('target')
const addButton = document.getElementById('add')
const subButton = document.getElementById('sub')
const dataLoading = `<div class="spinner-border text-secondary" role="status">
<span class="sr-only">Loading...</span>
</div>`

// GET data
async function getDataFromServer() {
  target.innerHTML = dataLoading

  const url = 'http://localhost:5555/bd'
  const method = 'GET'

  const request = new Request(url, {
    method: method,
    headers: new Headers({
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }),
  })
  const response = await ferch(request)
  const data = await response.json()

  // console.log(data)
  setTimeout(function () {
    target.innerHTML = data.total
  }, 500)
}

// update data
async function updateDataToServer(value) {
  const total = +target.innerHTML + value

  target.innerHTML = dataLoading
  const data = { total: total }
  const bodyData = JSON.stringify(data)

  const url = 'http://localhost:5555/bd'
  const method = 'PUT'

  const request = new Request(url, {
    method: method,
    body: bodyData,
    headers: new Headers({
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }),
  })
  const response = await ferch(request)
  const responseData = await response.json()

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
