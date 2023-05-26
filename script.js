      function calculateArithmeticMeanOfNumbers (array) {
        let sum = 0;
        let count = 0;

        for (let i = 0; i < array.length; i++) {
          if (typeof array[i] === 'number') {
            sum += array[i];
            count++;
            }
          }
          if (count === 0) {
            return 0
          }
          return sum / count;
        }


      let array = ['hello', 10, true, 35, null, 43, 'Pedro', 48];
      let mean = calculateArithmeticMeanOfNumbers(array);

      console.log(mean);

    // ***************************************************************************************

    function doMath(x, znak, y) {
      let result;

      switch (znak) {
        case '+':
          result = x + y;
          break;
        case '-':
          result = x - y;
          break;
        case '*':
          result = x * y;
          break;
        case '/':
          result = x / y;
          break;
        case '%':
          result = x % y;
          break;
        case '^':
          result = Math.pow(x, y);
          break;
      }
      return result;
    }

    let x;
    do{
      x = +prompt('Please enter a random number');
    } while (isNaN(x) || !x)

    let y;
    do {
       y = +prompt('Please enter another random number');
  } while (isNaN(y) || !y)

    let znak;
    do {
      znak = prompt('Please enter a sign', '+, -, *, /, %, ^')
    } while(znak !== '+' && znak !== '-' && znak !== '/' && znak !== '*' && znak !== '%' && znak !== '^' );

    let result = doMath(x, znak, y);
    console.log('Result', result);

    // **************************************************************************************************************

    // let mainArrayLength;

    // mainArrrayLength = prompt('Please tell us what size you want your main array to be');

    // let secondaryArrayLength;

    // secondaryArrayLength = prompt('Please tell us what size you want your array inside an array to be');



    function fillTwoDimensionalArray() {

      let mainArrayLength;

      do {
        mainArrayLength = parseInt(prompt('Please tell us what size you want your main array to be'));
      } while (isNaN(mainArrayLength) || !mainArrayLength);

      let innerArrayLength;
  
      do {
        innerArrayLength = parseInt (prompt('Please tell us what size you want your array inside an array to be'));
      } while (isNaN(innerArrayLength) || !innerArrayLength);

      let array = [];

      for (let i = 0; i < mainArrayLength; i++) {
        let innerArray = [];
        for (let j = 0; j < innerArrayLength; j++) {
          let value;
          do {
            value = prompt(`Enter an element: Main: ${i}, Inner Element: ${j}`);
          } while(!value);
          innerArray.push(value);
        }
        array.push(innerArray);
      }
      return array;
    }

    let yourArray = fillTwoDimensionalArray();
    console.log(yourArray);

    // ****************************************************************************************************************

    function removeChars(string, charsToRemove) {

      for (let i = 0; i < charsToRemove.length; i++) {
        string = string.split(charsToRemove[i]).join ('');
      }
      return string;
    }

    let enteredPhrase;
    
    do {
      enteredPhrase = prompt('Please enter a sentence you want to see');
    } while(!isNaN(enteredPhrase) || !enteredPhrase);

    let deletedSymbol = prompt('Please enter symbols you want to remove from your previous sentence', enteredPhrase);

    let modifiedPhrase = removeChars(enteredPhrase, deletedSymbol);
    console.log(modifiedPhrase);

    // function removeSymbol() {

    //   let enteredPhrase = prompt('Please enter a sentence you want to see');

    //   let deletedSymbol = prompt('Please enter symbols you want to remove from your previous sentence', enteredPhrase);

    //   for (let i = 0; i < enteredPhrase.length; i++) {
    //     enteredPhrase = enteredPhrase.replaceAll(deletedSymbol, '');
    //   }
    //   return enteredPhrase;
    // }

    // let modifiedPhrase = removeSymbol();
    // console.log(modifiedPhrase);
