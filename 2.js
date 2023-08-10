// const usernameInput = document.getElementById('username');
// const searchBtn = document.getElementById('searchBtn');
// const randomBtn = document.getElementById('randomBtn');
// const userInfoDiv = document.getElementById('user-info');
// const userReposDiv = document.getElementById('user-repos');

// searchBtn.addEventListener('click', fetchUserData);
// randomBtn.addEventListener('click', fetchRandomUser);

// async function fetchUserData() {
//     const username = usernameInput.value.trim();
//     if (username === '') return;

//     // userInfoDiv.innerHTML = '';
//     // userReposDiv.innerHTML = '';

//     try {
//         const response = await fetch(`https://api.github.com/users/${username}`);
//         if(response.status === 404) {
//             displayError('NO USER WITH THIS NAME');
//             return;
//         }

//         const userData = await response.json();

//         displayUserData(userData);
//         fetchUserRepositories(username);

//         usernameInput.value = '';

//     } catch (error) {
//         displayError('User not found.');
//     }
// }

// function displayUserData(userData) {
//     userInfoDiv.innerHTML = '';

//     const userImage = document.createElement('img');
//     userImage.src = userData.avatar_url;
//     userImage.alt = userData.login;

//     const userLogin = document.createElement('h2');
//     userLogin.innerText = `Username: ${userData.login}`;

//     const userBio = document.createElement('p');
//     userBio.innerText = `Bio: ${userData.bio || 'No bio available'}`;

//     const userLocation = document.createElement('p');
//     userLocation.innerText = `Location: ${userData.location || 'N/A'}`;

//     const userFollowers = document.createElement('p');
//     userFollowers.innerText = `Followers: ${userData.followers}`;

//     userInfoDiv.append(userImage, userLogin, userBio, userLocation, userFollowers)
// }

// async function fetchUserRepositories(username) {
//     userReposDiv.innerHTML = '';

//     try {
//         const response = await fetch(`https://api.github.com/users/${username}/repos`);
//         const reposData = await response.json();

//         displayUserRepositories(reposData);
//     } catch (error) {
//         displayError('Error fetching repositories.');
//     }
// }

// function displayUserRepositories(reposData) {
//     userReposDiv.innerHTML = '';
//     reposData.forEach(repo => {
//         const repoCard = document.createElement('div');
//         repoCard.classList.add('repo-card');

//         const repoName = document.createElement('h3');
//         repoName.innerText = `Repository Name: ${repo.name}`;

//         const repoDescription = document.createElement('p');
//         repoDescription.innerText = `Repository Description: ${repo.description || 'No description available.'}`;

//         const repoLanguage = document.createElement('p');
//         repoLanguage.innerText = `Language: ${repo.language || 'N/A'}`;

//         const repoStars = document.createElement('p');
//         repoStars.innerText = `Stars: ${repo.stargazers_count}`;
        
//         repoCard.append(repoName, repoDescription, repoLanguage, repoStars);
//         userReposDiv.appendChild(repoCard);
//     });
// }

// async function fetchRandomUser() {
//     try {
//         const response = await fetch('https://api.github.com/users');
//         const usersData = await response.json();
//         const randomIndex = Math.floor(Math.random() * usersData.length);
//         const randomUser = usersData[randomIndex];

//         displayUserData(randomUser);
//         fetchUserRepositories(randomUser.login); 
        
//     } catch (error) {
//         displayError('Error fetching random user.');
//     }
// }

// function displayError(message) {
//     const errorMessage = document.createElement('p');
//     errorMessage.classList.add('error');
//     errorMessage.innerText = message;
//     userInfoDiv.append(errorMessage);
//     userReposDiv.innerHTML = '';
// }

// const usernameInput = document.getElementById('username');
// const searchBtn = document.getElementById('searchBtn');
// const randomBtn = document.getElementById('randomBtn');
// const userInfoDiv = document.getElementById('user-info');
// const userReposDiv = document.getElementById('user-repos');

