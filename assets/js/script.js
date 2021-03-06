const numbers = document.querySelector('.screen h3');
const addButton = document.querySelector('.add-button');
const deleteButton = document.querySelector('.delete-button');

//dest default number
let index = (numbers.textContent = 0);
//get the number
let currentNumber = parseFloat(index);

//add function on click
addButton.addEventListener('click', () => {
  currentNumber = currentNumber + 1;
  //give back the result to text
  numbers.textContent = currentNumber;
});

//delete function on cilck
deleteButton.addEventListener('click', () => {
  if (numbers.textContent == 0) {
    return;
  }
  currentNumber = currentNumber - 1;
  numbers.textContent = currentNumber;
});

//buttons pressed style
const buttons = document.querySelectorAll('button');

//press ( mousedown ) add the pressed style
//release ( mouseup ) remove that style
buttons.forEach((button) => {
  button.addEventListener('mousedown', () => {
    button.classList.add('button-pressed');
  });

  button.addEventListener('mouseup', () => {
    button.classList.remove('button-pressed');
  });
});
