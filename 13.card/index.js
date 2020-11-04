const rand = Math.floor(Math.random() * 100) + 1

console.log(rand)

if (rand > 0 && rand < 4) {
  console.log('五星卡')
  const rand2 = Math.floor(Math.random() * 3) + 1
  console.log('第', rand2, '種')
}

if (rand > 3 && rand < 21) {
  console.log('四星卡')
}

if (rand > 20) {
  console.log('三星卡')
}