// searchBtn.addEventListener('click', fetchUserData);
// randomBtn.addEventListener('click', fetchRandomUser);

// async function fetchAndDisplayUserData(username) {
//     try {
//         const response = await fetch(`https://api.github.com/users/${username}`);
//         if (response.status === 404) {
//             displayError('NO USER WITH THIS NAME');
//             return;
//         }

//         const userData = await response.json();

//         displayUserData(userData);
//         fetchUserRepositories(username);

//         usernameInput.value = '';

//     } catch (error) {
//         displayError('User not found.');
//     }
// }

// async function fetchUserData() {
//     const username = usernameInput.value.trim();
//     if (username === '') return;

//     await fetchAndDisplayUserData(username);
// }

// async function fetchRandomUser() {
//     try {
//         const response = await fetch('https://api.github.com/users');
//         const usersData = await response.json();
//         const randomIndex = Math.floor(Math.random() * usersData.length);
//         const randomUser = usersData[randomIndex];

//         await fetchAndDisplayUserData(randomUser.login);

//     } catch (error) {
//         displayError('Error fetching random user.');
//     }
// }

// function displayUserData(userData) {
//     userInfoDiv.innerHTML = '';

//     const userImage = document.createElement('img');
//     userImage.src = userData.avatar_url;
//     userImage.alt = userData.login;

//     const userLogin = document.createElement('h2');
//     userLogin.innerText = `Username: ${userData.login}`;

//     const userBio = document.createElement('p');
//     userBio.innerText = `Bio: ${userData.bio || 'No bio available'}`;

//     const userLocation = document.createElement('p');
//     userLocation.innerText = `Location: ${userData.location || 'N/A'}`;

//     const userFollowers = document.createElement('p');
//     userFollowers.innerText = `Followers: ${userData.followers}`;

//     userInfoDiv.append(userImage, userLogin, userBio, userLocation, userFollowers);
// }

// async function fetchUserRepositories(username) {
//     userReposDiv.innerHTML = '';

//     try {
//         const response = await fetch(`https://api.github.com/users/${username}/repos`);
//         const reposData = await response.json();

//         displayUserRepositories(reposData);
//     } catch (error) {
//         displayError('Error fetching repositories.');
//     }
// }

// function displayUserRepositories(reposData) {
//     userReposDiv.innerHTML = '';
//     reposData.forEach(repo => {
//         const repoCard = document.createElement('div');
//         repoCard.classList.add('repo-card');

//         const repoName = document.createElement('h3');
//         repoName.innerText = `Repository Name: ${repo.name}`;

//         const repoDescription = document.createElement('p');
//         repoDescription.innerText = `Repository Description: ${repo.description || 'No description available.'}`;

//         const repoLanguage = document.createElement('p');
//         repoLanguage.innerText = `Language: ${repo.language || 'N/A'}`;

//         const repoStars = document.createElement('p');
//         repoStars.innerText = `Stars: ${repo.stargazers_count}`;
        
//         repoCard.append(repoName, repoDescription, repoLanguage, repoStars);
//         userReposDiv.appendChild(repoCard);
//     });
// }

// function displayError(message) {
//     const errorMessage = document.createElement('p');
//     errorMessage.classList.add('error');
//     errorMessage.innerText = message;
//     userInfoDiv.append(errorMessage);
//     userReposDiv.innerHTML = '';
// }

// const usernameInput = document.getElementById('username');
// const searchBtn = document.getElementById('searchBtn');
// const randomBtn = document.getElementById('randomBtn');
// const userInfoDiv = document.getElementById('user-info');
// const userReposDiv = document.getElementById('user-repos');

// searchBtn.addEventListener('click', fetchUserData);
// randomBtn.addEventListener('click', fetchRandomUser);

// async function fetchAndDisplayUserData(username) {
//     try {
//         const response = await fetch(`https://api.github.com/users/${username}`);
//         if (response.status === 404) {
//             throw new Error('NO USER WITH THIS NAME');
//             // displayError('NO USER WITH THIS NAME');
//             // return;
//         }

