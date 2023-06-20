// const OPERATIONS = {
//   '+': (x, y) => x + y,
//   '-': (x, y) => x - y,
//   '/': (x, y) => x / y,
//   '*': (x, y) => x * y,
//   '%': (x, y) => x % y
// };
// class SuperMath {

//   check(obj) {
//     const userMath = confirm(`Do you want to perform the operation ${obj.znak} with ${obj.x} and ${obj.y}?`);
//     if (userMath) {
//       const result = OPERATIONS[obj.znak](obj.x, obj.y);
//       alert(`This is your result: ${result}`);
//     } else {
//       this.input();
//     }
//   }

//   input() {
//     do {
//       this.x = parseFloat(prompt('Please enter X number'));
//     } while (isNaN(this.x) || !this.x);

//     do {
//       this.y = parseFloat(prompt('Please enter Y number'));
//     } while (isNaN(this.y) || !this.y);

//     do {
//       this.znak = prompt(`Please enter a sign (${Object.keys(OPERATIONS).join(', ')})`);
//     } while (!Object.keys(OPERATIONS).includes(this.znak));

//     this.check({x: this.x, znak: this.znak, y: this.y});
//   }
// }

// const mathResult = new SuperMath();
// mathResult.check({x: 12, y: 3, znak: '/'});

// ********************************************************************************************************

// const OPERATIONS = {
//   '+': (x, y) => x + y,
//   '-': (x, y) => x - y,
//   '*': (x, y) => x * y,
//   '/': (x, y) => x / y,
// };

// class SuperMath {
//   constructor() {
//     this.input();
//   }

//   input() {
//     do {
//       this.x = +prompt('Enter x?');
//     } while (isNaN(this.x));
    
//     do {
//       this.y = +prompt('Enter y?');
//     } while (isNaN(this.y));

//     do {
//       this.znak = prompt(`Enter ${this.getOperations()} ?`);
//     } while (!OPERATIONS[this.znak]);

//     return this;
//   }

//   check() {
//     const confirFromUser = confirm(`Do you want to do this ${this.x} ${this.znak} ${this.y}?`);
    
//     return confirFromUser ? OPERATIONS[this.znak](this.x, this.y) : this.input().check();
//   }

//   getOperations() {
//     return Object.keys(OPERATIONS).join(', ');
//   }
// }

// const math = new SuperMath();

// console.log(math.check());

// ********************************************************************************************************

  const OPERATIONS = {
    '+': (x, y) => x + y,
    '-': (x, y) => x - y,
    '/': (x, y) => x / y,
    '*': (x, y) => x * y,
    '%': (x, y) => x % y
  };
  class SuperMath {
    constructor() {
      this.validation = {
        checkIfNumber: {
          rule: (data) => !isNaN(parseFloat(data)),
          validationMessage: 'Please enter a NUMBER!!!'
        },
        checkIfSign: {
          rule: (data) => Object.keys(OPERATIONS).includes(data),
          validationMessage: 'Please enter a SIGN!!!'
        }
      }
    }
    
    check(obj) {
      const userMath = confirm(`Do you want to perform the operation ${obj.znak} with ${obj.x} and ${obj.y}?`);
      if (userMath) {
        const result = OPERATIONS[obj.znak](obj.x, obj.y);
        alert(`This is your result: ${result}`);
      } else {
        this.input();
      }
    }

    input() {
      this.x = parseFloat(this.showPrompt('Please enter X number', this.validation.checkIfNumber));
      this.y = parseFloat(this.showPrompt('Please enter Y number', this.validation.checkIfNumber));
      this.znak = this.showPrompt(`Please enter a sign (${Object.keys(OPERATIONS).join(', ')})`, this.validation.checkIfSign);
  
      this.check({x: this.x, znak: this.znak, y: this.y});
    }

    showPrompt(message, validation) {
      let promptResult;
      promptResult = prompt(message);

      if (validation.rule(promptResult)) {
        return promptResult
      } else {
        return this.showPrompt(validation.validationMessage, validation);
      }
    }
  }
  
  const mathResult = new SuperMath();
  mathResult.check({x: 12, y: 3, znak: '/'});

  // ********************************************************************************************************

  // const OPERATIONS = {
  //   '+': (x, y) => x + y,
  //   '-': (x, y) => x - y,
  //   '/': (x, y) => x / y,
  //   '*': (x, y) => x * y,
  //   '%': (x, y) => x % y
  // };
  // class SuperMath {
  //   constructor() {
  //     this.validation = {
  //       checkIfNumber: {
  //         rule: (data) => !isNaN(parseFloat(data)),
  //         validationMessage: 'Please enter a NUMBER!!!'
  //       },
  //       checkIfSign: {
  //         rule: (data) => Object.keys(OPERATIONS).includes(data),
  //         validationMessage: 'Please enter a SIGN!!!'
  //       }
  //     }
  //     this.input();
  //   }
    
  //   check() {
  //     const userMath = confirm(`Do you want to perform the operation ${this.znak} with ${this.x} and ${this.y}?`);
  //     if (userMath) {
  //       const result = OPERATIONS[this.znak](this.x, this.y);
  //       alert(`This is your result: ${result}`);
  //     } else {
  //       this.input().check();
  //     }
  //   }

  //   input() {
  //     this.x = parseFloat(this.showPrompt('Please enter X number', this.validation.checkIfNumber));
  //     this.y = parseFloat(this.showPrompt('Please enter Y number', this.validation.checkIfNumber));
  //     this.znak = this.showPrompt(`Please enter a sign (${Object.keys(OPERATIONS).join(', ')})`, this.validation.checkIfSign);
  
  //     return this;
  //   }

  //   showPrompt(message, validation) {
  //     let promptResult;
  //     promptResult = prompt(message);

  //     if (validation.rule(promptResult)) {
  //       return promptResult
  //     } else {
  //       return this.showPrompt(validation.validationMessage, validation);
  //     }
  //   }
  // }
  
  // const mathResult = new SuperMath();
  // mathResult.check();

  // Have a nice day)