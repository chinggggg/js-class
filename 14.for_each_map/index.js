const a = [1, 2, 3, 4, 5]
for (let i = 0; i < a.length; i++) {
  //乘2
  // a[i] = a[i] * 2
  console.log(i, a[i])
}

const b = [1, 2, 3, 4, 5]
// 以陣列為起點呼叫，回調callback ,alue, index, array 值,引索,陣列
b.forEach(function (value, index, array) {
  //乘2
  array[index] = value * 2
  console.log(index, array[index])
})

const c = [1, 2, 3, 4, 5]
// map  一定要有新陣列接住值
const d = c.map(function (value, index, array) {
  //乘3
  return value * 3
})
console.log(d)

const e = [1, 2, 3, 4, 5]
// map  一定要有新陣列接住值,可以直接重複運算
const f = e
  .map((v) => v * 3)

  .map(function (value) {
    // /3
    return value / 10
  })
  .join(',')
console.log('f', f)
