const API = 'https://64da861be947d30a260b5c81.mockapi.io/api/v1/';
const METHODS = {
    POST: 'POST',
    GET: 'GET',
    PUT: 'PUT',
    DELETE: 'DELETE',
};

async function controller(action, method = METHODS.GET, body) {
    const URL = `${API}${action}`;

    const params = {
        method,
        headers: {
            'Content-Type': 'application/json',
        },
    };

    if (body) params.body = JSON.stringify(body);

    try {
        const response = await fetch(URL, params);
        if (!response.ok) {
            throw new Error(response.statusText)
        };
        const data = await response.json();

        return data;
    } catch (err) {
        console.log(err);
    }
}

const heroesForm = document.getElementById('heroesForm');
const heroesTable = document.getElementById('heroesTable');

// heroesForm.addEventListener('submit', async (event) => {
//     event.preventDefault();

//     // const heroName = heroesForm.querySelector('[data-name="heroName"]').value;
//     // const heroComics = heroesForm.querySelector('[data-name="heroComics"]').value;
//     // const heroFavourite = heroesForm.querySelector('[data-name="heroFavourite"]').checked;

//     // const existingHero = await controller(`heroes?name=${encodeURIComponent(heroName)}`);
//     // if (existingHero.length > 0) {
//     //     console.log(`Hero ${heroName} already exists in the database.`);
//     //     return;
//     // }

//     const newHero = {
//         name: heroName,
//         comics: heroComics,
//         favourite: heroFavourite
//     };

//     const addedHero = await controller('heroInfo', 'POST', newHero);
//     // appendHeroToTable(addedHero);
//     // heroesForm.reset();
// });

// const addHeroButton = document.querySelector('#addHeroButton');

// addHeroButton.addEventListener ('click', () => {
//     const newHero = {
//         name: heroName,
//         comics: heroComics,
//         favourite: heroFavourite
//     };

//     const addedHero = await controller('heroInfo', 'POST', newHero);
// })

// const addHeroButton = document.querySelector('#addHeroButton');

// addHeroButton.addEventListener('click', async () => {
//     e.preventDefault();
//     // Get the form input values here
//     const heroNameInput = heroesForm.querySelector('[data-name="heroName"]');
//     const heroComicsInput = heroesForm.querySelector('[data-name="heroComics"]');
//     const heroFavouriteInput = heroesForm.querySelector('[data-name="heroFavourite"]');

//     const heroName = heroNameInput.value;
//     const heroComics = heroComicsInput.value;
//     const heroFavourite = heroFavouriteInput.checked;

//     const newHero = {
//         name: heroName,
//         comics: heroComics,
//         favourite: heroFavourite
//     };

//     await controller('heroInfo', 'POST', newHero);
// });

// const addHeroButton = document.querySelector('#addHeroButton');

// addHeroButton.addEventListener('click', async () => {
//     const heroName = document.querySelector('#fullName').value;
//     const heroComics = document.querySelector('#universeSelect').value;
//     console.log(heroComics);
//     const heroFavourite = document.querySelector('#favourite').checked;

//     // const heroName = heroNameInput.value;
//     // const heroComics = heroComicsInput.value;
//     // const heroFavourite = heroFavouriteInput.checked;

//     const newHero = {heroName, heroComics, heroFavourite}

//     // const newHero = {
//     //     name: heroName,
//     //     comics: heroComics,
//     //     favourite: heroFavourite
//     // };

//     const hero = await controller('heroInfo', METHODS.POST, newHero);
//     appendHeroToTable(hero)
// });


// heroesTable.addEventListener('click', async (event) => {
//     if (event.target.tagName === 'BUTTON') {
//         const row = event.target.closest('tr');
//         const heroId = row.dataset.heroId;

//         if (event.target.textContent === 'Delete') {
//             await controller(`heroes/${heroId}`, 'DELETE');
//             row.remove();
//         }
//     }
// });

// // async function appendHeroToTable(hero) {
// //     const newRow = document.createElement('tr');
// //     newRow.dataset.heroId = hero.id;
// //     const heroName = document.createElement('td');
// //     heroName.innerText = `${hero.name}`;
// //     const heroComics = document.createElement('td');
// //     heroComics.innerText = `${hero.comics}`;
// //     const heroFavourite = document.createElement('td');
// //     heroFavourite.innerText = `${hero.favourite} ? 'checked' : ''`;
// //     const deleteButton = document.createElement('button');
// //     deleteButton.innerText = 'Delete';
// //     newRow.append(heroName, heroComics, heroFavourite, deleteButton);
// //     heroesTable.querySelector('tbody').append(newRow);

// //     //     <td>${hero.name}</td>
// //     //     <td>${hero.comics}</td>
// //     //     <td>
// //     //         <label class="heroFavouriteInput">
// //     //             Favourite: <input type="checkbox" ${hero.favourite ? 'checked' : ''}>
// //     //         </label>
// //     //     </td>
// //     //     <td><button>Delete</button></td>
// //     // `;

