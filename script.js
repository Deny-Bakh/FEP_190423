numberOne = prompt ('Write a random number.');
numberTwo = prompt ('Write another random number and watch th magic happen.');

numberOne = parseFloat(numberOne);
numberTwo = parseFloat(numberTwo);

plusNumbers = numberOne + numberTwo;
extractNumbers = numberOne - numberTwo;
multiplyNumbers = numberOne * numberTwo;
divideNumbers = numberOne / numberTwo;

alert(`${numberOne}+${numberTwo}=${plusNumbers}\n${numberOne}-${numberTwo}=${extractNumbers}\n${numberOne}*${numberTwo}=${multiplyNumbers}\n${numberOne}/${numberTwo}=${divideNumbers}`);