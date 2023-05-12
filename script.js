seasonArray = ['winter', 'summer'];
seasonPriceArray = [2, 0.8];

do {
  season = prompt('Winter or summer period?');
  season = season ? season.replaceAll(' ', '').toLowerCase() : '';
} while (!seasonArray.includes(season));

console.log(season);

seasonPrice = seasonPriceArray[seasonArray.indexOf(season)];

categoryArray = ['vegetables', 'fruits'];
do {
    category = prompt('Choose category from which you want to buy products: vegetables or fruits');
    category = category ? category.replaceAll(' ', '').toLowerCase() : '';
} while (!categoryArray.includes(category));

console.log(category);

vegetables = ['cabbage', 'avocado', 'tomato'];
vegetablePrices = [8, 30, 10];
fruits = ['grapes', 'raspberry', 'coconut'];
fruitPrices = [20, 25, 50];

if (category === 'vegetables') {
    do {
        chosenProduct = prompt('Choose product from one of the categories: cabbage, avocado, tomato.');
        chosenProduct = chosenProduct ? chosenProduct.replaceAll(' ', '').toLowerCase() : '';
    } while (!vegetables.includes(chosenProduct));

    // productIndex = vegetables.indexOf(chosenProduct);
    // productPrice = vegetablePrices[productIndex];

    productPrice = vegetablePrices[vegetables.indexOf(chosenProduct)];

} else if (category === 'fruits') {
    do {
        chosenProduct = prompt('Choose product from one of the categories: grapes, raspberry, coconut.');
        chosenProduct = chosenProduct ? chosenProduct.replaceAll(' ', '').toLowerCase() : '';
    }  while (!fruits.includes(chosenProduct));

    // productIndex = fruits.indexOf(chosenProduct);
    // productPrice = fruitPrices[productIndex];

    productPrice = fruitPrices[fruits.indexOf(chosenProduct)];
}

console.log(chosenProduct);

do {
    numberOfGoods = parseInt(prompt(`How many ${chosenProduct} do you want?`));
} while (isNaN(numberOfGoods) || numberOfGoods < 1);

console.log(numberOfGoods);

totalPrice = numberOfGoods * productPrice * seasonPrice;

console.log(totalPrice);

document.write(`
    <div style = "text-align: center">
        <img src="./images 2/${category}/${chosenProduct}.svg" alt="${chosenProduct}" width="100" height="100">
        <p> Selected product: <b> ${chosenProduct} </b> </p>
        <p> Count of ${chosenProduct}: <b> ${numberOfGoods} </b> </p>
        <p> Selected period: <b> ${season} </b> </p>
        <p> Selected category: <b> ${category} </b> </p>
        <p> Final cost: <b> ${totalPrice} </b> </p>
    </div>
    `);


// season = '';
// while (season === '') {
//     season = prompt('Winter or summer period?');
//     if (season === null){
//         season = '';
//         continue;
//     }
//     season = season.toLowerCase().replaceAll(' ', '');
//     if (season !== 'winter' && season !== 'summer'){
//         season = '';
//     }
// };

// console.log(season);

// if (season === 'winter'){
//     seasonPrice = 2;
// } else if (season === 'summer'){
//     seasonPrice = 0.8;
// };

// category = '';
// while(category === '') {
//     category = prompt('Choose category from which you want to buy products: vegetables or fruits');
//     if(category === null) {
//         category = '';
//         continue;
//     }
//     category = category.toLowerCase().replaceAll(' ', '');
//     if(category !== 'vegetables' && category !== 'fruits') {
//         category = '';
//     }
// };

// console.log(category);

// chosenProduct = '';
// productPrice = 0;
// if (category === 'vegetables'){
//     while (chosenProduct === '') {
//         chosenProduct = prompt('Choose product from one of the categories: cabbage, avocado, tomato.')

//         if (chosenProduct === null) {
//             chosenProduct = '';
//             continue;
//         }

