let ladder = {
  step: 0,
  up: function () {
      this.step++;
      return this;
  },
  down: function () {
      this.step--;
      return this;
  },
  showStep: function () {
      alert(this.step);
      return this;
  }
};

ladder.up().up().down().showStep();

// let ladder = {
//   step: 0,
//   up: function () {
//       this.step++;
//       return this;
//   },
//   down: function () {
//       this.step--;
//       return this;
//   },
//   showStep: function () {
//       alert(this.step);
//   }
// };

// ladder.up().up().down().showStep();

// let ladder = {
//   step: 0,
//   up: function () {
//       this.step++;
//       return this;
//   },
//   down: function () {
//     if(this.step > 0) {
//       this.step--;
//     }
//     return this;
//   },
//   showStep: function () {
//       alert(this.step);
//       return this;
//   }
// };

// ladder.up().down().down().down().showStep();