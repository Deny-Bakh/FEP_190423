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

console.log(`Price with condiment: ${hamburger.calculatePrice()}`);

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