
// const OPERATIONS = {
//   '+': (x, y) => x + y,
//   '-': (x, y) => x - y,
//   '/': (x, y) => x / y,
//   '*': (x, y) => x * y,
//   '+': (x, y) => x + y,
// }
// class SuperMath {
//   constructor(x, y, znak) {
//     this.x = x;
//     this.y = y;
//     this.znak = znak;
//   }
//   check(obj) {
//     const userMath = confirm(`Do you want to perform the operation ${obj.znak} with ${obj.X} and ${obj.Y} (YES/NO)`);

//     if (userMath) {
//       const result = this.calculate(obj.X, obj.Y, obj.znak);
//       console.log(result);
//     } else {
//       this.input();
//     }
//   }

//     input() {
//       let X;
//       do{
//       X = parseFloat(prompt('Please enter X number'));
//       } while (isNaN(X) || !X);

//       let Y;
//       do {
//          Y = parseFloat(prompt('Please enter Y number'));
//       } while (isNaN(Y) || !Y);

//       const validOperators = ['+', '-', '/', '*', '%'];
    
//       let znak;
//       do {
//         znak = prompt('Please enter a sign', '+, -, *, /, %')
//       } while(!validOperators.includes(znak));

//       const obj = { X, Y, znak };
//       this.check(obj);
//     }

//     calculate(X, Y, znak) {
//       let result;

//       switch (znak) {
//         case '+':
//           result = X + Y
//           break;
//         case '-':
//           result = X - Y
//           break;
//         case '/':
//           result = X / Y
//           break;
//         case '*':
//           result = X * Y
//           break;
//         case '%':
//           result = X % Y
//           break;
//         default:
//           return NaN;
//       }
//       return result;
//     }
// }

//   const p = new SuperMath();
//   const obj = { X: 12, Y: 3, znak: '/' };
//   p.check(obj);

// class SuperMath {
//   check(obj) {
//     const { X, Y, znak } = obj;

//     // const userMath = prompt(`Do you want to perform the operation ${obj.znak} with ${obj.X} and ${obj.Y} (YES/NO)`)

//     // if(userMath.toLowerCase() === 'yes') {
//     //     const result = this.calculate(X, Y, znak)
//     //     console.log(result);
//     //   } else {
//     //   this.input();
//     // }

//     let userMath = '';
//     while (userMath.toLocaleLowerCase() !== 'yes' && userMath.toLocaleLowerCase() !== 'no') {
//       userMath = prompt(`Do you want to perform the operation ${obj.znak} with ${obj.X} and ${obj.Y} (YES/NO)`)
//     }
//         if(userMath.toLowerCase() === 'yes') {
//         const result = this.calculate(X, Y, znak)
//         console.log(result);
//       } else {
//       this.input();
//     }
//   }

//     input() {
//       let X;
//       do{
//       X = parseFloat(prompt('Please enter X number'));
//       } while (isNaN(X) || !X);

//       let Y;
//       do {
//          Y = parseFloat(prompt('Please enter Y number'));
//       } while (isNaN(Y) || !Y);

//       const validOperators = ['+', '-', '/', '*', '%'];
    
//       let znak;
//       do {
//         znak = prompt('Please enter a sign', '+, -, *, /, %')
//       } while(!validOperators.includes(znak));

//       const obj = { X, Y, znak };
//       this.check(obj);
//     }

//     calculate(X, Y, znak) {
//       let result;

//       switch (znak) {
//         case '+':
//           result = X + Y
//           break;
//         case '-':
//           result = X - Y
//           break;
//         case '/':
//           result = X / Y
//           break;
//         case '*':
//           result = X * Y
//           break;
//         case '%':
//           result = X % Y
//           break;
//         default:
//           return NaN;
//       }
//       return result;
//     }
// }

//   const p = new SuperMath();
//   const obj = { X: 12, Y: 3, znak: '/' };
//   p.check(obj);

// const OPERATIONS = {
//   '+': (x, y) => x + y,
//   '-': (x, y) => x - y,
//   '/': (x, y) => x / y,
//   '*': (x, y) => x * y,
//   '%': (x, y) => x % y
// };

// class SuperMath {
//   constructor(x, y, znak) {
//     this.x = x;
//     this.y = y;
//     this.znak = znak;
//   }

//   check(obj) {
//     const userMath = confirm(`Do you want to perform the operation ${obj.znak} with ${obj.x} and ${obj.y}?`);
    
//     if (userMath) {
//       // const result = OPERATIONS[this.znak](this.x, this.y);
//       const result = this.calculate(this.x, this.y, this.znak)
//       console.log(result);
//     } else {
//       this.input();
//     }
//   }

//     input() {
//     do {
//       this.x = parseInt(prompt('Please enter X number'));
//     } while (isNaN(this.x) || !this.x);

//     do {
//       this.y = parseInt(prompt('Please enter Y number'));
//     } while (isNaN(this.y) || !this.y);

//     do {
//       this.znak = prompt(`Please enter a sign (${Object.keys(OPERATIONS).join(', ')})`);
//     } while (!Object.keys(OPERATIONS).includes(this.znak));

//     this.check({x: this.x, znak: this.znak, y: this.y});
//   }
  
//     calculate(x, y, znak) {
//     const result = O[znak](x, y);
//     return result;
//     }
// }

// const mathResult = new SuperMath();
// const obj = {x: 12, y: 3, znak: '/'};
// mathResult.check(obj);


// const OPERATIONS = {
//   '+': (x, y) => x + y,
//   '-': (x, y) => x - y,
//   '/': (x, y) => x / y,
//   '*': (x, y) => x * y,
//   '%': (x, y) => x % y
// };
// class SuperMath {
//   constructor(x, y, znak) {
//     this.x = x;
//     this.y = y;
//     this.znak = znak;
//   }

//   check(obj) {
//     const {x, y, znak } = obj;
//     const userMath = confirm(`Do you want to perform the operation ${obj.znak} with ${obj.x} and ${obj.y}?`);

//     if (userMath) {
//       const result = OPERATIONS[znak](x, y);
//       console.log(result);
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

//   // calculate(x, y, znak) {
//   //   const result = OPERATIONS[znak](x, y);
//   //   return result;
//   //   }
// }

// const mathResult = new SuperMath();
// const obj = { x: 12, y: 3, znak: '/' };
// mathResult.check(obj);

const OPERATIONS = {
  '+': (x, y) => x + y,
  '-': (x, y) => x - y,
  '/': (x, y) => x / y,
  '*': (x, y) => x * y,
  '%': (x, y) => x % y
};
class SuperMath {

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
    do {
      this.x = parseFloat(prompt('Please enter X number'));
    } while (isNaN(this.x) || !this.x);

    do {
      this.y = parseFloat(prompt('Please enter Y number'));
    } while (isNaN(this.y) || !this.y);

    do {
      this.znak = prompt(`Please enter a sign (${Object.keys(OPERATIONS).join(', ')})`);
    } while (!Object.keys(OPERATIONS).includes(this.znak));

    this.check({x: this.x, znak: this.znak, y: this.y});
  }
}

const mathResult = new SuperMath();
mathResult.check({x: 12, y: 3, znak: '/'});

  // constructor(x, y, znak) {
  //   this.x = x;
  //   this.y = y;
  //   this.znak = znak;
  // }
    // const {x, y, znak } = obj;

  // calculate(x, y, znak) {
  //   const result = OPERATIONS[znak](x, y);
  //   return result;
  //   }