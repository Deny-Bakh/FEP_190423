
sports = [
    ['skier','⛷'],
    ['snowboarder','🏂'],
    ['apple','🍎'],
    ['hockey','🏒'],
    ['ice skate','⛸'],
    ['swimmer','🏊'],
    ['surfer','🏄‍'],
    ['watermelon','🍉'],
    ['lemon','🍋'],
    ['rowboat','🚣'],
    ['bicyclist','🚴‍']
];

summerSports = sports.slice(5, 7).concat(sports.slice(9, 11));

winterSports = sports.slice(0,2).concat(sports.slice(3,5));

fruits = sports.slice(2, 3).concat(sports.slice(7, 9));

// summerSports = sports.slice(5,11);

// winterSports = sports.slice(0,5);

// fruits = summerSports.splice(2, 2).concat(winterSports.splice(2, 1));

console.log('*** Winter sports ***');

for (i = 0; i < winterSports.length; i++) {
    console.log(`${winterSports[i][0]}: ${winterSports[i][1]}`);
}

console.log('');

console.log('*** Summer sports ***');

for (i = 0; i < summerSports.length; i++) {
    console.log(`${summerSports[i][0]}: ${summerSports[i][1]}`);
}

console.log('');

console.log('*** Fruits ***');

for (i = 0; i < fruits.length; i++) {
    console.log(`${fruits[i][0]}: ${fruits[i][1]}`);
}

// console.log(`*** Winter sports ***\n${winterSports.join('\n').replaceAll(',', ': ')}`);
// console.log(`\n*** Summer sports ***\n${summerSports.join('\n').replaceAll(',', ': ')}`);
// console.log(`\n*** Fruits ***\n${fruits.join('\n').replaceAll(',', ': ')}`);

