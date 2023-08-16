const accessToken = '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';
const usernameInput = document.getElementById('username');
const searchBtn = document.getElementById('searchBtn');
const randomBtn = document.getElementById('randomBtn');
const userInfoDiv = document.getElementById('user-info');
const userReposDiv = document.getElementById('user-repos');

searchBtn.addEventListener('click', fetchUserData);
randomBtn.addEventListener('click', fetchRandomUser);
usernameInput.addEventListener('input', handleInput);

usernameInput.addEventListener('keyup', function(event) {
  if (event.key === 'Enter' && !searchBtn.disabled) {
    fetchUserData();
  }
});

searchBtn.disabled = true;

let isUsernameInvalid = false;

function handleInput() {
  const username = usernameInput.value.trim();

  isUsernameInvalid = false;
  clearErrorMessage();
  resetInputStyle();

  if (username === '') {
      disableSearchButton();
  } else if (validateUsername(username)) {
      enableSearchButton();
  } else {
      if (!isUsernameInvalid) {
          displayError('Invalid username format');
          isUsernameInvalid = true;
          usernameInput.style.border = '1px solid red';
          usernameInput.style.color = 'red';
      }
      disableSearchButton();
  }
}

async function fetchUserData() {
    const username = usernameInput.value.trim();
    if (username === '') {
        return;
    }

    toggleFadeEffect(true);

    await new Promise(resolve => setTimeout(resolve, 200));

    userInfoDiv.innerHTML = '';
    userReposDiv.innerHTML = '';

    await fetchAndDisplayUserData(username);

    toggleFadeEffect(false);
}

function validateUsername(username) {
    const forbiddenChars = /[@#$%^&*()_+={}[\]|;:'",<>/\\]/;
    const russianLetters = /[а-яА-Я]/;
    return !forbiddenChars.test(username) && !russianLetters.test(username);
}

async function fetchAndDisplayUserData(username) {
    try {
        const response = await fetch(`https://api.github.com/users/${username}`, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        });
        
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

async function fetchRandomUser() {
  try {
      toggleFadeEffect(true);

      await new Promise(resolve => setTimeout(resolve, 200));

      userInfoDiv.innerHTML = '';
      userReposDiv.innerHTML = '';

      await tryFetchRandomUser();

      toggleFadeEffect(false);
  } catch (error) {
      displayError(error.message);
  }
}

async function tryFetchRandomUser() {
  const randomUserId = Math.floor(Math.random() * 1000000);
  const response = await fetch(`https://api.github.com/user/${randomUserId}`, {
      headers: {
          Authorization: `Bearer ${accessToken}`
      }
  });

  if (response.status === 404) {
      // const error = new Error(`User not found for ID: ${randomUserId}`);
      // displayError(error.message);
      // console.error(error.message);
      await tryFetchRandomUser();
  } else if (!response.ok) {
      throw new Error('Network error while fetching random user.');
  } else {
      const randomUserData = await response.json();
      await fetchAndDisplayUserData(randomUserData.login);
  }
}

// async function tryFetchRandomUser() {
//   const maxRetries = 5;
//   let retryCount = 0;

//   while (retryCount < maxRetries) {
//     const randomUserId = Math.floor(Math.random() * 1000000);
//     const response = await fetch(`https://api.github.com/user/${randomUserId}`, {
//       headers: {
//         Authorization: `Bearer ${accessToken}`,
//       },
//     });

//     if (response.status === 404) {
//       retryCount++;
//       if (retryCount === maxRetries) {
//         displayError('Max retries reached. Unable to fetch random user.');
//       }
//     } else if (!response.ok) {
//       throw new Error('Network error while fetching random user.');
//     } else {
//       const randomUserData = await response.json();
//       await fetchAndDisplayUserData(randomUserData.login);
//       break;
//     }
//   }
// }

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
        const response = await fetch(`https://api.github.com/users/${username}/repos`, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        });
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
  const errorMessage = document.getElementById('error-message');
  errorMessage.innerText = message;
  errorMessage.classList.add('error');
}

function clearErrorMessage() {
  const errorMessage = document.getElementById('error-message');
  errorMessage.innerText = '';
  // errorMessage.classList.remove('error');
}

function resetInputStyle() {
  isUsernameInvalid = false;
  usernameInput.style.border = '1px solid #ccc';
  usernameInput.style.color = 'black';
}

function enableSearchButton() {
    searchBtn.disabled = false;
}

function disableSearchButton() {
    searchBtn.disabled = true;
}

function toggleFadeEffect(addEffect) {
  if (addEffect) {
    userInfoDiv.classList.add('fade-out');
    userReposDiv.classList.add('fade-out');
  } else {
    userInfoDiv.classList.remove('fade-out');
    userReposDiv.classList.remove('fade-out');
  }
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}




