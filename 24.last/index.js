const memberData = document.getElementById('memberData')

const dataLoading = `<div class="spinner-border text-primary" role="status">
<span class="sr-only">Loading...</span>
</div>`

function getUsersFromServer() {
  memberData.innerHTML = dataLoading
}

const url = 'http://localhost:5555/users'

const method = 'GET'

const request = new Request(url, {
  method: method,
  headers: new Headers({
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }),
})

const response = await fetch(request)
const data =  await response.json()

console.log(data)

let display = ''


setTimeout(function () {
  memberData.innerHTML = display
}, 500)
}

