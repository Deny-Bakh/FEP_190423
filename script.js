// const mainDiv = document.createElement('div');
// const ghostDiv = document.createElement('div');

// mainDiv.classList.add('maindiv_properties');
// ghostDiv.classList.add('ghostdiv_properties');

// mainDiv.innerText = 'Hover your mouse over me mortal';
// ghostDiv.innerText = 'I\'m a ghost! Now you see me. Now you don\'t';

// mainDiv.append(ghostDiv);
// document.body.append(mainDiv);

// ********************************************************************************************************

const mainDiv = document.createElement('div');
const ghostDiv = document.createElement('div');

mainDiv.classList.add('maindiv_properties');
ghostDiv.classList.add('ghostdiv_properties');

mainDiv.innerText = 'Hover your mouse over me mortal';
ghostDiv.innerText = 'I\'m a ghost! Now you see me. Now you don\'t';

mainDiv.addEventListener('mouseenter', () => mainDiv.append(ghostDiv));
mainDiv.addEventListener('mouseout',() => ghostDiv.remove());

// mainDiv.onmouseenter = createGhostDiv;
// mainDiv.onmouseout = removeGhostDiv;

document.body.append(mainDiv);


