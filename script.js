phraseOne = prompt ('What is the first word in Beatles "Let it Be"?');
phraseTwo = prompt ('How do we mark neuter?');
phraseThree = prompt ('Traffic lights show stop and ...?');

console.log(phraseOne + ' ' + phraseTwo + ' ' + phraseThree);

// ****************************************************************************

randomNumber = prompt ('Type in five digits number, please.');
randomNumberString = randomNumber.replaceAll('', ' ').trim();
console.log(randomNumberString);