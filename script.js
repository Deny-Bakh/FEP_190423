// cardRow = [];

// cardValues = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'T'];
// cardSuits = ['clubs', 'spades', 'diamonds', 'hearts'];

// for (tableRow = 0; tableRow < 7; tableRow++){
//   cardCell = [];
//   for (tableCell = 0; tableCell < 8; tableCell++) {
//     data = '';
//       if (tableRow !== 6) {data = `<img src=images/${cardSuits[tableCell % 4]}.svg alt="${cardSuits[tableCell % 4]}" />`
//     } else if (tableRow === 6 && tableCell >= 2 && tableCell <= 5) {
//       data = `<img src=images/${cardSuits[(tableCell + 2) % 4]}.svg alt="${cardSuits[(tableCell + 2) % 4]}" />`
//     }

//     index = tableRow * 2 + (tableCell >= 4 && tableCell < 8);

//     if (index >= 0 && index < cardValues.length) {
//       data += cardValues[index];
//     }

//     if (index >= 0 && index < cardValues.length) {
//       if (cardValues[index] === 'J') {
//         data += `<img src="images/jack.svg" alt="J" style="display: block; width: 50px; height: 100px; margin: 0 auto;" />`;
//       } else if (cardValues[index] === 'Q') {
//         data += `<img src="images/queen.svg" alt="Q" style="display: block; width: 50px; height: 100px; margin: 0 auto;" />`;
//       } else if (cardValues[index] === 'K') {
//         data += `<img src="images/king.svg" alt="K" style="display: block; width: 50px; height: 100px; margin: 0 auto;" />`;
//       }
//     }

//     cardCell.push(`<td>${data}</td>`);
//   }
//   cardRow.push(`<tr>${cardCell.join('')}</tr>`);
// }


// document.write(
//   `<table class="card_board">${cardRow.join('')}</table>`
// )




// if (tr !== 6){
//   data = `<img src=images/${cardSuits[td % 4]}.svg alt="${cardSuits[td % 4]}" />`
// }

// for (td = 0; td < (tr === 6 ? 4 : 8); td++) {

// const cardValues = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'T'];
// const cardSuits = ['clubs', 'spades', 'diamonds', 'hearts'];
// const cardRow = [];

// for (let row = 0; row < 7; row++) {
//   const cardCell = [];
//   const numColumns = (row === 6) ? 4 : 8;

//   for (let column = 0; column < numColumns; column++) {
//     let data = '';

//     if (row !== 6) {
//       suit = cardSuits[column % 4];
//       data = `<img src="images/${suit}.svg" alt="${suit}" />`;
//     }

//     index = row * 2 + (column >= 4 && column < 8);

//     if (index >= 0 && index < cardValues.length) {
//       const cardValue = cardValues[index];

//       data += cardValue;

//       if (['J', 'Q', 'K'].includes(cardValue)) {
//         data += `<img src="images/${cardValue.toLowerCase()}.svg" alt="${cardValue}" style="display: block; width: 50px; height: 100px; margin: 0 auto;" />`;
//       }
//     }

//     cardCell.push(`<td>${data}</td>`);
//   }

//   cardRow.push(`<tr>${cardCell.join('')}</tr>`);
// }

