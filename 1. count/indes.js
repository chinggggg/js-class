const target = document.getElementById('target')
const addButton = document.getElementById('add')
const subButton = document.getElementById('sub')

//點addbutton＋1
addButton.addEventListener('click', function () {
  target.innerHTML = +target.innerHTML + 1
})
//點addbutton-1
subButton.addEventListener('click', function () {
  target.innerHTML = +target.innerHTML - 1
})

// //  點文字數字＋1
// document.getElementById('target').addEventListener('click',function(){
//     const nowNumber = +document.getElementById('target').innerHTML;
//     console.log(nowNumber);
//     document.getElementById('target').innerHTML = nowNumber+1

// });
