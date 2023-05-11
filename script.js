
season = '';
while (season === '') {
    season = prompt('Winter or summer period?');
    if (season === null){
        season = '';
        continue;
    }
    season = season.toLowerCase().replaceAll(' ', '');
    if (season !== 'winter' && season !== 'summer'){
        season = '';
    }
};

console.log(season);

if (season === 'winter'){
    seasonPrice = 2;
} else if (season === 'summer'){
    seasonPrice = 0.8;
};

category = '';
while(category === '') {
    category = prompt('Choose category from which you want to buy products: vegetables or fruits');
    if(category === null) {
        category = '';
        continue;
    }
    category = category.toLowerCase().replaceAll(' ', '');
    if(category !== 'vegetables' && category !== 'fruits') {
        category = '';
    }
};

console.log(category);

chosenProduct = '';
productPrice = 0;
if (category === 'vegetables'){
    while (chosenProduct === '') {
        chosenProduct = prompt('Choose product from one of the categories: cabbage, avocado, tomato.')

        if (chosenProduct === null) {
            chosenProduct = '';
            continue;
        }

        chosenProduct = chosenProduct.toLowerCase().replaceAll(' ','');
        if (chosenProduct !== 'cabbage' && chosenProduct !== 'avocado' && chosenProduct !== 'tomato') {
            chosenProduct = '';
        }
    }

    switch (chosenProduct) {
        case 'cabbage':
            productPrice = 8;
            break;
        case 'avocado':
            productPrice = 30;
            break;
        case 'tomato':
            productPrice = 10;
            break;
    };

} else if (category === 'fruits') {
    while (chosenProduct === '') {
        chosenProduct = prompt('Choose product from one of the categories: grapes, raspberry, coconut.')

        if (chosenProduct === null) {
            chosenProduct = '';
            continue;
        }

        chosenProduct = chosenProduct.toLowerCase().replaceAll(' ','');
        if (chosenProduct !== 'grapes' && chosenProduct !== 'raspberry' && chosenProduct !== 'coconut') {
            chosenProduct = '';
        }
    }

    switch (chosenProduct) {
        case 'grapes':
            productPrice = 20;
            break;
        case 'raspberry':
            productPrice = 25;
            break;
        case 'coconut':
            productPrice = 50;
            break;
    }
};

console.log(chosenProduct);

do {
    numberOfGoods = parseInt(prompt(`How many ${chosenProduct} do you want?`));
} while (isNaN(numberOfGoods) || numberOfGoods < 1);

console.log(numberOfGoods);

sum = numberOfGoods * productPrice * seasonPrice;

console.log(sum);

document.write(`
    <div style = "text-align: center">
        <img src="./images 2/${category}/${chosenProduct}.svg" alt="${chosenProduct}" width="100" height="100">
        <p> Selected product: <b> ${chosenProduct} </b> </p>
        <p> Count of ${chosenProduct}: <b> ${numberOfGoods} </b> </p>
        <p> Selected period: <b> ${season} </b> </p>
        <p> Selected category: <b> ${category} </b> </p>
        <p> Final cost: <b> ${sum} </b> </p>
    </div>
    `);

// ***************************************************************************************************************************

// do {
//     season = prompt('Winter or summer period?')?.toLowerCase().replaceAll(' ', '');
// } while (season !== 'winter' && season !== 'summer');

// console.log(season);

// if(season === 'winter'){
//     seasonPrice = 2;
// } else if (season === 'summer'){
//     seasonPrice = 0.8;
// };

// do {
//     category = prompt('Choose category from which you want to buy products: vegetables or fruits')?.toLowerCase().replaceAll(' ','');
// } while (category !== 'vegetables' && category !== 'fruits');

// console.log(category);
    
// if (category === 'vegetables'){
//     do {
//         chosenProduct = prompt('Choose product from one of the categories: cabbage, avocado, tomato.')?.toLowerCase().replaceAll(' ','');
//     } while (chosenProduct !== 'cabbage' && chosenProduct !== 'avocado' && chosenProduct !== 'tomato');

//     switch (chosenProduct) {
//         case 'cabbage':
//             productPrice = 8;
//             break;
//         case 'avocado':
//             productPrice = 30;
//             break;
//         case 'tomato':
//             productPrice = 10;
//             break;
//     };

