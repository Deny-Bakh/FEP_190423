// Мережа фастфудів пропонує кілька видів гамбургерів:

// маленький (50 тугриків, 20 калорій);
// великий (100 тугриків, 40 калорій).


// Гамбургер може бути з одним із декількох видів начинок:

// сиром (+ 10 тугриків, + 20 калорій);
// салатом (+ 20 тугриків, + 5 калорій);
// картоплею (+ 15 тугриків, + 10 калорій).


// Можна додати добавки:

// посипати приправою (+15 тугриків, 0 калорій) - полити майонезом (+ 20 тугриків, +5 калорій).


// Напишіть програму, яка розраховує вартість та калорійність гамбургера. Використовуйте ООП підхід.

// (підказка: потрібен клас Гамбургер, константи, методи для вибору опцій та розрахунку потрібних величин)

// class Hamburger {
//   constructor(size, filling, topping) {
//     this.size = size;
//     this.filling = filling;
//     this.topping = topping;
//   }

//   getPrice() {
//     let price = 0;

//     if (this.size === 'small') {
//       price += 50;
//     } else if (this.size === 'big') {
//       price += 100;
//     }

//     if (this.filling === 'cheese') {
//       price += 10;
//     } else if (this.filling === 'salad') {
//       price += 20;
//     } else if (this.filling === 'fries') {
//       price += 15;
//     }

//     // if (this.topping === 'seasoning') {
//     //   price += 15;
//     // } else {
//     //   price += 20;
//     // }

//     if(Array.isArray(this.topping)) {
//       this.topping.forEach((topping) => {
//         if (topping === 'seasoning') {
//           price += 15;
//         } else if (topping === 'mayo') {
//           price += 20;
//         }
//       })
//     } 

//     return price;
//   }

//   getCalories() {
//     let calories = 0;

//     if (this.size === 'small') {
//       calories += 20;
//     } else if (this.size === 'big') {
//       calories += 40;
//     }

//     if (this.filling === 'cheese') {
//       calories += 20;
//     } else if (this.filling === 'salad') {
//       calories += 5;
//     } else if (this.filling === 'fries') {
//       calories += 10;
//     }

//     if (Array.isArray(this.topping)) {
//       if (this.topping.includes('mayo')) {
//         calories += 5;
//       }
//     }

//     // if (this.topping === 'condiment') {
//     //   price += 15;
//     // } else {
//     //   price += 20;
//     // }
//     return calories;
//   }
// }

// const myOrder = new Hamburger ('big', 'cheese', ['mayo']);

// const price = myOrder.getPrice();
// const calories = myOrder.getCalories();

// console.log('Price:', price);
// console.log('Calories:', calories);

// class Hamburger {
//   constructor(size, stuffing) {
//     this.size = size;
//     this.stuffing = stuffing;
//     this.toppings = [];
//   }

//   addTopping(topping) {
//     this.toppings.push(topping);
//   }

//   calculatePrice() {
//     let totalPrice = this.size.price + this.stuffing.price;
//     this.toppings.forEach(topping => {
//       totalPrice += topping.price;
//     });
//     return totalPrice;
//   }

//   calculateCalories() {
//     let totalCalories = this.size.calories + this.stuffing.calories;
//     this.toppings.forEach(topping => {
//       totalCalories += topping.calories;
//     });
//     return totalCalories;
//   }
// }

// const SIZE_SMALL = {
//   name: "Small",
//   price: 50,
//   calories: 20,
// };

// const SIZE_LARGE = {
//   name: "Large",
//   price: 100,
//   calories: 40,
// };

// const STUFFING_CHEESE = {
//   name: "Cheese",
//   price: 10,
//   calories: 20,
// };

// const STUFFING_SALAD = {
//   name: "Salad",
//   price: 20,
//   calories: 5,
// };

// const STUFFING_POTATO = {
//   name: "Potato",
//   price: 15,
//   calories: 10,
// };

// // Toppings
// const TOPPING_SPICE = {
//   name: "Spice",
//   price: 15,
//   calories: 0,
// };

