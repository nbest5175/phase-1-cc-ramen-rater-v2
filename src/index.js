// index.js
const ramenAPI = 'http://localhost:3000/ramens'
const ramenMenuDiv = el('ramen-menu')
// const newRamenForm = el('new-ramen')
// or instead write
el('new-ramen').addEventListener('submit', addSubmitListener)

fetch(ramenAPI)
    .then(res => res.json())
    .then(ramens => renderRamens(ramens))
    // You can also write
    // .then(renderRamens)

function renderRamens(ramens) {
    ramens.forEach(renderRamen)
}

function renderRamen(ramen) {
    const ramenImageElement = document.createElement('img')
    ramenImageElement.src = ramen.image
    ramenMenuDiv.append(ramenImageElement)

    ramenImageElement.addEventListener('click', () => handleClick(ramen))
}

function handleClick(ramen) {
  el('detail-image').src = ramen.image
  el('detail-name').textContent = ramen.name
  el('detail-restaurant').textContent = ramen.restaurant 
  el('rating-display').textContent = ramen.rating
  el('comment-display').textContent = ramen.comment 
}

function addSubmitListener(event) {
  event.preventDefault()
  const newRamen = {
      name: event.target.name.value,
      restaurant: event.target.restaurant.value,
      image: event.target.image.value,
      rating: event.target.rating.value,
      comment: event.target['new-comment'].value, 

  }

    renderRamen(newRamen)
    event.target.reset()
}

function el(id) {
  return document.getElementById(id)
  // You can also write 
  // return document.querySelector(`${id}`)
}

const displayRamens = () => {
  // Add code
};

const main = () => {
  // Invoke displayRamens here
  // Invoke addSubmitListener here
}

main()

// Export functions for testing
export {
  displayRamens,
  addSubmitListener,
  handleClick,
  main,
};