// // }

// function appendHeroToTable(hero) {
//     const newRow = document.createElement('tr');
//     newRow.dataset.heroId = hero.id;
    
//     const heroName = document.createElement('td');
//     heroName.innerText = hero.name;

//     const heroComics = document.createElement('td');
//     heroComics.innerText = hero.comics;

//     const heroFavourite = document.createElement('td');
//     heroFavourite.innerText = hero.favourite ? 'checked' : '';

//     const deleteButton = document.createElement('button');
//     deleteButton.innerText = 'Delete';

//     newRow.append(heroName, heroComics, heroFavourite, deleteButton);
//     heroesTable.querySelector('tbody').append(newRow);
// }

// async function init() {
//     const existingHeroes = await controller('heroes');
//     existingHeroes.forEach(hero => appendHeroToTable(hero));
// }

// init();

const addHeroButton = document.querySelector('#addHeroButton');

async function heroExists(heroName) {
    try {
        const heroes = await controller('heroInfo'); // Use the correct endpoint for retrieving heroes
        return heroes.some(hero => hero.name.toLowerCase().trim() === heroName.toLowerCase().trim());
    } catch (err) {
        console.log(err);
        return false;
    }
}

addHeroButton.addEventListener('click', async (e) => {
    e.preventDefault();
    const heroName = document.querySelector('#fullName').value;
    console.log(heroName);
    const heroComics = document.querySelector('#universeSelect').value;
    const heroFavourite = document.querySelector('#favourite').checked;

    // const existingHero = await controller(`heroes?name=${encodeURIComponent(heroName)}`);
    // if (existingHero.length > 0) {
    //     console.log(`Hero ${heroName} already exists in the database.`);
    //     return;
    // }

    const doesHeroExist = await heroExists(heroName);
    if (doesHeroExist) {
        console.log(`Hero ${heroName} already exists in the database.`);
        return;
    }

    

    const newHero = {
        name: heroName,
        comics: heroComics,
        favourite: heroFavourite,
    };

    const hero = await controller('heroInfo', METHODS.POST, newHero);
    console.log(hero);
    appendHeroToTable(hero);
    heroesForm.reset();
});

// function appendHeroToTable(hero) {
//     const newRow = document.createElement('tr');
//     newRow.dataset.heroId = hero.id;
    
//     const heroName = document.createElement('td');
//     heroName.innerText = hero.name;

//     const heroComics = document.createElement('td');
//     heroComics.innerText = hero.comics;

//     const heroFavourite = document.createElement('td');
//     heroFavourite.innerText = hero.favourite ? 'checked' : '';

//     const deleteButton = document.createElement('button');
//     deleteButton.innerText = 'Delete';

//     newRow.append(heroName, heroComics, heroFavourite, deleteButton);
//     heroesTable.querySelector('tbody').append(newRow);
// }

// function appendHeroToTable(hero) {
//     const newRow = document.createElement('tr');
//     newRow.dataset.heroId = hero.id;

//     const heroName = document.createElement('td');
//     heroName.innerText = hero.name;

//     const heroComics = document.createElement('td');
//     heroComics.innerText = hero.comics;

//     const heroFavouriteCell = document.createElement('td');
//     const heroFavouriteCheckbox = document.createElement('input');
//     heroFavouriteCheckbox.type = 'checkbox';
//     heroFavouriteCheckbox.checked = hero.favourite;
//     heroFavouriteCheckbox.className = 'favorite-checkbox';
//     heroFavouriteCell.append(heroFavouriteCheckbox);

//     const deleteButton = document.createElement('button');
//     deleteButton.innerText = 'Delete';

//     newRow.append(heroName, heroComics, heroFavouriteCell, deleteButton);
//     heroesTable.querySelector('tbody').append(newRow);

//     heroFavouriteCheckbox.addEventListener('click', async (event) => {
//         const newFavourite = event.target.checked;
//         const updatedHero = await controller(`heroInfo/${hero.id}`, METHODS.PUT, {
//             favourite: newFavourite,
//         });

//         updateHeroInTable(newRow, updatedHero);
//     });
// }

