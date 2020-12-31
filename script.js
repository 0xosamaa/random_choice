const input = document.querySelector('#textarea')
const tags = document.querySelector('.tags')

input.focus()
window.addEventListener('keyup', main)

function main(e) {
    // Create '.tag' elements with different inputs
  const inputs = input.value.split(' ').filter((choice) => choice.trim())
  const html = inputs
    .map((choice) => {
      return `<span class="tag">${choice}</span>`
    })
    .join('')
  tags.innerHTML = html
  if (!input.value) {
    tags.innerHTML = ''
  }
  const spannedTags = document.querySelectorAll('.tag')
console.log(input.value)
console.log(e)
  // Randomize tags if Enter is pressed
  if(input.value.trim() == ''){
    input.value = ''
    return
  }
  
  if (e.code == 'Enter'){
    input.value = ''
    let interval = setInterval(() => {
      const randTag = randomTag(spannedTags)
      highlightTag(randTag)
      setTimeout(() => {
        unhighlightTag(randTag)
      }, 100)
    }, 100)
  
    setTimeout(() => {
      clearInterval(interval)
      setTimeout(() => {
        const lastChoice = randomTag(spannedTags)
        highlightTag(lastChoice)
      }, 100)
    }, 5000)
  }
}

function randomTag(spannedTags) {
  const randomChoice =
    spannedTags[Math.floor(Math.random() * spannedTags.length)]
  return randomChoice
}

function highlightTag(tag) {
  tag.classList.add('highlight')
}

function unhighlightTag(tag) {
  tag.classList.remove('highlight')
}