//         chosenProduct = chosenProduct.toLowerCase().replaceAll(' ','');
//         if (chosenProduct !== 'cabbage' && chosenProduct !== 'avocado' && chosenProduct !== 'tomato') {
//             chosenProduct = '';
//         }
//     }

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

// } else if (category === 'fruits') {
//     while (chosenProduct === '') {
//         chosenProduct = prompt('Choose product from one of the categories: grapes, raspberry, coconut.')

//         if (chosenProduct === null) {
//             chosenProduct = '';
//             continue;
//         }

//         chosenProduct = chosenProduct.toLowerCase().replaceAll(' ','');
//         if (chosenProduct !== 'grapes' && chosenProduct !== 'raspberry' && chosenProduct !== 'coconut') {
//             chosenProduct = '';
//         }
//     }

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
//     season = prompt('Winter or summer period?');
// } while (!season || (season.replaceAll(' ', '').toLowercase() !== 'winter' && season.replaceAll(' ', '').toLowercase() !== 'summer'));

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


// seasonArray = ['winter', 'summer'];
// seasonPriceArray = [2, 0.8];
// do {
//   season = prompt('Winter or summer period?');
//   season = season ? season.replaceAll(' ', '').toLowerCase() : '';
// } while (season !== 'winter' && season !== 'summer');

// console.log(season);
// if (season === 'winter'){
//     seasonPrice = 2;
// } else if (season === 'summer'){
//     seasonPrice = 0.8;
// };

// do {
//     category = prompt('Choose category from which you want to buy products: vegetables or fruits');
//     category = category ? category.replaceAll(' ', '').toLowerCase() : '';
// } while (category !== 'vegetables' && category !== 'fruits');

// console.log(category);

// vegetables = ['cabbage', 'avocado', 'tomato'];
// vegetablePrices = [8, 30, 10];
// fruits = ['grapes', 'raspberry', 'coconut'];
// fruitPrices = [20, 25, 50];

// if (category === 'vegetables') {
//     do {
//         chosenProduct = prompt('Choose product from one of the categories: cabbage, avocado, tomato.')
//         chosenProduct = chosenProduct ? chosenProduct.replaceAll(' ', '').toLowerCase() : '';
//     } while (!vegetables.includes(chosenProduct));

//     productIndex = vegetables.indexOf(chosenProduct);
//     productPrice = vegetablePrices[productIndex];

//     // productPrice = vegetablePrices[vegetables.indexOf(chosenProduct)];

// } else if (category === 'fruits') {
//     do{
//         chosenProduct = prompt('Choose product from one of the categories: grapes, raspberry, coconut.')
//         chosenProduct = chosenProduct ? chosenProduct.replaceAll(' ', '').toLowerCase() : '';
//     }  while (!fruits.includes(chosenProduct));

//     // productIndex = fruits.indexOf(chosenProduct);
//     // productPrice = fruitPrices[productIndex];

//     productPrice = fruitPrices[fruits.indexOf(chosenProduct)];

// }

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

//     // if (category === 'vegetables') {
// //     do {
// //       chosenProduct = prompt('Choose product from one of the categories: cabbage, avocado, tomato.');
// //       chosenProduct = chosenProduct ? chosenProduct.replaceAll(' ', '').toLowerCase() : '';
// //     } while (!vegetables.includes(chosenProduct));

// // productPrice = vegetablePrices[vegetables.indexOf(chosenProduct)];
  
// //     const productIndex = vegetables.indexOf(chosenProduct);
// //     productPrice = vegetablePrices[productIndex];
  
// } else if (category === 'fruits') {
//     do {
//       chosenProduct = prompt('Choose product from one of the categories: grapes, raspberry, coconut.');
//       chosenProduct = chosenProduct ? chosenProduct.replace(/\s/g, '').toLowerCase() : '';
//     } while (!fruits.includes(chosenProduct));
  
