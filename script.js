numberArray = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
positiveSum = 0;
countPositive = 0;

for (i = 0; i < numberArray.length; i++) {
    if (numberArray[i] > 0) {
        positiveSum += numberArray[i];
        countPositive++;
    }
}

console.log(`Sum of positive elements: ${positiveSum}`);
console.log(`Number of positive elements in your array: ${countPositive}`);

// *******************************************************************************************************************

smallestNumber = numberArray[0];

for (i = 0; i < numberArray.length; i++){
    if (numberArray[i] < smallestNumber) {
        smallestNumber = numberArray[i];
        indexOfSmallest = numberArray.indexOf(smallestNumber);
    }
}

console.log(`The smallest number in your array is: ${smallestNumber}`);
console.log(`The index of smallest number in your array is: ${indexOfSmallest}`);

// *******************************************************************************************************************

largestNumber = numberArray[0];

for (i = 0; i < numberArray.length; i++){
    if (numberArray[i] > largestNumber) {
        largestNumber = numberArray[i];
        indexOfLargest = numberArray.indexOf(largestNumber);
    }
}

console.log(`The largest number in your array is: ${largestNumber}`);
console.log(`The index of largest number in your array is: ${indexOfLargest}`);

// *******************************************************************************************************************

countNegative = 0;

for (i = 0; i < numberArray.length; i++) {
    if (numberArray[i] < 0) {
        countNegative++;
    }
}

console.log(`Number of negative elements in your array: ${countNegative}`);

// *******************************************************************************************************************

countOddPositive = 0;

for (i = 0; i < numberArray.length; i++) {
    if (numberArray[i] > 0 && numberArray[i] % 2 !== 0) {
        countOddPositive++;
    }
}

console.log(`Number of odd positive elements in your array: ${countOddPositive}`);

// *******************************************************************************************************************

countEvenPositive = 0;

for (i = 0; i < numberArray.length; i++) {
    if (numberArray[i] > 0 && numberArray[i] % 2 === 0) {
        countEvenPositive++;
    }
}

console.log(`Number of even positive elements in your array: ${countEvenPositive}`);

evenPositiveSum = 0;

// *******************************************************************************************************************

for (i = 0; i < numberArray.length; i++) {
    if (numberArray[i] > 0 && numberArray[i] % 2 === 0) {
        evenPositiveSum += numberArray[i];
    }
}

console.log(`Sum of even positive elements in your array: ${evenPositiveSum}`);

// *******************************************************************************************************************

oddPositiveSum = 0;

for (i = 0; i < numberArray.length; i++) {
    if (numberArray[i] > 0 && numberArray[i] % 2 !== 0) {
        oddPositiveSum += numberArray[i];
    }
}

console.log(`Sum of odd positive elements in your array: ${oddPositiveSum}`);

// *******************************************************************************************************************

positiveProduct = 1;

for (i = 0; i < numberArray.length; i++) {
    if (numberArray[i] > 0) {
        positiveProduct *= numberArray[i];
    }
}

console.log(`Product of positive elements: ${positiveProduct}`);

// *******************************************************************************************************************

largestNumber = numberArray[0];

for (i = 0; i < numberArray.length; i++){
    if (numberArray[i] > largestNumber) {
        largestNumber = numberArray[i];
    }
} 

for (i = 0; i < numberArray.length; i++){
    if (numberArray[i] != largestNumber) {
        numberArray[i] = 0;
    }
} 

console.log(`The largest number in your array is: ${largestNumber}`);
console.log(`All the other numbers except the largest have become: ${numberArray}`);