// const cardBoard = `<table class="card_board">${cardRow.join('')}</table>`;
// document.write(cardBoard);

    // if ((td === 0 || td === 4) && tr !== 6) {
    //   data = '<img src=images/clubs.svg alt="clubs" />'
    // }

    // if ((td === 1 || td === 5) && tr !==6) {
    //   data = '<img src=images/spades.svg alt="spades" />'
    // }

    // if ((td === 2 || td === 6) && tr !==6) {
    //   data = '<img src=images/diamonds.svg alt="diamonds" />'
    // }

    // if ((td === 3 || td === 7) && tr !== 6) {
    //   data = '<img src=images/hearts.svg alt="hearts" />'
    // }

    // if ((td >= 0 && td <= 3) || (td >= 4 && td <= 7 && td !== 6)) {
    //   data = '<img src=images/' + cardSuits[td % 4] + '.svg alt="' + cardSuits[td % 4] + '" />';
    // }

    // if (tr !== 6) {
    //   switch (td) {
    //     case 0:
    //     case 4:
    //       data = '<img src=images/clubs.svg alt="clubs" />';
    //       break;
    //     case 1:
    //     case 5:
    //       data = '<img src=images/spades.svg alt="spades" />';
    //       break;
    //     case 2:
    //     case 6:
    //       data = '<img src=images/diamonds.svg alt="diamonds" />';
    //       break;
    //     case 3:
    //     case 7:
    //       data = '<img src=images/hearts.svg alt="hearts" />';
    //       break;
    //   }
    // }



    // if (index >= 0 && index < cardValues.length) {
    //   if (cardValues[index] === 'J' || cardValues[index] === 'Q' || cardValues[index] === 'K') {
    //     data += `<img src="images/${cardValues[index]}.png" alt="${cardValues[index]}" />`;
    //   } else {
    //     data += cardValues[index];
    //   }
    // }
  

    // if (td < 4 && tr === 0){
    //   data += cardValues[0];
    // }

    // if (td > 3 && td < 8 && tr === 0){
    //   data += cardValues[1];
    // }

    // if (td < 4 && tr === 1){
    //   data += cardValues[2];
    // }

    // if (td > 3 && td < 8 && tr === 1){
    //   data += cardValues[3];
    // }

    // if (td < 4 && tr === 2){
    //   data += cardValues[4];
    // }

    // if (td > 3 && td < 8 && tr === 2){
    //   data += cardValues[5];
    // }

    // if (td < 4 && tr === 3){
    //   data += cardValues[6];
    // }

    // if (td > 3 && td < 8 && tr === 3){
    //   data += cardValues[7];
    // }

    // if (td < 4 && tr === 4){
    //   data += cardValues[8];
    // }

    // if (td > 3 && td < 8 && tr === 4){
    //   data += cardValues[9];
    // }

    // if (td < 4 && tr === 5){
    //   data += cardValues[10];
    // }

    // if (td > 3 && td < 8 && tr === 5){
    //   data += cardValues[11];
    // }

    // if (td < 4 && tr === 6){
    //   data += cardValues[12];
    // }




// '<img src="images/jack.svg" alt="jack" />', '<img src="images/queen.svg" alt="queen" />', '<img src="images/king.svg" alt="king" />',


// cardRow = [];

// // Define an array to hold all the card values
// const cardValues = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

// // Define an array to hold all the card suits
// const cardSuits = ['clubs', 'spades', 'diamonds', 'hearts'];

// // Iterate over the suits and values to generate the cards
// for (tr = 0; tr < 7; tr++) {
//   cardCell = [];
//   for (td = 0; td < 8; td++) {
//     data = '';

//     // Check if it's not the last row (row 6)
//     if (tr !== 6) {
//       // Determine the suit based on the column
//       const suitIndex = Math.floor(td / 2);
//       const suit = cardSuits[suitIndex];

//       // Determine the value based on the row
//       const valueIndex = tr;
//       const value = cardValues[valueIndex];

//       // Generate the card HTML
//       data = `<img src="images/${suit}.svg" alt="${suit}" />${value}`;
//     }

//     cardCell.push(`<td>${data}</td>`);
//   }

//   // Check if it's the last row and adjust the table structure
//   if (tr === 6) {
//     const emptyCells = '<td></td>'.repeat(2);
//     const centeredCell = '<td colspan="4"></td>';
//     cardRow.push(`<tr>${emptyCells}${centeredCell}${emptyCells}</tr>`);
//   } else {
//     cardRow.push(`<tr>${cardCell.join('')}</tr>`);
//   }
// }

// document.write(
//   `<table class="card_board">${cardRow.join('')}</table>`
// );


// cardRow = [];

// cardValues = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'T'];
// cardSuits = ['clubs', 'spades', 'diamonds', 'hearts'];

// for (tr = 0; tr < 7; tr++) {
//   cardCell = [];
//   for (td = 0; td < 8; td++) {
//     data = '';

//     // if (tr !== 6 || (tr === 6 && td > 1 && td < 6)) {
//     //   data = `<img src=images/${cardSuits[td % 4]}.svg alt="${cardSuits[td % 4]}" />`;
//     // }

//     if (tr === 6 && td > 1 && td < 6) {
//       suitIndex = td - 2;
//       data += cardSuits[suitIndex];
//     } else {
//       data = `<img src=images/${cardSuits[td % 4]}.svg alt="${cardSuits[td % 4]}" />`;
//     }

//     // if (tr === 6 && td >= 2 && td <= 5) {
//     //   data += cardSuits[td - 2];
//     // }

//     index = tr * 2 + (td >= 4 && td < 8);

//     if (index >= 0 && index < cardValues.length) {
//       data += cardValues[index];
//     }

