
plus = 10;

document.write('Numbers from 10 to 20: <br>');
while (plus <=20) {
    document.write(plus)
    if(plus !== 20){
        document.write(', ');
    }
    plus++;
};

// plus = 10;
// resultPlusOne = '';

// while (plus <=20) {
//     resultPlusOne += plus;
//     if(plus < 20){
//         resultPlusOne += ', ';
//     }
//     plus++;
// }

// document.write (`Numbers from 10 to 20: <br> ${resultPlusOne} <br>`);
// **********************************************************************************************

square = 10;

document.write('<br> Square numbers of 10 to 20: <br>');
do{
    document.write(square**2);
    if(square !==20){
        document.write(', ');
    }
    square++;
}while(square <=20);

// **********************************************************************************************

multiply = 1;

document.write('<br> Multiplication board for 7: <br>');
do {
    resultMultiplication = multiply * 7;
    document.write(`${multiply} * 7 = ${resultMultiplication} <br>`);
    multiply++
} while(multiply <= 10);

// **********************************************************************************************

sum = 0;
sumResult = 1;

do {
    sum += sumResult
    sumResult++;
} while (sumResult <= 15);

document.write(`Product of integers from 1 to 15: ${sum} <br>`);

// **********************************************************************************************

multiplication = 15;
multiplicationResult = 1;

do {
    multiplicationResult *= multiplication;
    multiplication++;
} while (multiplication <= 35);

document.write(`Multiplication Result: ${multiplicationResult} <br>`);

// **********************************************************************************************

arSum = 0;
arMean = 1;
arClicker = 0;

do{
    arSum += arMean;
    arMean++;
    arClicker++;
}while(arMean <= 500);

avDivide = arSum / arClicker;

document.write(`Arithmetic Mean: ${avDivide} <br>`);

// **********************************************************************************************

evenNumbers = 0;
even = 30;

do{
    if(even % 2 === 0){
        evenNumbers += even;
    }
    even++;
}while(even <= 80);

document.write(`Sum of even numbers from 30 to 80: ${evenNumbers} <br>`);

// **********************************************************************************************

numbersEqualThree = 100;

document.write('All numbers that are equal to three from 100 to 200 <br>');
do{
    if(numbersEqualThree % 3 === 0){
        document.write(numbersEqualThree + ' ');
    }
    numbersEqualThree++;
}while(numbersEqualThree <= 200);

// **********************************************************************************************

// naturalNumber = prompt('Enter a natural number, please');
// divider = 1;

// document.write(`<br> All of your ${naturalNumber} dividers: <br>`);
// do{
//     if(naturalNumber % divider === 0){
//         document.write(`${divider} `);
//     }divider++;
// }while(divider < naturalNumber);

// **********************************************************************************************

// naturalNumber = prompt('Enter a natural number, please');
// divider = 1;
// pairClick = 0;


// document.write(`<br> All of your ${naturalNumber} even dividers: <br>`);
// do{
//     if(naturalNumber % divider === 0){
//         // document.write(`${divider} `);
//         if (divider % 2 === 0){
//             pairClick++
//         }
//     }divider++;
// }while(divider < naturalNumber);

// document.write(pairClick)

// **********************************************************************************************
// naturalNumber = prompt('Enter a natural number, please');
// divider = 1;
// pairClick = 0;
// pairClickSum = 0;


// document.write(`<br> The sum of your even dividers: <br>`);
// do{
//     if(naturalNumber % divider === 0){
//         // document.write(`${divider} `);
//         if (divider % 2 === 0){
//             pairClick++
//             pairClickSum += divider;
//         }
//     }divider++;
// }while(divider < naturalNumber);

// document.write(pairClickSum)

// **********************************************************************************************

naturalNumber = prompt('Enter a natural number, please');
divider = 1;
pairClick = 0;
pairClickSum = 0;


document.write(`<br> All of your ${naturalNumber} dividers: <br>`);
do{
    if(naturalNumber % divider === 0){
        document.write(`${divider} `);
        if (divider % 2 === 0){
            pairClick++
            pairClickSum += divider;
        }
    }divider++;
}while(divider < naturalNumber);


document.write(`<br> All of your ${naturalNumber} even dividers: <br> ${pairClick}`)
document.write(`<br> The sum of your even dividers: <br> ${pairClickSum} <br>`)

// **********************************************************************************************

firstMultiplyNumber = 1;

document.write('Multiply board from 1 to 10: <br>')
do{
    secondMultiplyNumber = 1;
    do{
        multiplyResult = firstMultiplyNumber * secondMultiplyNumber
        document.write(`${firstMultiplyNumber}*${secondMultiplyNumber}=${multiplyResult} <br>`);
        secondMultiplyNumber++
    }while(secondMultiplyNumber <=10);
    document.write('<br>');
    firstMultiplyNumber++
}while(firstMultiplyNumber <= 10);

