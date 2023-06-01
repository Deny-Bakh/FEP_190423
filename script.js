const amount = 100;
const monday = [
  ['Write a tutorial',180],
  ['Some web development',120]
];
const tuesday = [
  ['Keep writing that tutorial',240],
  ['Some more web development',360],
   ['A whole lot of nothing',240]
];


function convertMinutesToHours(array) {
  return array.map(function(item) {
    return [item[0], item[1] / 60];
  });
}

function filterTasks(array) {
  return convertMinutesToHours(array).filter(function(item) {
    return item[1] > 2;
  });
}

function paymentForHours(array) {
  return filterTasks(array).map(function(item) {
    return [item[0], item[1], amount * item[1]];
  });
}

function renderArray(array) {
  const yourTasks = paymentForHours(array).map(function(item) {
  return `<tr>
    <td>Task name: ${item[0]}</td>
    <td>Task duration: ${item[1]}</td>
    <td>Task amount: ${item[2]}</td>
   </tr>`;
  })
  .join('');
  return `<table>${yourTasks}</table>`;
}

document.write(`<h2>Monday Tasks:</h2> ${renderArray(monday)}`, `<h2>Tuesday Tasks:</h2>${renderArray(tuesday)}`);

// document.write(`<h2>Monday Tasks:</h2>${renderArray(monday)}`);
// document.write(`<h2>Tuesday Tasks:${renderArray(tuesday)}</h2>`);
 
// [monday, tuesday].forEach((item, index) => document.write(`<h1>Day ${[index +1]}: ${renderArray(item)}</h1>`));
// ********************************************************************************************************************************

// const amount = 100;
// const monday = [
//   ['Write a tutorial',180],
//   ['Some web development',120]
// ];
// const tuesday = [
//   ['Keep writing that tutorial',240],
//   ['Some more web development',360],
//    ['A whole lot of nothing',240]
// ];


// const convertMinutesToHours = (array) => array.map((item) => [item[0], item[1] / 60]);

// const filterTasks = (array) => convertMinutesToHours(array).filter((item) => filter = item[1] > 2)
// ;

// const paymentForHours = (array) => filterTasks(array).map((item) => [item[0], item[1], amount * item[1]]);

// const renderArray = (array) => {const yourTasks = paymentForHours(array).map((item) => `<tr>
//     <td>Task name: ${item[0]}</td>
//     <td>Task duration: ${item[1]}</td>
//     <td>Task amount: ${item[2]}</td>
//    </tr>`
//   ).join('')
//   console.log(`<table>${yourTasks}</table>`);
//   return `<table>${yourTasks}</table>`;
// }
 
// [monday, tuesday].forEach((item, index) => document.write(`<h1>Day ${[index +1]}: ${renderArray(item)}</h1>`))

// document.write(`<h2>Monday Tasks:</h2>${renderArray(monday)}`);
// document.write(`<h2>Tuesday Tasks:</h2>${renderArray(tuesday)}`);

// ********************************************************************************************************************************

// const amount = 100;
// const monday = [
//   ['Write a tutorial',180],
//   ['Some web development',120]
// ];
// const tuesday = [
//   ['Keep writing that tutorial',240],
//   ['Some more web development',360],
//    ['A whole lot of nothing',240]
// ];

// function convertMinutesToHours(array) {
//  const time = array.map(function(item) {
//     return [item[0], item[1] / 60];
//   })
//   return time;
// };

// function filterTasks(array) {
//   const cut = convertMinutesToHours(array).filter(function(item) {
//     return filter = item[1] > 2;
//   })
//   return cut;
// };

// function paymentForHours(array) {
//   const payment = filterTasks(array).map(function(item) {
//     const hourlyRate = amount * item[1];
//     return [item[0], item[1], hourlyRate];
//   })
//   return payment;
// }

// function renderArray(array) {
//   const resultString = paymentForHours(array).map(function(item) {
//     return`<tr>
//     <td>Task name: ${item[0]}</td>
//     <td>Task duration: ${item[1]}</td>
//     <td>Task amount: ${item[2]}</td>
//    </tr>`;
//   })
//   .join('');
//   return `<table>${resultString}</table>`;
// }

// document.write(`<h2>Monday Tasks: ${renderArray(monday)}</h2>`);
// document.write(`<h2>Tuesday Tasks: ${renderArray(tuesday)}</h2>`);

// ********************************************************************************************************************************

// const amount = 100;
// const monday = [
//   ['Write a tutorial',180],
//   ['Some web development',120]
// ];
// const tuesday = [
//   ['Keep writing that tutorial',240],
//   ['Some more web development',360],
//    ['A whole lot of nothing',240]
// ];

// const convertMinutesToHours = (array) => {
//  const time = array.map((item) => {
//     const hours = item[1] / 60;
//     return [item[0], hours];
//   })
//   return time;
// };

// const filterTasks = (array) => {
//   const cut = convertMinutesToHours(array).filter((item) => {
//     return filter = item[1] > 2;
//   })
//   return cut;
// };

// const paymentForHours = (array) => {
//   const payment = filterTasks(array).map((item) => {
//     const hourlyRate = amount * item[1];
//     return [item[0], item[1], hourlyRate];
//   })
//   return payment;
// }

// const renderArray = (array) => {
//   const resultString = paymentForHours(array).map((item) => {
//     return`<tr>
//     <td>Task name: ${item[0]}</td>
//     <td>Task duration: ${item[1]}</td>
//     <td>Task amount: ${item[2]}</td>
//    </tr>`;
//   })
//   .join('');
//   return `<table>${resultString}</table>`;
// }

// document.write(`<h2>Monday Tasks: ${renderArray(monday)}</h2>`);
// document.write(`<h2>Tuesday Tasks: ${renderArray(tuesday)}</h2>`);

// ********************************************************************************************************************************

// const amount = 100;
// const monday = [
//   ['Write a tutorial',180],
//   ['Some web development',120]
// ];
// const tuesday = [
//   ['Keep writing that tutorial',240],
//   ['Some more web development',360],
//    ['A whole lot of nothing',240]
// ];

// function calculateTasks(tasks) {
//   const yourTasks = tasks.map(function(item) {
//   hours = item[1] / 60;
//   if(hours > 2) {
//     const hourlyRate = amount * hours;
//     return [item[0], hours, hourlyRate];
//   } else {
//       return null;
//     }
// })
// .filter(function(item) {
//   return item !== null;
// })
// .map(function(item) {
//   return`<tr>
//   <td>Task name: ${item[0]}</td>
//   <td>Task duration: ${item[1]}</td>
//   <td>Task amount: ${item[2]}</td>
//  </tr>`;
// })
// .join('');

// return `<table>${yourTasks}</table>`;
// }

// document.write(`<h2>Monday Tasks: ${calculateTasks(monday)}</h2>`);
// document.write(`<h2>Tuesday Tasks: ${calculateTasks(tuesday)}</h2>`);