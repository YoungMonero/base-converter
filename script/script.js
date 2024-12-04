const inputBaseNumber = document.getElementById('basenumber')
const convertButtom = document.getElementById('convertbutton')
const result = document.getElementById('feedback')
// const restartButtom = document.getElementById('restartbutton')

const baseInput = document.getElementById('base')

// funtion

convertButtom.addEventListener('click', () => {
  const convertBase = parseInt(inputBaseNumber.value, 10)
  const baseInputNumber = parseInt(baseInput.value, 10)
  if (isNaN(convertBase)) {
    result.textContent = 'please enter a valid base number'
    result.style.color = 'red'
    return
  }
  const convertNumber = convertBase.toString(baseInputNumber)

  result.textContent = ` ${convertBase} to base ${baseInputNumber} is ${convertNumber}`
  result.style.color = 'green'
})
