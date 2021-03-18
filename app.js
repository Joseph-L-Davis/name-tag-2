
// Set Variables
const input1 = document.getElementById('first-input')
const input2 = document.getElementById('second-input')
const input3 = document.getElementById('third-input')

const button1 = document.getElementById('btn-1')
const button2 = document.getElementById('btn-2')
const button3 = document.getElementById('btn-3')

const firstName = document.getElementById('first-name')
const secondName = document.getElementById('second-name')
const thirdName = document.getElementById('third-name')

// Set event listener

button1.addEventListener('click', () => {
  firstName.textContent = input1.value;
  input1.value = "";
});

input1.addEventListener('keyup', (e) => {
  if (e.code === 'Enter') {
  firstName.textContent = input1.value;
  input1.value = "";
  }
});

button2.addEventListener('click', () => {
  secondName.textContent = input2.value;
  input2.value = "";
});

input2.addEventListener('keyup', (e) => {
  if (e.code === 'Enter') {
  secondName.textContent = input2.value;
  input2.value = "";
  }
});

button3.addEventListener('click', () => {
  thirdName.textContent = input3.value;
  input3.value = "";
});

input3.addEventListener('keyup', (e) => {
  if (e.code === 'Enter') {
  thirdName.textContent = input3.value;
  input3.value = "";
  }
});