//     if (index >= 0 && index < cardValues.length) {
//       if (cardValues[index] === 'J') {
//         data += `<img src="images/jack.svg" alt="J" style="display: block; width: 50px; height: 100px; margin: 0 auto;" />`;
//       } else if (cardValues[index] === 'Q') {
//         data += `<img src="images/queen.svg" alt="Q" style="display: block; width: 50px; height: 100px; margin: 0 auto;" />`;
//       } else if (cardValues[index] === 'K') {
//         data += `<img src="images/king.svg" alt="K" style="display: block; width: 50px; height: 100px; margin: 0 auto;" />`;
//       }
//     }

//     cardCell.push(`<td>${data}</td>`);
//   }
//   cardRow.push(`<tr>${cardCell.join('')}</tr>`);
// }

// document.write(
//   `<table class="card_board">${cardRow.join('')}</table>`
// );

    // if (tr !== 6) {
    //   td = `style='background-color: white'`;
    // }

      //  if (tr !== 6) {
      //   suit = '';
      //   for (i = 0; i < cardSuits.length; i++) {
      //     if (i === td % 4) {
      //       suit = cardSuits[i];
      //       break;
      //     }
      //   }
      //   data = `<img src=images/${suit}.svg alt="${suit}" />`
      //  }

      //  if (tr === 6 && (td > 2 || td < 6)) {
      //   data += cardSuits[td - 2]
      // }


      // **********************************************************************


  //     const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

  //     // function generateKey(length, characters) {
  //     //   let key = '';
  //     //   while (key.length < length) {
  //     //     const randomIndex = Math.floor(Math.random() * characters.length)
  //     //     key += characters[randomIndex];
  //     //   }
  //     //   return key
  //     // }

  //     function generateKey(length, characters) {
  //       let key = '';
  //       for (let i = 0; i < length; i++) {
  //         const randomIndex = Math.floor(Math.random() * characters.length)
  //         key += characters[randomIndex];
  //       }
  //       return key
  //     }

  //     const key = generateKey(16, characters);
  //     console.log(key); // eg599gb60q926j8i 


  //     // ********************************************************************************

  //     function calculateArithmeticMeanOfNumbers (array) {
  //       let sum = 0;
  //       let count = 0;

  //       for (let i = 0; i < array.length; i++) {
  //         if (typeof array[i] === 'number') {
  //           sum += array[i];
  //           count++;
  //           }
  //         }
  //         if (count === 0) {
  //           return 0
  //         }
  //         return sum / count;
  //       }


  //     let array = ['hello', 10, true, 35, null, 43, 'Pedro', 48];
  //     let mean = calculateArithmeticMeanOfNumbers(array);

  //     console.log(mean);

  //   // ***************************************************************************************

  //   function doMath(x, znak, y) {
  //     let result;

  //     switch (znak) {
  //       case '+':
  //         result = x + y;
  //         break;
  //       case '-':
  //         result = x - y;
  //         break;
  //       case '*':
  //         result = x * y;
  //         break;
  //       case '/':
  //         result = x / y;
  //         break;
  //       case '%':
  //         result = x % y;
  //         break;
  //       case '^':
  //         result = Math.pow(x, y);
  //         break;
  //     }
  //     return result;
  //   }

  //   let x;
  //   do{
  //     x = +prompt('Please enter a random number');
  //   } while (isNaN(x) || !x)

  //   let y;
  //   do {
  //      y = +prompt('Please enter another random number');
  // } while (isNaN(y) || !y)

  //   let znak;
  //   do {
  //     znak = prompt('Please enter a sign', '+, -, *, /, %, ^')
  //   } while(znak !== '+' && znak !== '-' && znak !== '/' && znak !== '*' && znak !== '%' && znak !== '^' );

  //   let result = doMath(x, znak, y);
  //   console.log('Result', result);

  //   // **************************************************************************************************************

  //   // let mainArrayLength;

  //   // mainArrrayLength = prompt('Please tell us what size you want your main array to be');

  //   // let secondaryArrayLength;

  //   // secondaryArrayLength = prompt('Please tell us what size you want your array inside an array to be');



  //   function fillTwoDimensionalArray() {

  //     let mainArrayLength;

  //     do {
  //       mainArrayLength = parseInt(prompt('Please tell us what size you want your main array to be'));
  //     } while (isNaN(mainArrayLength) || !mainArrayLength);

  //     let innerArrayLength;
  
  //     do {
  //       innerArrayLength = parseInt (prompt('Please tell us what size you want your array inside an array to be'));
  //     } while (isNaN(mainArrayLength) || !mainArrayLength);

  //     let array = [];

  //     for (let i = 0; i < mainArrayLength; i++) {
  //       let innerArray = [];
  //       for (let j = 0; j < innerArrayLength; j++) {
  //         let value = prompt(`Enter an element: Main: ${i}, Inner Element: ${j}`);
  //         innerArray.push(value);
  //       }
  //       array.push(innerArray);
  //     }
  //     return array;
  //   }

  //   let yourArray = fillTwoDimensionalArray();
  //   console.log(yourArray);

  //   // ****************************************************************************************************************

  //   function removeChars(string, charsToRemove) {

  //     for (let i = 0; i < charsToRemove.length; i++) {
  //       string = string.split(charsToRemove[i]).join ('');
  //     }
  //     return string;
  //   }

  //   let enteredPhrase;
    
  //   do {
  //     enteredPhrase = prompt('Please enter a sentence you want to see');
  //   } while(!isNaN(enteredPhrase) || !enteredPhrase);

  //   let deletedSymbol = prompt('Please enter symbols you want to remove from your previous sentence', enteredPhrase);

  //   let modifiedPhrase = removeChars(enteredPhrase, deletedSymbol);
  //   console.log(modifiedPhrase);

  //   // function removeSymbol() {

  //   //   let enteredPhrase = prompt('Please enter a sentence you want to see');

  //   //   let deletedSymbol = prompt('Please enter symbols you want to remove from your previous sentence', enteredPhrase);

  //   //   for (let i = 0; i < enteredPhrase.length; i++) {
  //   //     enteredPhrase = enteredPhrase.replaceAll(deletedSymbol, '');
  //   //   }
  //   //   return enteredPhrase;
  //   // }

  //   // let modifiedPhrase = removeSymbol();
  //   // console.log(modifiedPhrase);

  //   // ************************************************************************************************************************

  //   function createSum() {
  //     let total = 0;

  //     function innerSum(number) {
  //       total += number;
  //       return total;
  //     }
  //     return innerSum;
  //   }

  //   const sum = createSum()

  //   console.log(sum(3));
  //   console.log(sum(5));
  //   console.log(sum(7));


  // **************************************************************************************************************************************

