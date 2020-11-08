//老師範例
// const targetText = document.getElementById("target");
// const one = document.getElementById("one");
// const two = document.getElementById("two");
// const three = document.getElementById("three");
// const apply = document.getElementById("apply");

// //寫一個簡單的函式，為了要補齊只有一位的時候的前面的'0'
// function decimal2Hex(d) {
//   let hex = d.toString(16);

//   if (hex.length < 2) {
//     hex = 0 + hex;
//   }

//   return hex;
// }

// apply.addEventListener("click", function () {
//   let color = "#";
//   color = color + decimal2Hex(+one.value);
//   color = color + decimal2Hex(+two.value);
//   color = color + decimal2Hex(+three.value);

//   console.log(color);

//   // 設定顏色到指定的DOM元素上
//   targetText.style.color = color;
// });

const target = document.getElementById('target');
const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const apply = document.getElementById('apply');
// console.log(one);
function decimal2Hex(d) {
    let hex = d.toString(16);
    // 補齊只有一位的時候的前面的'0'
    if (hex.length < 2) {
    //   hex = 0 + hex;
      hex = "0" + hex;
    }


apply.addEventListener('click', function(){
  
    let color = '#';
    color+= (+one.value).toString(16);
    color+= (+two.value).toString(16);
    color+= (+three.value).toString(16);
    console.log(color);

    target.style.color = color;
    // document.getElementById('target').style.color = 'red';
})