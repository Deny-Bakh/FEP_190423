hero = ['Ivan'];
native = ['York', 'Of'];
destination = ['Poltava', 'In'];


rainbow = destination.concat(native, hero);

rainbow = rainbow.reverse();

rainbow.splice(0, 1, 'Richard');
// rainbow.shift();
// rainbow.unshift('Richard');
// rainbow.splice(3, 0, 'Gave', 'Battle');
// console.log(rainbow)
rainbow.splice(3, 2, 'Gave', 'Battle', 'In', 'Vain');
// rainbow.pop();
// rainbow.push('Vain');
// rainbow.splice(6, 1, 'Vain');

  colors = ['red', 'orange', 'yellow', 'green', 'lightblue', 'blue', 'purple'];
  
  document.write('<div class=main_box>');
  for (i = 0; i < rainbow.length; i++) {
    // color = colors[i];
    // word = rainbow[i];
    
    document.write('<div class="wrapper">');
    document.write(`<div class="colors" style="background-color: ${colors[i]};"></div>`);
    document.write(`<div class="rainbow"> ${rainbow[i]} </div>`);
    document.write('</div>');
  }
  document.write('</div>');

//   document.write('<div class=main_box>');
//   for (i = 0; i < rainbow.length; i++) {
//     document.write('<div class="wrapper">');
  
//   color = '';
//   switch (i) {
//     case 0:
//       color = 'red';
//       break;
//     case 1:
//       color = 'orange';
//       break;
//     case 2:
//       color = 'yellow';
//       break;
//     case 3:
//       color = 'green';
//       break;
//     case 4:
//       color = 'lightblue';
//       break;
//     case 5:
//       color = 'blue';
//       break;
//     case 6:
//       color = 'purple';
//       break;
//     // default:
//     //   color = 'black';
//   }
  
//   document.write(`<div class="colors" style="background-color: ${color};"></div>`);
//   document.write(`<div class="rainbow">${rainbow[i]}</div>`);
//   document.write('</div>');
// }
// document.write('</div>');











