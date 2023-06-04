let users = [
  {
  "index": 0,
  "isActive": true,
  "balance": "$2,226.60",
  "name": "Eugenia Sawyer",
  "gender": "female",
  "phone": "+1 (840) 583-3207",
  "address": "949 John Street, Rose, Puerto Rico, 1857"
  },
  {
  "index": 1,
  "isActive": true,
  "balance": "$2,613.77",
  "name": "Pauline Gallegos",
  "gender": "female",
  "phone": "+1 (985) 593-3328",
  "address": "328 Greenpoint Avenue, Torboy, North Dakota, 6857"
  },
  {
  "index": 2,
  "isActive": false,
  "balance": "$3,976.41",
  "name": "Middleton Chaney",
  "gender": "male",
  "phone": "+1 (995) 591-2478",
  "address": "807 Fleet Walk, Brutus, Arkansas, 9783"
  },
  {
  "index": 3,
  "isActive": true,
  "balance": "$1,934.58",
  "name": "Burns Poole",
  "gender": "male",
  "phone": "+1 (885) 559-3422",
  "address": "730 Seba Avenue, Osage, Alabama, 6290"
  },
  {
  "index": 4,
  "isActive": true,
  "balance": "$3,261.65",
  "name": "Mcfadden Horne",
  "gender": "male",
  "phone": "+1 (942) 565-3988",
  "address": "120 Scholes Street, Kirk, Michigan, 1018"
  },
  {
  "index": 5,
  "isActive": false,
  "balance": "$1,790.56",
  "name": "Suzette Lewis",
  "gender": "female",
  "phone": "+1 (837) 586-3283",
  "address": "314 Dunne Place, Bawcomville, Guam, 9053"
  }
]

function convertStringToNumber(balance) {
  return parseFloat(balance.substring(1).replace(',', ''))
};

function resultArray (data) {
  const filteredArray = data.filter(function(item) {
    return convertStringToNumber(item.balance) > 2000;
  });
  const richPhoneNumbers = filteredArray.map(function(item){
    return item.phone;
  });
  const sumRich = filteredArray.reduce(function(sum, item) {
    return sum + convertStringToNumber(item.balance);
  }, 0);

  return {phones: richPhoneNumbers, summaryBalance: Number(sumRich.toFixed(2))};
};

const filteredData = resultArray(users);

console.log(filteredData);

// *************************************************************************************************************************

// const convertStingToNumber = (balance) => parseFloat(balance.substring(1).replace(',', ''));

// const resultArray = (data) => {
//   const filteredArray = data.filter((item) => convertStingToNumber(item.balance) > 2000);
//   const richPhoneNumbers = filteredArray.map((item) => item.phone);
//   const sumRich = filteredArray.reduce((sum, item) => sum + convertStingToNumber(item.balance), 0);

//   return { phones: richPhoneNumbers, summaryBalance: Number(sumRich.toFixed(2)) };
// };

// const filteredData = resultArray(users);

// console.log(filteredData);

// *************************************************************************************************************************

// function convertString(balance) {
//   return parseFloat(balance.substring(1).replace(',', ''));
// }

// const richBalance = users.filter(function(item) {
//   return convertString(item.balance) > 2000;
// });

// const richPhoneNumbers = richBalance.map(function(item) {
//   return item.phone;
// })

// console.log(richPhoneNumbers);

// const sumRich = richBalance.reduce(function(sum, item) {
//   return sum + convertString(item.balance);
// },0);

// console.log(Number(sumRich.toFixed(2)));

// *************************************************************************************************************************

  // const convertSting = (balance) => parseFloat(balance.substring(1).replace(',', ''));

  // const richBalance = users.filter((item) => convertSting(item.balance) > 2000);

  // const richPhoneNumbers = richBalance.map((item) => item.phone)

  // console.log(richPhoneNumbers);

  // const sumRich = richBalance.reduce((sum, item) => {
  // return sum + convertSting(item.balance);
  // },0);

  // console.log(Number(sumRich.toFixed(2)));

// *************************************************************************************************************************

  