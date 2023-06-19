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