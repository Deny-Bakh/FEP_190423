variantNumberOne = prompt ('Please write a random number and watch a magic happen');
variantNumberTwo = prompt ('Please write another random number and this time there will be magic for sure');
variantNumberThree = prompt ('We know that we ask a lot but can you please write another number and you will see magic 100%');

variantNumberOne = parseFloat(variantNumberOne);
variantNumberTwo = parseFloat(variantNumberTwo);
variantNumberThree = parseFloat(variantNumberThree);

averageOfNumbers = (variantNumberOne + variantNumberTwo + variantNumberThree)/3;

alert( 'This is your average number' + ' ' + averageOfNumbers + ', ' + 'which appeared from your numbers.\nMagic');