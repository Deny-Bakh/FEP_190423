// function Human(name, age) {
//   this.name = name;
//   this.age = age;

//   this.revealInfo = function() {
//     console.log(`Name: ${this.name}\nAge: ${this.age}`);
//   }
// }

// function Vehicle(brand, color, yearOfIssue, plateNumber, owner) {
//   this.brand = brand;
//   this.color = color;
//   this.yearOfIssue = yearOfIssue;
//   this.plateNumber = plateNumber;

//   this.assignOwner = function(owner) {
//     if(owner.age > 18) {
//       this.owner = owner;
//     } else this.errorMessage = (`Cannot assign owner of ${this.brand}.\n${owner.name} is under 18 years old. And is not allowed to drive or own a car.\nPerheps this car belongs to one of the parents`);
//   }

//   this.revealAllInfo = function() {
//     console.log(`Brand: ${this.brand}\nColor: ${this.color}\nYear of Issue: ${this.yearOfIssue}\nPlate Number: ${this.plateNumber}`);
//     if(this.owner) {
//       console.log(`Owner Information:`);
//       this.owner.revealInfo()
//     } else{
//       console.log(this.errorMessage);
//     }
//   }
// };

// const human1 = new Human('Tanya', 33);
// const human2 = new Human('Olaf', 19);
// const human3 = new Human('Sandra', 16);

// const humanCar1 = new Vehicle('BMW', 'Yellow', 1993, 'BM4353GQ');
// const humanCar2 = new Vehicle('Audi', 'Black', 2003, 'SD43654FU');
// const humanCar3 = new Vehicle('Volvo', 'Red', 2010, 'WE5678ZX');

// humanCar1.assignOwner(human1);
// humanCar2.assignOwner(human2);
// humanCar3.assignOwner(human3);

// humanCar1.revealAllInfo();
// console.log(`-----------------`);
// humanCar2.revealAllInfo();
// console.log(`-----------------`);
// humanCar3.revealAllInfo();
// console.log(`-----------------`);

// *****************************************************************************************


function Human(name, age) {
  this.name = name;
  this.age = age;

  this.revealInfo = function() {
    console.log(`Name: ${this.name}\nAge: ${this.age}`);
  }
}

function Vehicle(brand, color, yearOfIssue, plateNumber) {
  this.brand = brand;
  this.color = color;
  this.yearOfIssue = yearOfIssue;
  this.plateNumber = plateNumber;

  this.assignOwner = function(owner) {
    if (owner.age > 18) {
      this.owner = owner;
    } else {
      this.errorMessage = (`Cannot assign owner of ${this.brand}.\n${owner.name} is under 18 years old. And is not allowed to drive or own a car.\nPerhaps this car belongs to one of the parents`);
    }
  };

  this.revealAllInfo = function() {
    console.log(`Brand: ${this.brand}\nColor: ${this.color}\nYear of Issue: ${this.yearOfIssue}\nPlate Number: ${this.plateNumber}`);
    if(this.owner) {
      console.log(`Owner Information:`);
      this.owner.revealInfo()
    } else{
      console.log(this.errorMessage);
    }
  }
};

const human1 = new Human('Tanya', 33);
const human2 = new Human('Olaf', 19);
const human3 = new Human('Sandra', 16);

const car1 = new Vehicle('BMW', 'Yellow', 1993, 'BM4353GQ');
const car2 = new Vehicle('Audi', 'Black', 2003, 'SD43654FU');
const car3 = new Vehicle('Volvo', 'Red', 2010, 'WE5678ZX');

car1.assignOwner(human1);
car2.assignOwner(human2);
car3.assignOwner(human3);

car1.revealAllInfo();
console.log('-----------------');
car2.revealAllInfo();
console.log('-----------------');
car3.revealAllInfo();
console.log('-----------------');

// *************************************************************************************************

// const humans = [
//   new Human('Tanya', 33),
//   new Human('Olaf', 19),
//   new Human('Sandra', 16)
// ];

// const vehicles = [
//   new Vehicle('BMW', 'Yellow', 1993, 'BM4353GQ'),
//   new Vehicle('Audi', 'Black', 2003, 'SD43654FU'),
//   new Vehicle('Volvo', 'Red', 2010, 'WE5678ZX')
// ];

// vehicles.forEach((vehicle, i) => {
//   vehicle.assignOwner(humans[i]);
// });

// vehicles.forEach((vehicle) => {
//   vehicle.revealAllInfo();
//   console.log(`-----------------`);
// });

// *************************************************************************************************

// const vehicles = [
//   new Vehicle('BMW', 'Yellow', 1993, 'BM4353GQ'),
//   new Vehicle('Audi', 'Black', 2003, 'SD43654FU'),
//   new Vehicle('Volvo', 'Red', 2010, 'WE5678ZX'),
// ]

// const vehicles = [ 
//   {
//     brand: 'BMW',
//     color: 'yellow',
//     year: 1993,
//     plateNumber: 'BM4353GQ'
//   },
//   {
//     brand: 'Audi',
//     color: 'Black',
//     year: 2003,
//     plateNumber: 'SD43654FU'
//   },
//   {
//     brand: 'Volvo',
//     color: 'Red',
//     year: 2010,
//     plateNumber: 'WE5678ZX'
//   }
// ]

// const Cars = vehicles.map(function(item){
//  return new Vehicle(item.brand, item.color, item.yearOfIssue, item.plateNumber)
// })

// *************************************************************************************************

// const human1 = new Human('Tanya', 33);
// const human2 = new Human('Olaf', 19);
// const human3 = new Human('Sandra', 16);

// const vehicles = [
//   new Vehicle('BMW', 'Yellow', 1993, 'BM4353GQ'),
//   new Vehicle('Audi', 'Black', 2003, 'SD43654FU'),
//   new Vehicle('Volvo', 'Red', 2010, 'WE5678ZX')
// ];

// vehicles.forEach(function(vehicle, index) {
//   vehicle.assignOwner(eval(`human${index + 1}`));
// });

// vehicles.forEach(function(vehicle) {
//   vehicle.revealAllInfo();
//   console.log(`-----------------`);
// });