// cardValues = ['2', '3', '4', '5', '6', '7', '8', '9', '10'];
// cardSuits = [
//   ['clubs', 'black'],
//   ['spades', 'black'],
//   ['diamonds', 'red'],
//   ['hearts', 'red'],
// ];
// cardsWithImages = [
//   ['J', 'jack'],
//   ['Q', 'queen'],
//   ['K', 'king'],
//   ['T'],
// ];

// const fullDeckWithoutSuits = cardValues.concat(cardsWithImages);

// const fullDeck = [];

//   function resultDeck() {
//   for (let i = 0; i <fullDeckWithoutSuits.length; i++) {
//     for (let j = 0; j < cardSuits.length; j++) {
//       fullDeck.push([fullDeckWithoutSuits[i], cardSuits[j]]);
//     }
//   }
//   return fullDeck;
// };

// const deck = resultDeck();
// console.log(deck)

// function initDeck(deck) {
//   document.write('<div class="wrapper">');
//   // const wrapper = document.createElement('div');
//   // wrapper.classList = 'wrapper';
//   // const cards = '';
//   for (let i = 0; i < deck.length; i++) {
//     document.write(`<div  class="card">`);
//         document.write (`<div class="header">${deck[i][0]}</div>`);
//         console.log(deck[i])
//         if(deck[i].length > 1) {
//           document.write (`<div class="main"><img src="./images/${deck[i][1]}" alt=""></div>`);
//           // console.log(deck[i][1])
//         } else {
//           document.write (`<div class="main"></div>`);
//         }
//         document.write (`<div class="footer"></div>`);
//     document.write(`</div>`);
//   }
//   document.write('</div>');
// }

// initDeck(deck);





// *****************************************************************************************************************

cardRow = [];

cardValues = ['2', '3', '4', '5', '6', '7', '8', '9', '10'];

cardSuits = [
  ['clubs', 'black'],
  ['spades', 'black'],
  ['diamonds', 'red'],
  ['hearts', 'red'],
];

