// const apiKey = 'AIzaSyBOrRuKwjpf6fqaCJjEdu-wM8b-3UHE0fc';

// function fetchBooks(searchQuery) {
//     const url = `https://www.googleapis.com/books/v1/volumes?q=${searchQuery}&key=${apiKey}`;
    
//     return fetch(url)
//       .then(response => {
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return response.json();
//       })
//       .then(data => data.items || [])
//       .catch(error => {
//         console.error('Error fetching data:', error);
//         displayError('Woopsie, something went wrong. Our minions are working to solve the problem!');
//         return [];
//       });
//   }

// function displayBooks(books) {
//   const container = document.getElementById('bookList');
//   container.innerHTML = '';
  
//   books.forEach(book => {
//     const title = book.volumeInfo.title;
//     const authors = book.volumeInfo.authors ? `By: ${book.volumeInfo.authors.join(', ')}` : 'Unknown Author';
//     const description = book.volumeInfo.description || 'No description available';
//     const thumbnail = book.volumeInfo.imageLinks?.thumbnail || 'https://via.placeholder.com/128x192';
    
//     const bookCard = document.createElement('div');
//     bookCard.classList.add('book_card');

//     const bookTitle = document.createElement('h3');
//     bookTitle.classList.add('book_text');
//     bookTitle.innerText = title;

//     const bookAuthor = document.createElement('p');
//     bookAuthor.classList.add('book_text');
//     bookAuthor.innerText = authors;

//     const bookDescription = document.createElement('p');
//     bookDescription.classList.add('book_description');
//     bookDescription.innerText = description;

//     const bookThumbnail = document.createElement('img');
//     bookThumbnail.src = thumbnail;

//     bookCard.append(bookTitle, bookAuthor, bookDescription, bookThumbnail);
    
//     container.append(bookCard);

//     document.body.append(container);
//   });
// }

// function displayError(message) {
//     const errorContainer = document.getElementById('errorContainer');
//     errorContainer.textContent = message;
//     errorContainer.style.display = 'block';
//   }
  
//   function clearError() {
//     const errorContainer = document.getElementById('errorContainer');
//     errorContainer.style.display = 'none';
//   }

// function handleSubmit(event) {
//   event.preventDefault();
//   const searchQuery = document.getElementById('searchInput').value.trim();
//   if (searchQuery) {
//     fetchBooks(searchQuery)
//       .then(displayBooks)
//       .catch(error => console.error('Error:', error));
//   }
// }

// document.getElementById('searchForm').addEventListener('submit', handleSubmit);

// async function getUser() {
//     const response = await fetch(`https://api.github.com/users/${login}`);
//     const data = response.json();
// }

const usernameInput = document.getElementById('username');
const searchBtn = document.getElementById('searchBtn');
const randomBtn = document.getElementById('randomBtn');
const userInfoDiv = document.getElementById('user-info');
const userReposDiv = document.getElementById('user-repos');

searchBtn.addEventListener('click', fetchUserData);
randomBtn.addEventListener('click', fetchRandomUser);

async function fetchUserData() {
    const username = usernameInput.value.trim();
    if (username === '') return;

    try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        const userData = await response.json();

        displayUserData(userData);
        fetchUserRepositories(username);
    } catch (error) {
        displayError('User not found.');
    }
}

function displayUserData(userData) {
    userInfoDiv.innerHTML = `
        <img src="${userData.avatar_url}" alt="${userData.login}">
        <h2>${userData.login}</h2>
        <p>${userData.bio || 'No bio available.'}</p>
        <p>Location: ${userData.location || 'N/A'}</p>
        <p>Followers: ${userData.followers}</p>
    `;
}

async function fetchUserRepositories(username) {
    try {
        const response = await fetch(`https://api.github.com/users/${username}/repos`);
        const reposData = await response.json();

        displayUserRepositories(reposData);
    } catch (error) {
        displayError('Error fetching repositories.');
    }
}

function displayUserRepositories(reposData) {
    userReposDiv.innerHTML = '';
    reposData.forEach(repo => {
        const repoCard = document.createElement('div');
        repoCard.classList.add('repo-card');
        repoCard.innerHTML = `
            <h3>${repo.name}</h3>
            <p>${repo.description || 'No description available.'}</p>
            <p>Language: ${repo.language || 'N/A'}</p>
            <p>Stars: ${repo.stargazers_count}</p>
        `;
        userReposDiv.appendChild(repoCard);
    });
}

async function fetchRandomUser() {
    try {
        const response = await fetch('https://api.github.com/users');
        const usersData = await response.json();
        const randomIndex = Math.floor(Math.random() * usersData.length);
        const randomUser = usersData[randomIndex];

        fetchUserData(randomUser.login);
    } catch (error) {
        displayError('Error fetching random user.');
    }
}

function displayError(message) {
    userInfoDiv.innerHTML = `<p class="error">${message}</p>`;
    userReposDiv.innerHTML = '';
}
