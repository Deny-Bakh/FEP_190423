do {
    arrayLength = parseInt(prompt('Please tell us the number of elements you want in your array. But because in our future calulations we need 5 or more elements it cannot be less, than five'));
} while (isNaN(arrayLength) || arrayLength === null || arrayLength < 5);

document.write(`The number of elements of your array is ${arrayLength} <br>`);

userArray = [];
for (i = 0; i < arrayLength; i++) {
    do {
        arrayElement = parseInt(prompt(`Enter your ${i+1} element of array. It can only be numbers The amount of them depends on what you entered in the previous prompt`));
    } while (isNaN(arrayElement) || arrayElement === null);
    userArray.push(arrayElement);
};

document.write(`Array before sorting: ${userArray.join(', ')} <br>`);

for (i = 0; i<userArray.length; i++) {
    for (let j = i + 1; j < userArray.length; j++) {
        if (userArray[i] > userArray[j]) {
            temp = userArray[i];
            userArray[i] = userArray[j];
            userArray[j] = temp;
        }
    }
};
  
document.write(`Array after sorting: ${userArray.join(', ')} <br>`);

userArray.splice(1, 3);

document.write(`Array after deleting elements: ${userArray.join(', ')}`);

// ***********************************************************************************************

// length = prompt("Введіть довжину масиву:");
// arr = [];

// for (i = 0; i < length; i++) {
//   element = prompt(`Введіть елемент #${i + 1}:`);
//   if (!isNaN(element)) {
//     arr.push(Number(element));
//   } else if (element.startsWith("-") && !isNaN(element.slice(1))) {
//     arr.push(-1 * Number(element.slice(1)));
//   } else {
//     arr.push(element);
//   }
// }

// numbersArr = [];
// stringsArr = [];

// for (i = 0; i < arr.length; i++) {
//   if (typeof arr[i] === "number") {
//     numbersArr.push(arr[i]);
//   } else {
//     stringsArr.push(arr[i]);
//   }
// }

// for (i = 0; i < numbersArr.length - 1; i++) {
//   for (j = 0; j < numbersArr.length - i - 1; j++) {
//     if (numbersArr[j] > numbersArr[j + 1]) {
//       temp = numbersArr[j];
//       numbersArr[j] = numbersArr[j + 1];
//       numbersArr[j + 1] = temp;
//     }
//   }
// }

// for (i = 0; i < stringsArr.length - 1; i++) {
//   for (j = 0; j < stringsArr.length - i - 1; j++) {
//     if (stringsArr[j] > stringsArr[j + 1]) {
//       temp = stringsArr[j];
//       stringsArr[j] = stringsArr[j + 1];
//       stringsArr[j + 1] = temp;
//     }
//   }
// }

// sortedArr = numbersArr.concat(stringsArr);

// document.write("Масив: ");
// for (i = 0; i < sortedArr.length; i++) {
//   document.write(sortedArr[i] + " ");
// };