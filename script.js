class Human {
  constructor(name, sex) {
    this.name = name;
    this.sex = sex;
  }
}

class Apartment {
  constructor() {
    this.residents = [];
  }

  addResident(human) {
      this.residents.push(human);
      console.log(`${human.name} who is ${human.sex} bought an apartment`);
  }
}

class Building {
  constructor(maxApartments) {
    this.apartments = [];
    this.maxApartments = maxApartments;
  }

  addApartment(apartment, human) {
    if (this.apartments.length < this.maxApartments) {
      this.apartments.push(apartment);
      console.log(`Apartment which ${human.name} bought is built in the new building.`);
    } else {
      console.log(`It was a fraudulent scheme and ${human.name} was left without an apartment in the new building`);
    }
  }
}

const human1 = new Human('Edgar', 'male');
const human2 = new Human('Freya', 'female');
const human3 = new Human('Olaf', 'male');
const human4 = new Human('Lily', 'female');

const apartment1 = new Apartment();
const apartment2 = new Apartment();
const apartment3 = new Apartment();
const apartment4 = new Apartment();

apartment1.addResident(human1);
apartment2.addResident(human2);
apartment3.addResident(human3);
apartment4.addResident(human4);

const house = new Building(3);

house.addApartment(apartment1, human1);
house.addApartment(apartment2, human2);
house.addApartment(apartment3, human3);
house.addApartment(apartment4, human4);

console.log(house);

// ***********************************************************************************

// class Human {
//   constructor(name, sex) {
//     this.name = name;
//     this.sex = sex;
//   }
// }

// class Apartment {
//   residents = [];

//   addResident(human) {
//       this.residents.push(human);
//   }
// }

// class Building {
//   constructor(maxApartments) {
//     this.apartments = [];
//     this.maxApartments = maxApartments;
//   }

//   addApartment(apartment) {
//     if(this.apartments.length < this.maxApartments) {
//       this.apartments.push(apartment);
//     } else {
//       console.log(`The max number of apartments has been reached. Cannot add more apartments`);
//     }
//   }
// }

// const human1 = new Human('Edgar', 'male');
// const human2 = new Human('Freya', 'female');
// const human3 = new Human('Olaf', 'male');
// const human4 = new Human('Lily', 'female');

// const apartment1 = new Apartment();
// const apartment2 = new Apartment();
// const apartment3 = new Apartment();
// const apartment4 = new Apartment();

// apartment1.addResident(human1);
// apartment2.addResident(human2);
// apartment3.addResident(human3);
// apartment4.addResident(human4);

// const house = new Building(3);

// house.addApartment(apartment1);
// house.addApartment(apartment2);
// house.addApartment(apartment3);
// house.addApartment(apartment4);

// console.log(house);

// ***********************************************************************************

// class Human {
//   constructor(name, sex) {
//     this.name = name;
//     this.sex = sex;
//   }
// }

// class Apartment {
//   residents = [];

//   addResident(human) {
//     // if(!this.residents.includes(human)) {
//       this.residents.push(human);
//       console.log((`${human.name} who is ${human.sex} bought an apartment`));
//     // }
//   }
// }

// class Building {
//   constructor(maxApartments) {
//     this.apartments = [];
//     this.maxApartments = maxApartments;
//   }

//   maxAppartments() {
//     return this.apartments.length < this.maxApartments;
//   }

//   // addApartment(apartment) {
//   //   if(this.maxAppartments()) {
//   //     this.apartments.push(apartment);
//   //     console.log(`The apartment has been added to the building`);
//   //   } else {
//   //     console.log(`The max number of apartments has been reached. Cannot add more apartments`);
//   //   }
//   // }

//   addApartment(apartment) {
//     if (this.maxAppartments()) {
//       this.apartments.push(apartment);
//       console.log(`Apartment ${this.apartments.length} has been built in this building`);
//     } else if (!this.maxApartmentsReached) {
//       this.maxApartmentsReached = true;
//       console.log(`The max number of apartments has been reached in this building`);
//     }
//   }
// }

// const human1 = new Human('Edgar', 'male');
// const human2 = new Human('Freya', 'female');
// const human3 = new Human('Olaf', 'male');
// const human4 = new Human('Lily', 'female');
// const human5 = new Human('Gulliermo', 'male');

// const apartment1 = new Apartment();
// const apartment2 = new Apartment();
// const apartment3 = new Apartment();
// const apartment4 = new Apartment();
// const apartment5 = new Apartment();

// apartment1.addResident(human1);
// apartment2.addResident(human2);
// apartment3.addResident(human3);
// apartment4.addResident(human4);
// apartment4.addResident(human5);

// const house = new Building(3);

// house.addApartment(apartment1);
// house.addApartment(apartment2);
// house.addApartment(apartment3);
// house.addApartment(apartment4);
// house.addApartment(apartment5);

// console.log(house);

