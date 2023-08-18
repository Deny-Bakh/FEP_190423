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
            throw new Error(`Request to ${URL} failed with status: ${response.status}`);
        }
        const data = await response.json();

        return data;
    } catch (err) {
        console.error(`Error in ${action}: ${err}`);
    }
}

async function heroExists(heroName) {
    try {
        const heroes = await controller('heroInfo');
        return heroes.some(hero => hero.name.toLowerCase().trim() === heroName.toLowerCase().trim());
    } catch (err) {
        console.error('Error while checking hero existence:', err);
        return false;
    }
}

function isValidHeroName(name) {
    if (name.trim() === '') {
        return false;
    }

    const lettersRegex = /^[A-Za-z\s]+$/;
    return lettersRegex.test(name);
}

async function addHero() {
    const heroNameInput = document.querySelector('#fullName');
    const heroName = heroNameInput.value.trim();

    if (!isValidHeroName(heroName)) {
        console.log('Hero name is not valid.');
        heroNameInput.focus();
        return;
    }

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
    appendHeroToTable(hero);
    heroesForm.reset();
}

function appendHeroToTable(hero) {
    const newRow = document.createElement('tr');
    newRow.dataset.heroId = hero.id;

    const heroName = document.createElement('td');
    heroName.innerText = hero.name;

    const heroComics = document.createElement('td');
    heroComics.innerText = hero.comics;

    const heroFavouriteCell = document.createElement('td');

    const checkedImage = createImage(['image_size', 'checkbox-image'], './images/Smiling Face Emoji with Blushed Cheeks.png', hero.favourite);
    const uncheckedImage = createImage(['image_size', 'checkbox-image'], './images/Expressionless Face Emoji.png', !hero.favourite);

    toggleFavoriteImages(checkedImage, uncheckedImage, hero.favourite);
    
    heroFavouriteCell.append(checkedImage, uncheckedImage);

    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.addEventListener('click', handleDeleteButtonClick(hero, newRow));

    newRow.append(heroName, heroComics, heroFavouriteCell, deleteButton);
    heroesTable.querySelector('tbody').append(newRow);

    heroFavouriteCell.addEventListener('click', () => {
        handleToggleFavoriteClick(hero, checkedImage, uncheckedImage);
    });
}

function createImage(classes, src) {
    const image = document.createElement('img');
    image.classList.add(...classes);
    image.classList.add('hide');
    image.src = src;
    return image;
}

function toggleFavoriteImages(checkedImage, uncheckedImage, isFavourite) {
    checkedImage.classList.toggle('hide', !isFavourite);
    uncheckedImage.classList.toggle('hide', isFavourite);
}

async function handleToggleFavoriteClick(hero, checkedImage, uncheckedImage) {
    let newFavourite = !hero.favourite;
    const updatedHero = await controller(`heroInfo/${hero.id}`, METHODS.PUT, {
        favourite: newFavourite,
    });

    checkedImage.classList.toggle('hide', !newFavourite);
    uncheckedImage.classList.toggle('hide', newFavourite);

    hero.favourite = newFavourite;
}

function handleDeleteButtonClick(hero, newRow) {
    return async () => {
        const confirmed = confirm('Are you sure you want to delete this hero?');
        if (confirmed) {
            await deleteHero(hero.id);
            newRow.remove();
        }
    };
}

async function deleteHero(heroId) {
    try {
        const response = await fetch(`${API}heroInfo/${heroId}`, { method: 'DELETE' });
        if (!response.ok) {
            throw new Error('Failed to delete hero.');
        }
    } catch (error) {
        console.error('Error while deleting hero:', error);
    }
}

async function init() {
    try {
        const existingHeroes = await controller('heroInfo');
        existingHeroes.forEach(hero => {
            appendHeroToTable(hero);
        });
    } catch (err) {
        console.error('Error while initializing:', err);
    }
}

const heroesForm = document.querySelector('#heroesForm');
const heroesTable = document.querySelector('#heroesTable');
const addHeroButton = document.querySelector('#addHeroButton');

addHeroButton.addEventListener('click', addHero);
init();
