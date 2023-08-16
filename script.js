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

const heroesForm = document.querySelector('#heroesForm');
const heroesTable = document.querySelector('#heroesTable');
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

function appendHeroToTable(hero) {
    const newRow = document.createElement('tr');
    newRow.dataset.heroId = hero.id;

    const heroName = document.createElement('td');
    heroName.innerText = hero.name;

    const heroComics = document.createElement('td');
    heroComics.innerText = hero.comics;

    const heroFavouriteCell = document.createElement('td');

    const checkedImage = document.createElement('img');
    checkedImage.classList.add('image_size', 'checkbox-image', 'hide');
    checkedImage.src = './images/Smiling Face Emoji with Blushed Cheeks.png';

    const uncheckedImage = document.createElement('img');
    uncheckedImage.classList.add('image_size', 'checkbox-image', 'hide');
    uncheckedImage.src = './images/Expressionless Face Emoji.png';

    if (hero.favourite) {
        checkedImage.classList.remove('hide');
    } else {
        uncheckedImage.classList.remove('hide');
    }

    heroFavouriteCell.append(checkedImage, uncheckedImage);

    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';

    deleteButton.addEventListener('click', async () => {
        const confirmed = confirm('Are you sure you want to delete this hero?');
        if (confirmed) {
            await deleteHero(hero.id);
            newRow.remove();
        }
    });

    newRow.append(heroName, heroComics, heroFavouriteCell, deleteButton);
    heroesTable.querySelector('tbody').append(newRow);

    heroFavouriteCell.addEventListener('click', async () => {
        let newFavourite = !hero.favourite;
        const updatedHero = await controller(`heroInfo/${hero.id}`, METHODS.PUT, {
            favourite: newFavourite,
        });

        checkedImage.classList.toggle('hide', !newFavourite);
        uncheckedImage.classList.toggle('hide', newFavourite);

        hero.favourite = newFavourite;
    });
}

async function deleteHero(heroId) {
    try {
        const response = await fetch(`${API}heroInfo/${heroId}`, { method: 'DELETE' });
        if (!response.ok) {
            throw new Error('Failed to delete hero.');
        }
    } catch (error) {
        console.error(error);
    }
}

async function init() {
    const existingHeroes = await controller('heroInfo');
    
    existingHeroes.forEach(hero => {
        appendHeroToTable(hero);
    });
}

init();

// const API = 'https://64da861be947d30a260b5c81.mockapi.io/api/v1/';
// const METHODS = {
//     POST: 'POST',
//     GET: 'GET',
//     PUT: 'PUT',
//     DELETE: 'DELETE',
// };

// async function controller(action, method = METHODS.GET, body) {
//     const URL = `${API}${action}`;

//     const params = {
//         method,
//         headers: {
//             'Content-Type': 'application/json',
//         },
//     };

//     if (body) params.body = JSON.stringify(body);

//     try {
//         const response = await fetch(URL, params);
//         if (!response.ok) {
//             throw new Error(response.statusText)
//         };
//         const data = await response.json();

//         return data;
//     } catch (err) {
//         console.log(err);
//     }
// }

// const heroesForm = document.querySelector('#heroesForm');
// const heroesTable = document.querySelector('#heroesTable');
// const addHeroButton = document.querySelector('#addHeroButton');

// async function heroExists(heroName) {
//     try {
//         const heroes = await controller('heroInfo');
//         return heroes.some(hero => hero.name.toLowerCase().trim() === heroName.toLowerCase().trim());
//     } catch (err) {
//         console.log(err);
//         return false;
//     }
// }

// addHeroButton.addEventListener('click', async (e) => {
//     e.preventDefault();
//     const heroName = document.querySelector('#fullName').value;
//     const heroComics = document.querySelector('#universeSelect').value;
//     const heroFavourite = document.querySelector('#favourite').checked;

//     const doesHeroExist = await heroExists(heroName);
//     if (doesHeroExist) {
//         console.log(`Hero ${heroName} already exists in the database.`);
//         return;
//     }

//     const newHero = {
//         name: heroName,
//         comics: heroComics,
//         favourite: heroFavourite,
//     };

//     const hero = await controller('heroInfo', METHODS.POST, newHero);
//     appendHeroToTable(hero);
//     heroesForm.reset();
// });

// function createImage(src) {
//     const image = document.createElement('img');
//     image.classList.add('image_size', 'checkbox-image', 'hide');
//     image.src = src;
//     return image;
// }

// function createFavouriteCell(isFavourite) {
//     const heroFavouriteCell = document.createElement('td');

//     const checkedImage = createImage('./images/Smiling Face Emoji with Blushed Cheeks.png');
//     const uncheckedImage = createImage('./images/Expressionless Face Emoji.png');

//     if (isFavourite) {
//         checkedImage.classList.remove('hide');
//     } else {
//         uncheckedImage.classList.remove('hide');
//     }

//     heroFavouriteCell.append(checkedImage, uncheckedImage);

//     return heroFavouriteCell;
// }

// function createDeleteButton(hero, row) {
//     const deleteButton = document.createElement('button');
//     deleteButton.innerText = 'Delete';

//     deleteButton.addEventListener('click', async () => {
//         const confirmed = confirm('Are you sure you want to delete this hero?');
//         if (confirmed) {
//             await deleteHero(hero.id);
//             row.remove();
//         }
//     });

//     return deleteButton;
// }

// function appendHeroToTable(hero) {
//     const newRow = document.createElement('tr');
//     newRow.dataset.heroId = hero.id;

//     const heroName = document.createElement('td');
//     heroName.innerText = hero.name;

//     const heroComics = document.createElement('td');
//     heroComics.innerText = hero.comics;

//     const heroFavouriteCell = createFavouriteCell(hero.favourite);
//     const deleteButton = createDeleteButton(hero, newRow);

//     newRow.append(heroName, heroComics, heroFavouriteCell, deleteButton);
//     heroesTable.querySelector('tbody').append(newRow);
// }

// async function deleteHero(heroId) {
//     try {
//         const response = await fetch(`${API}heroInfo/${heroId}`, { method: 'DELETE' });
//         if (!response.ok) {
//             throw new Error('Failed to delete hero.');
//         }
//     } catch (error) {
//         console.error(error);
//     }
// }

// async function init() {
//     const existingHeroes = await controller('heroInfo');
    
//     existingHeroes.forEach(hero => {
//         appendHeroToTable(hero);
//     });
// }

// init();
