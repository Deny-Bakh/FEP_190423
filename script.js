const createInput = (type, name, id, required) => {
  const input = document.createElement('input');
  input.type = type;
  input.name = name;
  input.id = id;
  input.required = required;

  return input;
}

const createLabel = (text, forId) => {
  const label = document.createElement('label');
  label.textContent = text;
  label.htmlFor = forId;

  return label;
}

const form = document.createElement('form');

document.body.append(form);

const nameLabel = createLabel('Name:', 'firstName');

const userName = createInput('text', 'First Name', 'firstName', true);

form.append(nameLabel, userName);

const lastNameLabel = createLabel('Last Name:', 'lastName');

const userLastName = createInput('text', 'Last Name', 'lastName', true);

form.append(lastNameLabel, userLastName);

// const birthLabel = createLabel('Date of Birth:', 'dateOfBirth');

// const dateOfBirth = createInput('text', 'Date of Birth', 'dateOfBirth', true);

const birthLabel = createLabel('Date of Birth:', 'dateOfBirth');

const dateOfBirth = createInput('date', 'Date of Birth', 'dateOfBirth', true);

form.append(birthLabel, dateOfBirth);

const maleLabel = createLabel('Male', 'male');
maleLabel.innerText = 'Male';
const male = createInput('radio', 'Sex', 'male');
male.value = 'Male';

const femaleLabel =  createLabel('Female', 'female');
femaleLabel.innerText = 'Female';
const female = createInput('radio', 'Sex', 'female');
female.value = 'Female';

const fieldSetSex = document.createElement('fieldset');
const sexLegend = document.createElement('legend');
sexLegend.innerText = 'Sex:';
fieldSetSex.append(sexLegend, male, maleLabel, female, femaleLabel);

form.append(fieldSetSex);

const cityLabel = createLabel('City:', 'city');
const citySelect = document.createElement('select');
citySelect.name = 'City';
citySelect.id = 'city';
const cityOptions = ['Kyiv', 'Kharkiv', 'Lviv', 'Lutsk'];
cityOptions.forEach((city) => {
  const cityVar = document.createElement('option');
  cityVar.value = city;
  cityVar.innerText = city;

  citySelect.append(cityVar);
})
form.append(cityLabel, citySelect);


const addressLabel = createLabel('Address:', 'address');
const address = document.createElement('textarea');
address.name = 'Address';
address.id = 'address';
address.required = true;
address.rows = '2';
address.cols = '25';

form.append(addressLabel, address);

const fieldSet = document.createElement('fieldset');
const legendLanguage = document.createElement('legend');
legendLanguage.innerText = 'Spoken Languages:';
fieldSet.append(legendLanguage);

const languageOptions = ['English', 'Ukrainian', 'French', 'Italian'];

languageOptions.forEach((language) => {
  const languageVar = createInput('checkbox', 'language', language);
  languageVar.type = 'checkbox';
  const languageLabel = createLabel(language, language);
  languageVar.value = language;
  fieldSet.append(languageVar, languageLabel);
  form.append(fieldSet);
})


const button = document.createElement('button');
button.type = 'submit';
button.innerText = 'SUBMIT';

form.append(button);

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const form = event.target;

  const formData = new FormData(form);
  const resultFormData = Object.fromEntries(formData);
  const multipleCheckboxData = formData.getAll('language');
  resultFormData.language = multipleCheckboxData;

  createTable(resultFormData);

})

const createTable = (formData) => {
  const table = document.createElement('table');


  Object.keys(formData).forEach((key) => {
    const itemName = document.createElement('td')
    itemName.innerText = key;

    const itemValue = document.createElement('td')
    itemValue.innerText = formData[key];

    const row = document.createElement('tr')
    row.append(itemName, itemValue)
    table.append(row)
  
  
    form.classList.add('hide')
    document.body.append(table)
  })

  /*   for (const [key, value] of Object.entries(formData)) {


    const itemName = createElements('td')
    itemName.innerText = key;
  
    const itemValue = createElements('td')
    itemValue.innerText = value;
  
    const row = createElements('tr')
    row.append(itemName, itemValue)
    table.append(row)
  } 
  
  form.classList.add('hide')
  document.body.append(table) */
}