cardsWithImages = [
  ['J', 'jack'],
  ['Q', 'queen'],
  ['K', 'king'],
  ['T'],
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
console.log(deck)

function createCellInfo (data) {
  return `<div class="suit_number">
    <span style="color:${data[1][1]}">${Array.isArray(data[0]) ? data[0][0] : data[0]}</span>
    <img src="./images/${data[1][0]}.svg" alt="${data[1][0]}.svg">
</div>`
}

function createCell(data) {
  let cell = '';
  if (data) {

    cell = `<td class="card_board_td">
      ${createCellInfo(data)}
    <div class="main">
    ${Array.isArray(data[0]) ? `<img src="./images/${data[0][0] === 'T' ? data[1][0] : data[0][1]}.svg" alt="">` : ''}
    </div>
      ${createCellInfo(data)}
    </td>`
  }
  console.log(cell)
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
)

// function initDeck(deck) {
//   // document.write('<div class="wrapper">');
//   // const wrapper = document.createElement('div');
//   // wrapper.classList = 'wrapper';
//   // const cards = '';
//     for (tableRow = 0; tableRow < 7; tableRow++) {
//       deck = [];
//       for (tableCell = 0; tableCell < 8; tableCell++) {
//         if(tableRow !== 6) {
//           // document.write (${deck[i][0]}
//         }
//       }
//     }

// function initDeck(deck) {
//   document.write('<table class="card_board">');
//   for (let tableRow = 0; tableRow < 7; tableRow++) {
//     document.write('<tr>');
//     for (let tableCell = 0; tableCell < 8; tableCell++) {
//       const index = tableRow * 8 + tableCell;
//       if (index < deck.length) {
//         document.write('<td>');
//         document.write(deck[index][0]);
//         if (deck[index].length > 1) {
//           document.write(`<img src="./images/${deck[index][1]}.svg" alt="">`);
//         }
//         document.write('</td>');
//       } else {
//         document.write('<td></td>');
//       }
//       if (tableRow === 6){
        
//       }
//     }
//     document.write('</tr>');
//   }
//   document.write('</table>');
// }

// initDeck(deck);
  // for (let i = 0; i < deck.length; i++) {
  //   document.write(`<div  class="card">`);
  //       document.write (`<div class="header">${deck[i][0]}</div>`);
  //       console.log(deck[i])
  //       if(deck[i].length > 1) {
  //         document.write (`<div class="main"><img src="./images/${deck[i][1]}" alt=""></div>`);
  //         // console.log(deck[i][1])
  //       } else {
  //         document.write (`<div class="main"></div>`);
  //       }
  //       document.write (`<div class="footer"></div>`);
  //   document.write(`</div>`);
  // }
  // document.write('</div>');
// }

// initDeck(deck);

// document.write(
//   `<table class="card_board">${deck.join('')}</table>`
// )


// for (tableRow = 0; tableRow < 7; tableRow++){
//   cardCell = [];
//   for (tableCell = 0; tableCell < 8; tableCell++) {
//     data = '';
//       if (tableRow !== 6) {data = `<img src=images/${cardSuits[tableCell % 4]}.svg alt="${cardSuits[tableCell % 4]}" />`
//     } else if (tableRow === 6 && tableCell >= 2 && tableCell <= 5) {
//       data = `<img src=images/${cardSuits[(tableCell + 2) % 4]}.svg alt="${cardSuits[(tableCell + 2) % 4]}" />`
//     }

//     index = tableRow * 2 + (tableCell >= 4 && tableCell < 8);

//     if (index >= 0 && index < cardValues.length) {
//       data += cardValues[index];
//     }

//     if (index >= 0 && index < cardValues.length) {
//       if (cardValues[index] === 'J') {
//         data += `<img src="images/jack.svg" alt="J" style="display: block; width: 50px; height: 100px; margin: 0 auto;" />`;
//       } else if (cardValues[index] === 'Q') {
//         data += `<img src="images/queen.svg" alt="Q" style="display: block; width: 50px; height: 100px; margin: 0 auto;" />`;
//       } else if (cardValues[index] === 'K') {
//         data += `<img src="images/king.svg" alt="K" style="display: block; width: 50px; height: 100px; margin: 0 auto;" />`;
//       }
//     }

//     cardCell.push(`<td>${data}</td>`);
//   }
//   cardRow.push(`<tr>${cardCell.join('')}</tr>`);
// }


// document.write(
//   `<table class="card_board">${cardRow.join('')}</table>`
// )







/* <div class="footer">
<span>${Array.isArray(data[0]) ? data[0][0] : data[0]}</span>
<img src="./images/${data[1][0]}.svg" alt="${data[1][0]}.svg">
</div>  */