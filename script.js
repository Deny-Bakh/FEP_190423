
number = 20;

document.write('Numbers from 20 to 30, with a step of 0.5: <br>');
do{
    document.write(number);
    if(number !== 30){
        document.write(', ');
    }
    number += 0.5;
}while (number <= 30);

// **********************************************************************************************

dollar = 27;
numberOfDollars = 10;

document.write('<br> One dollar costs 27 grivnas. Here\'s how many grivnas in 10, 20, 30... 100 dollars: <br>');
do{
    sumOfGrivnas = dollar * numberOfDollars;
    document.write(sumOfGrivnas);
    if(numberOfDollars !== 100){
        document.write(', ')
    }
    numberOfDollars += 10;
}while(numberOfDollars <= 100);

// **********************************************************************************************

integer = prompt('Please input an integer and watch the square happen!');
numberToSquare = 1;

document.write('<br>Those are the square numbers from 1 to 100 which are < than the number you entered <br>')
do{
    squareNumber = numberToSquare * numberToSquare;
    if(squareNumber <= integer){
        document.write(squareNumber + ' ');
    }
    numberToSquare++;
}while(squareNumber <= integer);

// **********************************************************************************************

integerNumber = parseInt(prompt('Please enter a number more than 1 and let\'s see what kind of number it becomes!'));
divideNumber = 2;
isPrime = true;

if (integerNumber <= 1){
    document.write('<br> You entered 1 while you were asked to enter a bigger number <br>');
    } else {
        do{
            if(integerNumber % divideNumber === 0 && divideNumber !== integerNumber){
                isPrime = false;
                break;
            }
            divideNumber++;
        }while(divideNumber < integerNumber);
        if(isPrime){
            document.write(`<br> ${integerNumber} is Prime Number`);
        }else{
        document.write(`<br> ${integerNumber} is not Prime Number`);
        }
    };

// **********************************************************************************************

// someNumber = parseInt(prompt('Enter a number you like and lets see if it is possible to obtain this number by raising the number 3 to a certain power'));
// resultNumber = 1;

// do{
//     resultNumber *= 3;
// }while(resultNumber < someNumber);

// if(resultNumber === someNumber){
//     document.write(`<br> ${someNumber} can be obtained by raising 3 to a power`);
// }else{
//     document.write('<br> Cannot be obtained by raising 3 to a power');
// };

someNumber = parseInt(prompt('Enter a number you like and lets see if it is possible to obtain this number by raising the number 3 to a certain power'));
powerNumber = 0;

do {
  if (3 ** powerNumber === someNumber) {
    document.write(`<br> ${someNumber} can be obtained by raising 3 to a power of ${powerNumber}`);
    break;
  }
  powerNumber++;
} while (3 ** powerNumber <= someNumber);

if (3 ** powerNumber > someNumber) {
  document.write(`<br> ${someNumber} cannot be obtained by raising 3 to a power`);
};