// } else if(category === 'fruits') {
//     do {
//         chosenProduct = prompt('Choose product from one of the categories: grapes, raspberry, coconut.')?.toLowerCase().replaceAll(' ','');
//     } while (chosenProduct !== 'grapes' && chosenProduct !== 'raspberry' && chosenProduct !== 'coconut');

//     switch (chosenProduct) {
//         case 'grapes':
//             productPrice = 20;
//             break;
//         case 'raspberry':
//             productPrice = 25;
//             break;
//         case 'coconut':
//             productPrice = 50;
//             break;
//     }
// };

// console.log(chosenProduct);

// do {
//     numberOfGoods = parseInt(prompt(`How many ${chosenProduct} do you want?`));
// } while (isNaN(numberOfGoods) || numberOfGoods < 1);

// console.log(numberOfGoods);

// sum = numberOfGoods * productPrice * seasonPrice;

// console.log(sum);

// document.write(`
//     <div style = "text-align: center">
//         <img src="./images 2/${category}/${chosenProduct}.svg" alt="${chosenProduct}" width="100" height="100">
//         <p> Selected product: <b> ${chosenProduct} </b> </p>
//         <p> Count of ${chosenProduct}: <b> ${numberOfGoods} </b> </p>
//         <p> Selected period: <b> ${season} </b> </p>
//         <p> Selected category: <b> ${category} </b> </p>
//         <p> Final cost: <b> ${sum} </b> </p>
//     </div>
//     `);

// *************************************************************************************************************************

// do {
//     season = prompt('Winter or summer period?').toLowerCase().replaceAll(' ', '');
// } while (season !== 'winter' && season !== 'summer');

// console.log(season);

// if (season === 'winter'){
//     seasonPrice = 2;
// } else if (season === 'summer'){
//     seasonPrice = 0.8;
// };

// do {
//     category = prompt('Choose category from which you want to buy products: vegetables or fruits').toLowerCase().replaceAll(' ','');
// } while (category !== 'vegetables' && category !== 'fruits');

// console.log(category);
    
// if (category === 'vegetables'){
//     do {
//         chosenProduct = prompt('Choose product from one of the categories: cabbage, avocado, tomato.').toLowerCase().replaceAll(' ','');
//     } while (chosenProduct !== 'cabbage' && chosenProduct !== 'avocado' && chosenProduct !== 'tomato');

//     switch (chosenProduct) {
//         case 'cabbage':
//             productPrice = 8;
//             break;
//         case 'avocado':
//             productPrice = 30;
//             break;
//         case 'tomato':
//             productPrice = 10;
//             break;
//     };

// } else if(category === 'fruits') {
//     do {
//         chosenProduct = prompt('Choose product from one of the categories: grapes, raspberry, coconut.').toLowerCase().replaceAll(' ','');
//     } while (chosenProduct !== 'grapes' && chosenProduct !== 'raspberry' && chosenProduct !== 'coconut');

//     switch (chosenProduct) {
//         case 'grapes':
//             productPrice = 20;
//             break;
//         case 'raspberry':
//             productPrice = 25;
//             break;
//         case 'coconut':
//             productPrice = 50;
//             break;
//     }
// };

// console.log(chosenProduct);

// do {
//     numberOfGoods = parseInt(prompt(`How many ${chosenProduct} do you want?`));
// } while (isNaN(numberOfGoods) || numberOfGoods < 1);

// console.log(numberOfGoods);

// sum = numberOfGoods * productPrice * seasonPrice;

// console.log(sum);

// document.write(`
//     <div style = "text-align: center">
//         <img src="./images 2/${category}/${chosenProduct}.svg" alt="${chosenProduct}" width="100" height="100">
//         <p> Selected product: <b> ${chosenProduct} </b> </p>
//         <p> Count of ${chosenProduct}: <b> ${numberOfGoods} </b> </p>
//         <p> Selected period: <b> ${season} </b> </p>
//         <p> Selected category: <b> ${category} </b> </p>
//         <p> Final cost: <b> ${sum} </b> </p>
//     </div>
//     `);