//         const userData = await response.json();

//         displayUserData(userData);
//         fetchUserRepositories(username);

//         usernameInput.value = '';

//     } catch (error) {
//         userInfoDiv.innerHTML = '';
//         userReposDiv.innerHTML = '';

//         displayError(error.message);
//     }
// }

// async function fetchUserData() {
//     const username = usernameInput.value.trim();
//     if (username === '') return;

//     await fetchAndDisplayUserData(username);
// }

// async function fetchRandomUser() {
//     try {
//         const response = await fetch('https://api.github.com/users');
//         const usersData = await response.json();
//         const randomIndex = Math.floor(Math.random() * usersData.length);
//         const randomUser = usersData[randomIndex];

//         await fetchAndDisplayUserData(randomUser.login);

//     } catch (error) {
//         displayError('Error fetching random user.');
//     }
// }

// function displayUserData(userData) {
//     userInfoDiv.innerHTML = '';

//     const userCard = document.createElement('div');
//     userCard.classList.add('user_card');

//     const userImageWrapper = document.createElement('div');
//     userImageWrapper.classList.add('user_image_wrapper');
//     userImageWrapper.style.backgroundColor = getRandomColor();

//     const userImage = document.createElement('img');
//     userImage.src = userData.avatar_url;
//     userImage.alt = userData.login;
//     userImage.classList.add('user_image');

//     const userInfoWrapper = document.createElement('div');
//     userInfoWrapper.classList.add('user_info_wrapper'); 

//     const userLogin = document.createElement('h2');
//     userLogin.innerText = `Username: ${userData.login}`;

//     const userBio = document.createElement('p');
//     userBio.innerText = `Bio: ${userData.bio || 'No bio available'}`;

//     const userLocation = document.createElement('p');
//     userLocation.innerText = `Location: ${userData.location || 'N/A'}`;

//     const userFollowers = document.createElement('p');
//     userFollowers.innerText = `Followers: ${userData.followers}`;

//     userImageWrapper.append(userImage);
//     userInfoWrapper.append(userLogin, userBio, userLocation, userFollowers)
//     userCard.append(userImageWrapper, userInfoWrapper);
//     userInfoDiv.append(userCard);
// }

// async function fetchUserRepositories(username) {
//     userReposDiv.innerHTML = '';

//     try {
//         const response = await fetch(`https://api.github.com/users/${username}/repos`);
//         const reposData = await response.json();

//         displayUserRepositories(reposData);
//     } catch (error) {
//         displayError('Error fetching repositories.');
//     }
// }

// function displayUserRepositories(reposData) {
//     userReposDiv.innerHTML = '';
//     reposData.forEach(repo => {
//         const repoCard = document.createElement('div');
//         repoCard.classList.add('repo-card');

//         const repoName = document.createElement('h3');
//         repoName.innerText = `Repository Name: ${repo.name}`;

//         const repoDescription = document.createElement('p');
//         repoDescription.innerText = `Repository Description: ${repo.description || 'No description available.'}`;

//         const repoLanguage = document.createElement('p');
//         repoLanguage.innerText = `Language: ${repo.language || 'N/A'}`;

//         const repoStars = document.createElement('p');
//         repoStars.innerText = `Stars: ${repo.stargazers_count}`;
        
//         repoCard.append(repoName, repoDescription, repoLanguage, repoStars);
//         userReposDiv.appendChild(repoCard);
//     });
// }

// function displayError(message) {
//     const errorMessage = document.createElement('p');
//     errorMessage.classList.add('error');
//     errorMessage.innerText = message;
//     userInfoDiv.append(errorMessage);
//     userReposDiv.innerHTML = '';
// }

// function getRandomColor() {
//     const letters = '0123456789ABCDEF';
//     let color = '#';
//     for (let i = 0; i < 6; i++) {
//         color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
// }