function appendHeroToTable(hero) {
    const newRow = document.createElement('tr');
    newRow.dataset.heroId = hero.id;

    const heroName = document.createElement('td');
    heroName.innerText = hero.name;

    const heroComics = document.createElement('td');
    heroComics.innerText = hero.comics;

    const heroFavouriteCell = document.createElement('td');

    const checkedImage = document.createElement('img');
    checkedImage.classList.add('image_size');
    checkedImage.src = './images/Smiling Face Emoji with Blushed Cheeks.png';
    checkedImage.className = 'checkbox-image';
    checkedImage.style.display = hero.favourite ? 'inline' : 'none';

    const uncheckedImage = document.createElement('img');
    uncheckedImage.classList.add('image_size');
    uncheckedImage.src = './images/Expressionless Face Emoji.png';
    uncheckedImage.className = 'checkbox-image';
    uncheckedImage.style.display = hero.favourite ? 'none' : 'inline';

    heroFavouriteCell.append(checkedImage, uncheckedImage);

    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';

    newRow.append(heroName, heroComics, heroFavouriteCell, deleteButton);
    heroesTable.querySelector('tbody').append(newRow);

    heroFavouriteCell.addEventListener('click', async () => {
        const newFavourite = !hero.favourite;
        const updatedHero = await controller(`heroInfo/${hero.id}`, METHODS.PUT, {
            favourite: newFavourite,
        });

        checkedImage.style.display = newFavourite ? 'inline' : 'none';
        uncheckedImage.style.display = newFavourite ? 'none' : 'inline';

        hero.favourite = newFavourite;
    });
}




async function init() {
    const existingHeroes = await controller('heroInfo');
    
    existingHeroes.forEach(hero => {
        appendHeroToTable(hero);
    });
}

init();



// function appendHeroToTable(hero) {
//     const newRow = document.createElement('tr');
//     newRow.dataset.heroId = hero.id;

//     const heroName = document.createElement('td');
//     heroName.innerText = hero.name;

//     const heroComics = document.createElement('td');
//     heroComics.innerText = hero.comics;

//     const heroFavouriteCell = document.createElement('td');

//     const checkedImage = document.createElement('img');
//     checkedImage.classList.add('image_size');
//     checkedImage.src = './images/Smiling Face Emoji with Blushed Cheeks.png';
//     checkedImage.className = 'checkbox-image';
//     checkedImage.style.display = hero.favourite ? 'inline' : 'none';

//     const uncheckedImage = document.createElement('img');
//     uncheckedImage.classList.add('image_size');
//     uncheckedImage.src = './images/Expressionless Face Emoji.png';
//     uncheckedImage.className = 'checkbox-image';
//     uncheckedImage.style.display = hero.favourite ? 'none' : 'inline';

//     heroFavouriteCell.append(checkedImage, uncheckedImage);

//     const deleteButton = document.createElement('button');
//     deleteButton.innerText = 'Delete';

//     newRow.append(heroName, heroComics, heroFavouriteCell, deleteButton);
//     heroesTable.querySelector('tbody').append(newRow);

//     heroFavouriteCell.addEventListener('click', async () => {
//         const newFavourite = !hero.favourite;
//         const updatedHero = await controller(`heroInfo/${hero.id}`, METHODS.PUT, {
//             favourite: newFavourite,
//         });

//         checkedImage.style.display = newFavourite ? 'inline' : 'none';
//         uncheckedImage.style.display = newFavourite ? 'none' : 'inline';

//         hero.favourite = newFavourite;
//     });
// }

// function appendHeroToTable(hero) {
//     const newRow = document.createElement('tr');
//     newRow.dataset.heroId = hero.id;

//     const heroName = document.createElement('td');
//     heroName.innerText = hero.name;

//     const heroComics = document.createElement('td');
//     heroComics.innerText = hero.comics;

//     const heroFavouriteCell = document.createElement('td');

//     const checkedImage = document.createElement('img');
//     checkedImage.classList.add('image_size');
//     checkedImage.src = './images/Smiling Face Emoji with Blushed Cheeks.png';
//     checkedImage.className = 'checkbox-image';
//     checkedImage.style.display = hero.favourite ? 'inline' : 'none';

//     const uncheckedImage = document.createElement('img');
//     uncheckedImage.classList.add('image_size');
//     uncheckedImage.src = './images/Expressionless Face Emoji.png';
//     uncheckedImage.className = 'checkbox-image';
//     uncheckedImage.style.display = hero.favourite ? 'none' : 'inline';

//     heroFavouriteCell.append(checkedImage, uncheckedImage);

//     const deleteButton = document.createElement('button');
//     deleteButton.innerText = 'Delete';

//     deleteButton.addEventListener('click', async () => {
//         await deleteHero(hero.id); // Make sure you have the deleteHero function
//         newRow.remove();
//     });

//     newRow.append(heroName, heroComics, heroFavouriteCell, deleteButton);
//     heroesTable.querySelector('tbody').append(newRow);

//     heroFavouriteCell.addEventListener('click', async () => {
//         const newFavourite = !hero.favourite;
//         const updatedHero = await controller(`heroInfo/${hero.id}`, METHODS.PUT, {
//             favourite: newFavourite,
//         });

//         checkedImage.style.display = newFavourite ? 'inline' : 'none';
//         uncheckedImage.style.display = newFavourite ? 'none' : 'inline';

//         hero.favourite = newFavourite;
//     });
// }

// ... (other code)