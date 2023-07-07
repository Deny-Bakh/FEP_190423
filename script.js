const wrapperFormOne = document.createElement('div');
const wrapperFormTwo = document.createElement('div');
const inputOne = document.createElement('input');
const inputTwo = document.createElement('input');
const buttonOne = document.createElement('button');
const buttonTwo = document.createElement('button');

wrapperFormOne.className = 'wrapper_form';
wrapperFormTwo.className = 'wrapper_form';
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

wrapperFormOne.append(inputOne, buttonOne);
wrapperFormTwo.append(inputTwo, buttonTwo);
document.body.append(wrapperFormOne, wrapperFormTwo);

buttonOne.addEventListener('click', () => redirect(inputOne));
buttonTwo.addEventListener('click', () => redirect(inputTwo));

