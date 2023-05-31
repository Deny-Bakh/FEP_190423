function deepClone(array) {
  const newArray = [];

  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      newArray[i] = deepClone(array[i]);
    } else {
      newArray[i] = array[i];
    }
  }
  return newArray;
}

const array = [
  [["some text", true, [1, 2, 3, 4, [10, 20]]]],
  [
    [1, 2, 3, [100, 200]],
    ["name", "age"],
  ],
];

const clonedArray = deepClone(array);
console.log(clonedArray);


// function deepClone(array) {
//   return array.map(function(item) {
//     if (Array.isArray(item)) {
//       return deepClone(item);
//     } else {
//       return item;
//     }
//   });
// }

// const array = [
//   [["some text", true, [1, 2, 3, 4, [10, 20]]]],
//   [
//     [1, 2, 3, [100, 200]],
//     ["name", "age"],
//   ],
// ];

// const clonedArray = deepClone(array);
// console.log(clonedArray);