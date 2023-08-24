import users from "./data.js";

function displayUsers() {
  const userList = document.querySelector('#user-list');

  users.forEach(user => {
    const userItem = document.createElement('li');
    userItem.classList.add('user-item');
    const userName = document.createElement('h3');
    userName.innerText = `Name: ${user.name}`;
    const userId = document.createElement('p');
    userId.innerText = `ID: ${user.id}`;
    const userAge = document.createElement('p');
    userAge.innerText = `Age: ${user.age}`;
    const userEmail = document.createElement('p');
    userEmail.innerText = `Email: ${user.email}`;
    const userCountry = document.createElement('p');
    userCountry.innerText = `Country: ${user.country}`;
    const userCompany = document.createElement('p');
    userCompany.innerText = `Company: ${user.company}`;
    const userBirthday = document.createElement('p');
    userBirthday.innerText = `Birthday: ${user.birthday}`;
    userItem.append(userName, userId, userAge, userEmail, userCountry, userCompany, userBirthday);
    userList.append(userItem);
  });
}

export { displayUsers };