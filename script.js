let previousLevel;

const generateList = (array, deep) => {
  const ul = document.createElement('ul');
  
  array.forEach((item) => {
    const li = document.createElement('li');
    if (Array.isArray(item)) {
      li.append(generateList(item, 'deep'));
    } else {
      if (deep) {
        li.innerHTML = `${previousLevel}.${item}`;
      } else {
        li.innerHTML = item;
        previousLevel = item;
      }
    }
    ul.append(li);
  });

  return ul;
};



const array = [1, 2, [1, 2, [1, 2]], 3];
document.body.append(generateList(array));


const createElements = (tag, className, text) => {
  const element = document.createElement(tag);
  if (Array.isArray(className)) {
    element.classList.add(...className);
  } else {
    element.classList.add(className);
  }
  if (text) {
    element.innerText = text;  
  }

  return element;
}

const form = createElements('form', 'form');

const nameLabel = createElements('label', 'label', 'Name');


const userName = createElements('input', 'user_name');
userName.required = true;

const lastNameLabel = createElements('label', 'label', 'Last Name');

const userLastName = createElements('input', 'user_last_name');
userLastName.required = true;

const birthLabel = createElements('label', 'label', 'Date of Birth');

const dateOfBirth = createElements('input', 'date_of_birth');
dateOfBirth.required = true;

const sexLabel = document.createElement('label');
sexLabel.innerText = 'Sex\n';

const maleLabel = document.createElement('label');
maleLabel.innerText = 'Male';
const male = document.createElement('input');
male.type = 'radio';
male.name = 'sex';
male.value = 'male';
male.classList.add('male');

console.log(male);

const femaleLabel = document.createElement('label');
femaleLabel.innerText = 'Female';
const female = document.createElement('input');
female.type = 'radio';
female.name = 'sex';
female.value = 'female';
female.classList.add('female');

const cityLabel = document.createElement('label');
cityLabel.innerText = 'City:\n';
const citySelect = document.createElement("select");
citySelect.classList.add('city_select');
citySelect.required = true;
const cityOptions = ['Kyiv', 'Kharkiv', 'Lviv', 'Lutsk'];
for (var i = 0; i < cityOptions.length; i++) {
  var option = document.createElement("option");
  option.value = cityOptions[i].toLowerCase();
  option.textContent = cityOptions[i];
  citySelect.appendChild(option);
}