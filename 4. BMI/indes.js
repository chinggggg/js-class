const BMI = document.getElementById('BMI')
const text = document.getElementById('text')

BMI.addEventListener('click', function () {
  const height = +document.getElementById('height').value
  console.log('height', height)
  const weight = +document.getElementById('weight').value
  console.log('weight', weight)

  let heightM = Math.pow(height / 100, 2)
  console.log('heightM', heightM)

  text.innerHTML = (weight / heightM).toFixed(1)
})