// const usernameInput = document.getElementById('username');
// const searchBtn = document.getElementById('searchBtn');
// const randomBtn = document.getElementById('randomBtn');
// const userInfoDiv = document.getElementById('user-info');
// const userReposDiv = document.getElementById('user-repos');

// searchBtn.addEventListener('click', fetchUserData);
// randomBtn.addEventListener('click', fetchRandomUser);
// usernameInput.addEventListener('input', handleInput);

// usernameInput.addEventListener('keyup', function(event) {
//   if (event.key === 'Enter' && !searchBtn.disabled) {
//     fetchUserData();
//   }
// });

// searchBtn.disabled = true;

// let isUsernameInvalid = false;

// function handleInput() {
//   const username = usernameInput.value.trim();

//   isUsernameInvalid = false;
//   clearErrorMessage();
//   resetInputStyle();

//   if (username === '') {
//       disableSearchButton();
//   } else if (validateUsername(username)) {
//       enableSearchButton();
//   } else {
//       if (!isUsernameInvalid) {
//           displayError('Invalid username format');
//           isUsernameInvalid = true;
//           usernameInput.style.border = '1px solid red';
//           usernameInput.style.color = 'red';
//       }
//       disableSearchButton();
//   }
// }

// async function fetchUserData() {
//     const username = usernameInput.value.trim();
//     if (username === '') {
//         return;
//     }

//     toggleFadeEffect(true);

//     await new Promise(resolve => setTimeout(resolve, 200));

//     userInfoDiv.innerHTML = '';
//     userReposDiv.innerHTML = '';

//     await fetchAndDisplayUserData(username);

//     toggleFadeEffect(false);
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

//         clearErrorMessage();
//         await fetchUserRepositories(username);
//         displayUserData(userData);

//         usernameInput.value = '';
//         disableSearchButton();

//     } catch (error) {
//         userInfoDiv.innerHTML = '';
//         userReposDiv.innerHTML = '';

//         displayError(error.message);
//         disableSearchButton();
//     }
// }

// async function fetchRandomUser() {
//   try {
//       toggleFadeEffect(true);

//       await new Promise(resolve => setTimeout(resolve, 200));

//       userInfoDiv.innerHTML = '';
//       userReposDiv.innerHTML = '';

//       await tryFetchRandomUser();

//       toggleFadeEffect(false);
//   } catch (error) {
//       displayError(error.message);
//   }
// }

// async function tryFetchRandomUser() {
//   const randomUserId = Math.floor(Math.random() * 1000000);
//   const response = await fetch(`https://api.github.com/user/${randomUserId}`);

//   if (response.status === 404) {
//       // const error = new Error(`User not found for ID: ${randomUserId}`);
//       // displayError(error.message);
//       // console.error(error.message);
//       await tryFetchRandomUser();
//   } else if (!response.ok) {
//       throw new Error('Network error while fetching random user.');
//   } else {
//       const randomUserData = await response.json();
//       await fetchAndDisplayUserData(randomUserData.login);
//   }
// }

// // async function tryFetchRandomUser() {
// //   const maxRetries = 5;
// //   let retryCount = 0;

// //   while (retryCount < maxRetries) {
// //     const randomUserId = Math.floor(Math.random() * 1000000);
// //     const response = await fetch(`https://api.github.com/user/${randomUserId}`);

// //     if (response.status === 404) {
// //       retryCount++;
// //       if (retryCount === maxRetries) {
// //         displayError('Max retries reached. Unable to fetch random user.');
// //       }
// //     } else if (!response.ok) {
// //       throw new Error('Network error while fetching random user.');
// //     } else {
// //       const randomUserData = await response.json();
// //       await fetchAndDisplayUserData(randomUserData.login);
// //       break;
// //     }
// //   }
// // }

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
//   const errorMessage = document.getElementById('error-message');
//   errorMessage.innerText = message;
//   errorMessage.classList.add('error');
// }

// function clearErrorMessage() {
//   const errorMessage = document.getElementById('error-message');
//   errorMessage.innerText = '';
//   // errorMessage.classList.remove('error');
// }

// function resetInputStyle() {
//   isUsernameInvalid = false;
//   usernameInput.style.border = '1px solid #ccc';
//   usernameInput.style.color = 'black';
// }

// function enableSearchButton() {
//     searchBtn.disabled = false;
// }

// function disableSearchButton() {
//     searchBtn.disabled = true;
// }

// function toggleFadeEffect(addEffect) {
//   if (addEffect) {
//     userInfoDiv.classList.add('fade-out');
//     userReposDiv.classList.add('fade-out');
//   } else {
//     userInfoDiv.classList.remove('fade-out');
//     userReposDiv.classList.remove('fade-out');
//   }
// }

// function getRandomColor() {
//     const letters = '0123456789ABCDEF';
//     let color = '#';
//     for (let i = 0; i < 6; i++) {
//         color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
// }