// const usernameInput = document.getElementById('username');
// const searchBtn = document.getElementById('searchBtn');
// const randomBtn = document.getElementById('randomBtn');
// const userInfoDiv = document.getElementById('user-info');
// const userReposDiv = document.getElementById('user-repos');

// searchBtn.addEventListener('click', fetchUserData);
// randomBtn.addEventListener('click', fetchRandomUser);
// usernameInput.addEventListener('input', validateInput);

// function validateInput() {
//     const username = usernameInput.value.trim();
//     if (validateUsername(username)) {
//         usernameInput.style.border = '1px solid #ccc';
//         usernameInput.style.color = '#000';
//         searchBtn.disabled = false;
//     } else {
//         usernameInput.style.border = '1px solid red';
//         usernameInput.style.color = 'red';
//         searchBtn.disabled = true;
//     }
// }

// function fetchUserData() {
//     const username = usernameInput.value.trim();
//     fetchAndDisplayUserData(username);
// }

// function validateUsername(username) {
//     const forbiddenChars = /[@#$%^&*()_+={}[\]|;:'",<>/\\]/;
//     const russianLetters = /[а-яА-Я]/;
//     return !forbiddenChars.test(username) && !russianLetters.test(username);
// }

// async function fetchAndDisplayUserData(username) {
//     try {
//         const response = await fetch(`https://api.github.com/users/${username}`);
//         if (response.status === 404) {
//             throw new Error('NO USER WITH THIS NAME');
//         }

//         const userData = await response.json();

//         displayUserData(userData);
//         fetchUserRepositories(username);

//         usernameInput.value = '';

//     } catch (error) {
//         userInfoDiv.innerHTML = '';
//         userReposDiv.innerHTML = '';

//         displayError(error.message);
//     }
// }

// async function fetchRandomUser() {
//     try {
//         const response = await fetch('https://api.github.com/users');
//         const usersData = await response.json();
//         const randomIndex = Math.floor(Math.random() * usersData.length);
//         const randomUser = usersData[randomIndex];

//         await fetchAndDisplayUserData(randomUser.login);

//     } catch (error) {
//         displayError('Error fetching random user.');
//     }
// }

// function displayUserData(userData) {
//     userInfoDiv.innerHTML = '';

//     const userCard = document.createElement('div');
//     userCard.classList.add('user_card');

//     const userImageWrapper = document.createElement('div');
//     userImageWrapper.classList.add('user_image_wrapper');
//     userImageWrapper.style.backgroundColor = getRandomColor();

//     const userImage = document.createElement('img');
//     userImage.src = userData.avatar_url;
//     userImage.alt = userData.login;
//     userImage.classList.add('user_image');

//     const userInfoWrapper = document.createElement('div');
//     userInfoWrapper.classList.add('user_info_wrapper');

//     const userLogin = document.createElement('h2');
//     userLogin.innerText = `Username: ${userData.login}`;

//     const userBio = document.createElement('p');
//     userBio.innerText = `Bio: ${userData.bio || 'No bio available'}`;

//     const userLocation = document.createElement('p');
//     userLocation.innerText = `Location: ${userData.location || 'N/A'}`;

//     const userFollowers = document.createElement('p');
//     userFollowers.innerText = `Followers: ${userData.followers}`;

//     userImageWrapper.append(userImage);
//     userInfoWrapper.append(userLogin, userBio, userLocation, userFollowers);
//     userCard.append(userImageWrapper, userInfoWrapper);
//     userInfoDiv.append(userCard);
// }

// async function fetchUserRepositories(username) {
//     userReposDiv.innerHTML = '';

//     try {
//         const response = await fetch(`https://api.github.com/users/${username}/repos`);
//         const reposData = await response.json();

//         displayUserRepositories(reposData);
//     } catch (error) {
//         displayError('Error fetching repositories.');
//     }
// }