//     const productIndex = fruits.indexOf(chosenProduct);
//     productPrice = fruitPrices[productIndex];
//   }

// console.log(chosenProduct);

// chosenProduct = '';
// productPrice = 0;
// if (category === 'vegetables'){
//     do {
//         chosenProduct = prompt('Choose product from one of the categories: cabbage, avocado, tomato.');
//     } while (!chosenProduct || chosenProduct.replaceAll(' ','').toLowerCase() !== 'cabbage' && chosenProduct.replaceAll(' ','').toLowerCase() !== 'avocado' && chosenProduct.replaceAll(' ','').toLowerCase() !== 'tomato');

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
//         chosenProduct = prompt('Choose product from one of the categories: grapes, raspberry, coconut.');
//     } while (!chosenProduct || chosenProduct.toLowerCase().replaceAll(' ','') !== 'grapes' && chosenProduct.toLowerCase().replaceAll(' ','') !== 'raspberry' && chosenProduct.toLowerCase().replaceAll(' ','') !== 'coconut');

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

// seasonArray = ['winter', 'summer'];
// seasonPriceArray = [2, 0.8];

// do {
//   season = prompt('Winter or summer period?');
//   season = season ? season.replaceAll(' ', '').toLowerCase() : '';
// } while (!seasonArray.includes(season));

// console.log(season)

// seasonPrice = seasonPriceArray[seasonArray.indexOf(season)]


// categoryArray = ['vegetables', 'fruits'];
// do {
//     category = prompt('Choose category from which you want to buy products: vegetables or fruits');
//     category = category ? category.replaceAll(' ', '').toLowerCase() : '';
// } while (!categoryArray.includes(category));

// console.log(category);

// vegetables = ['cabbage', 'avocado', 'tomato'];
// vegetablePrices = [8, 30, 10];
// fruits = ['grapes', 'raspberry', 'coconut'];
// fruitPrices = [20, 25, 50];

// if (category === 'vegetables') {
//     do {
//         chosenProduct = prompt('Choose product from one of the categories: cabbage, avocado, tomato.')
//         chosenProduct = chosenProduct ? chosenProduct.replaceAll(' ', '').toLowerCase() : '';
//     } while (!vegetables.includes(chosenProduct));

//     productIndex = vegetables.indexOf(chosenProduct);
//     productPrice = vegetablePrices[productIndex];

//     // productPrice = vegetablePrices[vegetables.indexOf(chosenProduct)];

// } else if (category === 'fruits') {
//     do{
//         chosenProduct = prompt('Choose product from one of the categories: grapes, raspberry, coconut.')
//         chosenProduct = chosenProduct ? chosenProduct.replaceAll(' ', '').toLowerCase() : '';
//     }  while (!fruits.includes(chosenProduct));

//     productIndex = fruits.indexOf(chosenProduct);
//     productPrice = fruitPrices[productIndex];

//     // productPrice = fruitPrices[fruits.indexOf(chosenProduct)];

// }

// console.log(chosenProduct);

// do {
//     numberOfGoods = parseInt(prompt(`How many ${chosenProduct} do you want?`));
// } while (isNaN(numberOfGoods) || numberOfGoods < 1);

// console.log(numberOfGoods);

// totalPrice = numberOfGoods * productPrice * seasonPrice;

// console.log(totalPrice);

// document.write(`
//     <div style = "text-align: center">
//         <img src="./images 2/${category}/${chosenProduct}.svg" alt="${chosenProduct}" width="100" height="100">
//         <p> Selected product: <b> ${chosenProduct} </b> </p>
//         <p> Count of ${chosenProduct}: <b> ${numberOfGoods} </b> </p>
//         <p> Selected period: <b> ${season} </b> </p>
//         <p> Selected category: <b> ${category} </b> </p>
//         <p> Final cost: <b> ${totalPrice} </b> </p>
//     </div>
//     `);