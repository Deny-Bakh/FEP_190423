const wrapperDivOne = document.createElement('div');
const wrapperDivTwo = document.createElement('div');
// const wrapperFormOne = document.createElement('form');
// const wrapperFormTwo = document.createElement('form');
const inputOne = document.createElement('input');
const inputTwo = document.createElement('input');
const buttonOne = document.createElement('button');
const buttonTwo = document.createElement('button');

wrapperDivOne.className = 'wrapper_form';
wrapperDivTwo.className = 'wrapper_form';
inputOne.className = 'input';
inputTwo.className = 'input';
// buttonTwo.classList.add('button');
buttonTwo.className = 'button';
// buttonOne.classList.add('button');
buttonOne.className = 'button';

buttonOne.textContent = 'BUTTON';
buttonTwo.textContent = 'BUTTON';

function redirect(input) {
  const value = input.value;
  const reg = /^https?:\/\//;

  if (reg.test(value)) {
    url = value;
  } else {
    url = 'https://' + value;
  }
  window.location.href = url;
}

wrapperDivOne.append(inputOne, buttonOne);
wrapperDivTwo.append(inputTwo, buttonTwo);
document.body.append(wrapperDivOne, wrapperDivTwo);

buttonOne.addEventListener('click', () => redirect(inputOne));
buttonTwo.addEventListener('click', () => redirect(inputTwo));