// function displayUserRepositories(reposData) {
//     userReposDiv.innerHTML = '';
//     reposData.forEach(repo => {
//         const repoCard = document.createElement('div');
//         repoCard.classList.add('repo-card');

//         const repoName = document.createElement('h3');
//         repoName.innerText = `Repository Name: ${repo.name}`;

//         const repoDescription = document.createElement('p');
//         repoDescription.innerText = `Repository Description: ${repo.description || 'No description available.'}`;

//         const repoLanguage = document.createElement('p');
//         repoLanguage.innerText = `Language: ${repo.language || 'N/A'}`;

//         const repoStars = document.createElement('p');
//         repoStars.innerText = `Stars: ${repo.stargazers_count}`;

//         repoCard.append(repoName, repoDescription, repoLanguage, repoStars);
//         userReposDiv.appendChild(repoCard);
//     });
// }

// function displayError(message) {
//     const errorMessage = document.createElement('p');
//     errorMessage.classList.add('error');
//     errorMessage.innerText = message;
//     userInfoDiv.append(errorMessage);
//     userReposDiv.innerHTML = '';
// }

// function getRandomColor() {
//     const letters = '0123456789ABCDEF';
//     let color = '#';
//     for (let i = 0; i < 6; i++) {
//         color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
// }


const usernameInput = document.getElementById('username');
const searchBtn = document.getElementById('searchBtn');
const randomBtn = document.getElementById('randomBtn');
const userInfoDiv = document.getElementById('user-info');
const userReposDiv = document.getElementById('user-repos');

searchBtn.addEventListener('click', fetchUserData);
randomBtn.addEventListener('click', fetchRandomUser);
usernameInput.addEventListener('input', handleInput);

searchBtn.disabled = true;

let isUsernameInvalid = false;

function handleInput() {
    const username = usernameInput.value.trim();
    if (validateUsername(username)) {
        if (isUsernameInvalid) {
            clearErrorMessage();
            isUsernameInvalid = false;
            usernameInput.style.border = '1px solid #ccc';
            usernameInput.style.color = 'black';
        }
        enableSearchButton();
    } else {
        if (!isUsernameInvalid) {
            userInfoDiv.innerHTML = '';
            userReposDiv.innerHTML = '';

            displayError('Invalid username format.');
            isUsernameInvalid = true;
            usernameInput.style.border = '1px solid red';
            usernameInput.style.color = 'red';
        }
        disableSearchButton();
    }
}

// function fetchUserData() {
//     const username = usernameInput.value.trim();
//     if (username === '') {
//         return;
//     }
    
//     fetchAndDisplayUserData(username);
// }

async function fetchUserData() {
    const username = usernameInput.value.trim();
    if (username === '') {
        return;
    }

    userInfoDiv.classList.add('fade-out');
    userReposDiv.classList.add('fade-out');

    await new Promise(resolve => setTimeout(resolve, 300));

    userInfoDiv.innerHTML = '';
    userReposDiv.innerHTML = '';

    await fetchAndDisplayUserData(username);

    userInfoDiv.classList.remove('fade-out');
    userReposDiv.classList.remove('fade-out');
}

function validateUsername(username) {
    const forbiddenChars = /[@#$%^&*()_+={}[\]|;:'",<>/\\]/;
    const russianLetters = /[а-яА-Я]/;
    return !forbiddenChars.test(username) && !russianLetters.test(username);
}

async function fetchAndDisplayUserData(username) {
    try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        if (response.status === 404) {
            throw new Error('NO USER WITH THIS NAME');
        }

        const userData = await response.json();

        clearErrorMessage();
        await fetchUserRepositories(username);
        displayUserData(userData);

        usernameInput.value = '';
        disableSearchButton();

    } catch (error) {
        userInfoDiv.innerHTML = '';
        userReposDiv.innerHTML = '';

        displayError(error.message);
        disableSearchButton();
    }
}

// async function fetchRandomUser() {
//     try {
//         userInfoDiv.innerHTML = '';
//         userReposDiv.innerHTML = '';

