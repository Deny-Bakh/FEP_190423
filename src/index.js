import { sum } from './components/add.js';
// import Sum from './components/add';
import sub from './components/sub.js';
import div from './components/div.js';
import mult from './components/mult.js';


// const add = new Sum (10, 30);
// console.log(add);

const resultAdd = sum(10, 20);
console.log(resultAdd);

const resultSub = sub(10, 20);
console.log(resultSub);

const resultDiv = div(10, 2);
console.log(resultDiv);

const resultMult = mult(10, 20);
console.log(resultMult);
