// *****************************************************************************************************************

cardRow = [];

cardValues = ['2', '3', '4', '5', '6', '7', '8', '9', '10'];

cardSuits = [
  ['clubs', '#353c4d'],
  ['spades', '#353c4d'],
  ['diamonds', 'red'],
  ['hearts', 'red'],
];

// cardSuits = [
//   ['clubs', 'black'],
//   ['spades', 'black'],
//   ['diamonds', 'red'],
//   ['hearts', 'red'],
// ];

cardsWithImages = [
  ['J', 'jack'],
  ['Q', 'queen'],
  ['K', 'king'],
  ['T', 'ace'],
];

const fullDeckWithoutSuits = cardValues.concat(cardsWithImages);

  function resultDeck() {
    const fullDeck = [];
    for (let i = 0; i <fullDeckWithoutSuits.length; i++) {
      for (let j = 0; j < cardSuits.length; j++) {
      fullDeck.push([fullDeckWithoutSuits[i], cardSuits[j]]);
    }
  }
  return fullDeck;
};

const deck = resultDeck();
console.log(deck);

function createCellInfo(data) {
  return `<div class="suit_number">
    <span style="color:${data[1][1]}">${Array.isArray(data[0]) ? data[0][0] : data[0]}</span>
    <img src="./images/${data[1][0]}.svg" alt="${data[1][0]}">
</div>`;
}

function createCell(data) {
  let cell = '';
  if (data) {

    cell = `<td class="card_board_td">
      ${createCellInfo(data)}
    <div class="main">
    ${Array.isArray(data[0]) ? `<img src="./images/${data[0][0] === 'T' ? data[1][0] : data[0][1]}.svg" alt="${data[0][1]}">` : ''}
    </div>
      ${createCellInfo(data)}
    </td>`
  }
  return cell
}

  let count = 0;
  for (tableRow = 0; tableRow < 7; tableRow++) {
    cardCell = [];
    for (tableCell = 0; tableCell < 8; tableCell++) {
      let data = '';
      if (tableRow === 6 && tableCell === 0) {
        data = `<td></td><td></td>`
      }
      data += createCell(deck[count]);
      count++;
      cardCell.push(data);
    }
    cardRow.push(`<tr>${cardCell.join('')}</tr>`);
  }

  document.write(
  `<table class="card_board">${cardRow.join('')}</table>`
);