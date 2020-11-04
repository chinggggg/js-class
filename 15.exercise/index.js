// for (let i = 1; i < 10; i++) {
//   console.log(i)
// }

function showMessage(greeting, name, callback) {
  console.log('you call showMessage')
  callback(greeting, name)
}
