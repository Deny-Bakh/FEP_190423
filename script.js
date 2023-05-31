// let num;
// let degree;

function pow(num,degree) {
  return degree === 0 ? 1 : degree === 1 ? num : degree < 0 ? 1 / pow(num, -degree) : num * pow(num, degree -1);
}

// function pow(num, degree) {
//   if (degree === 0) {
//     return 1;
//   } else if (degree === 1) {
//     return num;
//   } else if (degree < 0) {
//     return 1 / pow (num, -degree);
//   } else {
//     return num * pow(num, degree - 1);
//   }
// }

console.log(pow(2, 0));
console.log(pow(3, 1));
console.log(pow(4, -2));
console.log(pow(5, 3));