//         clearErrorMessage();
//         isUsernameInvalid = false;
//         usernameInput.style.border = '1px solid #ccc';
//         usernameInput.style.color = 'black';
        
//         const response = await fetch('https://api.github.com/users');
//         const usersData = await response.json();
//         const randomIndex = Math.floor(Math.random() * usersData.length);
//         const randomUser = usersData[randomIndex];

//         await fetchAndDisplayUserData(randomUser.login);

//         // const [userData, reposData] = await Promise.all([
//         //     fetchAndDisplayUserData(randomUser.login),
//         //     fetchUserRepositories(randomUser.login)
//         // ]);

//     } catch (error) {
//         displayError('Error fetching random user.');
//     }
// }

async function fetchRandomUser() {
    try {
        userInfoDiv.classList.add('fade-out');
        userReposDiv.classList.add('fade-out');

        await new Promise(resolve => setTimeout(resolve, 300));

        userInfoDiv.innerHTML = '';
        userReposDiv.innerHTML = '';

        const response = await fetch('https://api.github.com/users');
        const usersData = await response.json();
        const randomIndex = Math.floor(Math.random() * usersData.length);
        const randomUser = usersData[randomIndex];

        await fetchAndDisplayUserData(randomUser.login);

        userInfoDiv.classList.toggle('fade-out');
        userReposDiv.classList.toggle('fade-out');

    } catch (error) {
        displayError('Error fetching random user.');
    }
}


function displayUserData(userData) {
    userInfoDiv.innerHTML = '';

    const userCard = document.createElement('div');
    userCard.classList.add('user_card');

    const userImageWrapper = document.createElement('div');
    userImageWrapper.classList.add('user_image_wrapper');
    userImageWrapper.style.backgroundColor = getRandomColor();

    const userImage = document.createElement('img');
    userImage.src = userData.avatar_url;
    userImage.alt = userData.login;
    userImage.classList.add('user_image');

    const userInfoWrapper = document.createElement('div');
    userInfoWrapper.classList.add('user_info_wrapper');

    const userLogin = document.createElement('h2');
    userLogin.innerText = `Username: ${userData.login}`;

    const userBio = document.createElement('p');
    userBio.innerText = `Bio: ${userData.bio || 'No bio available'}`;

    const userLocation = document.createElement('p');
    userLocation.innerText = `Location: ${userData.location || 'N/A'}`;

    const userFollowers = document.createElement('p');
    userFollowers.innerText = `Followers: ${userData.followers}`;

    userImageWrapper.append(userImage);
    userInfoWrapper.append(userLogin, userBio, userLocation, userFollowers);
    userCard.append(userImageWrapper, userInfoWrapper);
    userInfoDiv.append(userCard);
}

async function fetchUserRepositories(username) {
    userReposDiv.innerHTML = '';

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

        const repoName = document.createElement('h3');
        repoName.innerText = `Repository Name: ${repo.name}`;

        const repoDescription = document.createElement('p');
        repoDescription.innerText = `Repository Description: ${repo.description || 'No description available.'}`;

        const repoLanguage = document.createElement('p');
        repoLanguage.innerText = `Language: ${repo.language || 'N/A'}`;

        const repoStars = document.createElement('p');
        repoStars.innerText = `Stars: ${repo.stargazers_count}`;

        repoCard.append(repoName, repoDescription, repoLanguage, repoStars);
        userReposDiv.appendChild(repoCard);
    });
}

function displayError(message) {
    const errorMessage = document.createElement('p');
    errorMessage.classList.add('error');
    errorMessage.innerText = message;
    userInfoDiv.append(errorMessage);
    userReposDiv.innerHTML = '';
}

function clearErrorMessage() {
    const errorMessage = userInfoDiv.querySelector('.error');
    if (errorMessage) {
        errorMessage.remove();
    }
}

function enableSearchButton() {
    searchBtn.disabled = false;
}

function disableSearchButton() {
    searchBtn.disabled = true;
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


