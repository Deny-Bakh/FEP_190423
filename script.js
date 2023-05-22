function removeElement(array, item) {
  for (i = 0; i < array.length; i++) {
    if (array[i] === item) {
      array.splice(i, 1);
      i--;
    }
  }
  return array;
};

array = [1, 2, 3, 4, 5, 6, 7, 5, 8, 5, 9, 5, 10, 5];
removeElement(array, 5);
console.log(array);
removeElement(array, 3);
console.log(array);
removeElement(array, 1);
console.log(array);
// ********************************************************************************

// function removeElement(array, item) {
//   i = 0;
//   while (i < array.length) {
//     if (array[i] === item) {
//       array.splice(i, 1);
//     } else {
//       i++;
//     }
//   }
//   return array;
// }

// const array = [1, 2, 3, 4, 5, 6, 7, 5, 8, 5, 9, 5, 10, 5];
// removeElement(array, 5);
// console.log(array);

// ********************************************************************************

// Це найкраще дитятко, бо воно не кромсає перший масив і дає можливість, юзати його знову і знову. Але наскільки я розумію, це не було умовою.

// function removeElement (array, item) {
// 	resultArray = [];
  
//   for (i = 0; i < array.length; i++) {
//   	if (array[i] !== item) {
//     	resultArray.push(array[i])
//     }
//   }
//   console.log(resultArray)
//   return resultArray;
// }

// array = [1, 2, 3, 4, 5, 6, 7, 5, 8, 5, 9];
// removeElement(array, 5);
// removeElement(array, 1);
// removeElement(array, 2);

// або виводити таким чином:
// resultArray = removeElement(array, 5);
// console.log(resultArray);

// ********************************************************************************

// Видаляє тільки перший item, інші не зачіпає. Не повноцінний метод.

// function removeElement(array, item) {
//   itemToRemove = array.indexOf(item)
//   if (itemToRemove !== -1) {
//     array.splice(itemToRemove, 1);
//   }
//   return array;
// };

// array = [1, 2, 3, 4, 5, 6, 7, 5, 8, 9];
// removeElement(array, 5 );
// console.log(array);

// function removeElement(array, item) {
//   itemToRemove = array.indexOf(item)
//   while (itemToRemove !== -1) {
//     array.splice(itemToRemove, 1);
//     itemToRemove = array.indexOf(item);
//   }
//   return array;
// };

// array = [1, 2, 3, 4, 5, 6, 7, 5, 8, 5, 9];
// removeElement(array, 5 );
// console.log(array);











