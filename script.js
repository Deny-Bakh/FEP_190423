let arr = [];

for(let i = 1; i <= 100; i++) {
    arr.push(i);
}

arr.sort(() => 0.5 - Math.random());

// arr.sort(function(){ return 0.5 - Math.random()});

let table = document.createElement('table');
table.setAttribute('id', 'table');
// table.id = 'table';

let count = 0;

for (let i = 0; i < 10; i++) {
  let tr = document.createElement('tr');
  tr.classList.add('tr_td_properties');

  for (let j = 0; j < 10; j++) {
    let td = document.createElement('td');
    td.classList.add('tr_td_properties');
    td.innerText = arr[count];
    count++;
    tr.append(td);
  }

  table.append(tr);
}

document.body.append(table);

// ***********************************************************************************************

// let table = document.createElement('table');
// table.setAttribute('id', 'table');

// let count = 0;

// for (let i = 0, arr = []; i < 10; i++) {
//   arr = [];

//   for (let j = 1; j <= 10; j++) {
//     arr.push(i * 10 + j);
//   }

//   arr.sort(() => 0.5 - Math.random());

//   let tr = document.createElement('tr');
//   tr.classList.add('tr_td_properties');

//   for (let j = 0; j < 10; j++) {
//     let td = document.createElement('td');
//     td.classList.add('tr_td_properties');
//     td.innerText = arr[j];
//     tr.append(td);
//   }

//   table.append(tr);
// }

// document.body.append(table);

// ***********************************************************************************************

// let arr = [];

// for(let i = 1; i <= 100; i++) {
//     arr.push(i);
// }

// arr.sort(function(){ return 0.5 - Math.random()});

// let table = document.createElement('table');
// table.setAttribute('id', 'table');

// let count = 0;

// for (let i = 0; i < 10; i++) {
//   let tr = document.createElement('tr');
//   tr.classList.add('tr_td_properties');

//   for (let j = 0; j < 10; j++) {
//     let td = document.createElement('td');
//     td.classList.add('tr_td_properties');
//     td.innerText = arr[count];
//     count++;
//     tr.append(td);
//   }

//   table.append(tr);
// }

// document.body.append(table);