// const TOPPING_MAYO = {
//   name: "Mayo",
//   price: 20,
//   calories: 5,
// };

// const sizeSmall = SIZE_SMALL;
// const stuffingCheese = STUFFING_CHEESE;

// const hamburger = new Hamburger(sizeSmall, stuffingCheese);
// hamburger.addTopping(TOPPING_MAYO);

// console.log("Calories: " + hamburger.calculateCalories());
// console.log("Price: " + hamburger.calculatePrice());

// hamburger.addTopping(TOPPING_SPICE);

// console.log("Price with sauce: " + hamburger.calculatePrice());

// class Hamburger {
//   static SIZE_SMALL = {
//     price: 50,
//     calories: 20,
//   };
//   static SIZE_LARGE = {
//     price: 100,
//     calories: 40,
//   };
//   static STUFFING_CHEESE = {
//     price: 10,
//     calories: 20,
//   };
//   static STUFFING_SALAD = {
//     price: 20,
//     calories: 5,
//   };
//   static STUFFING_POTATO = {
//     price: 15,
//     calories: 10,
//   };
//   static TOPPING_SPICE = {
//     price: 15,
//     calories: 0,
//   };
//   static TOPPING_MAYO = {
//     price: 20,
//     calories: 5,
//   };
  
//   constructor(size, stuffing) {
//     this.size = size;
//     this.stuffing = stuffing;
//     this.toppings = [];
//   }
  
//   addTopping(topping) {
//     this.toppings.push(topping);
//   }
  
//   calculatePrice() {
//     let totalPrice = this.size.price + this.stuffing.price;
//     this.toppings.forEach(topping => {
//       totalPrice += topping.price;
//     });
//     return totalPrice;
//   }
  
//   calculateCalories() {
//     let totalCalories = this.size.calories + this.stuffing.calories;
//     this.toppings.forEach(topping => {
//       totalCalories += topping.calories;
//     });
//     return totalCalories;
//   }
// }

// ************************************************************************************

class Hamburger {
  static SIZE_SMALL = {
    price: 50,
    calories: 20,
  }

  static SIZE_LARGE = {
    price: 100,
    calories: 40,
  }

  static STUFFING_CHEESE = {
    price: 10,
    calories: 20,
  }

  static STUFFING_SALAD = {
    price: 20,
    calories: 5,
  }

  static STUFFING_POTATO = {
    price: 15,
    calories: 10,
  }

  static TOPPING_CONDIMENT = {
    price: 15,
    calories: 0,
  }

  static TOPPING_MAYO = {
    price: 20,
    calories: 5,
  }

  constructor (size, stuffing) {
    this.size = size;
    this.stuffing = stuffing;
    this.toppings = [];
  }

  addTopping(topping) {
    this.toppings.push(topping);
  }

  calculatePrice() {
    const totalPrice = this.size.price + this.stuffing.price + this.toppings.reduce((acc, topping) => acc + topping.price, 0);
    return totalPrice;
  }

  calculateCalories() {
    const totalCalories = this.size.calories + this.stuffing.calories + this.toppings.reduce((acc, topping) => acc + topping.calories, 0);
    return totalCalories;
  }
}

let hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);

hamburger.addTopping(Hamburger.TOPPING_MAYO);

console.log(`Calories: ${hamburger.calculateCalories()}`);

console.log(`Price: ${hamburger.calculatePrice()}`);

hamburger.addTopping(Hamburger.TOPPING_CONDIMENT);

console.log(`Price with sauce: ${hamburger.calculatePrice()}`);

  // calculatePrice() {
  //   const totalPrice = this.size.price + this.stuffing.price;
  //   this.topping.forEach((topping) => {
  //     totalPrice += topping.price;
  //   })
  //   return totalPrice;
  // }
  // calculateCalories() {
  //   const totalCalories = this.size.calories + this.stuffing.calories;
  //   this.topping.forEach((topping) => {
  //     totalPrice += topping.calories;
  //   })
  //   return totalCalories;
  // }