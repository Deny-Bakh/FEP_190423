let userData = {
  'USD': 1000,
  'EUR': 900,
  'UAH': 15000,
  'BIF': 20000,
  'AOA': 100
},
bankData = {
  'USD': {
    max: 3000,
    min: 100,
    img: '💵'
  },
  'EUR': {
    max: 1000,
    min: 50,
    img: '💶'
  },
  'UAH': {
    max: 0,
    min: 0,
    img: '💴'
  },
  'GBP': {
    max: 10000,
    min: 100,
    img: '💷'
  }
}

// function getMoney(userData, bankData) {
//   const initialQuestion = new Promise((resolve, reject) => {
//     const confirmViewBalance = window.confirm('View card balance?');

//     if (confirmViewBalance) {
//       resolve(userData);
//     } else {
//       reject({ userData, bankData })
//     }
//   })

//   return initialQuestion
//     .then(userData => {
//       return new Promise((resolve) => {
//         let validCurrency = false;
//         while (!validCurrency) {
//           const currency = window.prompt('Enter currency (USD, EUR, UAH, BIF, AOA):');
//           if (currency in userData) {
//             console.log(`Balance is: ${userData[currency]} ${currency}`);
//             validCurrency = true;
//           } else {
//             console.log('Invalid currency. Please enter a valid currency.');
//           }
//         }
//         resolve(userData);
//       });
//     })
//     .catch(({ userData, bankData }) => {
//       return new Promise((resolve, reject) => {
//         let validWithdrawal = false;
//         while (!validWithdrawal) {
//           const currency = window.prompt('Enter currency (USD, EUR, GBP):');
//           const amount = parseFloat(window.prompt('Enter the amount to withdraw:'));

//           if (!(currency in userData) || !(currency in bankData) || bankData[currency].max === 0) {
//             console.log('Invalid currency. Please enter a valid currency.');
//           } else if (amount > bankData[currency].max) {
//             console.log(`The entered amount is greater than the allowed maximum. Maximum withdrawal amount: ${bankData[currency].max}`);
//           } else if (amount < bankData[currency].min) {
//             console.log(`The entered amount is less than the allowed minimum. Minimum withdrawal amount: ${bankData[currency].min}`);
//           } else {
//             console.log(`Here are your cash ${amount} ${currency} ${bankData[currency].img}`);
//             validWithdrawal = true;
//           }
//         }
//         resolve(userData);
//       });
//     })
//     .finally(() => {
//       console.log('Thank you, have a nice day 😊');
//     });
// }


// getMoney(userData, bankData);

// *************************************************************************

// function promptInput(message) {
//   return new Promise((resolve) => {
//     const input = window.prompt(message);
//     resolve(input.trim().toUpperCase());
//   });
// }

// async function viewBalance(userData) {
//   const currency = await promptInput('Enter currency (USD, EUR, UAH, BIF, AOA):');
//   if (currency in userData) {
//     console.log(`Balance is: ${userData[currency]} ${currency}`);
//   } else {
//     console.log('Invalid currency. Please enter a valid currency.');
//     await viewBalance(userData);
//   }
// }

// async function withdrawMoney(userData, bankData) {
//   const currency = await promptInput('Enter currency (USD, EUR, GBP):');
//   const amount = parseFloat(window.prompt('Enter the amount to withdraw:'));

//   if (!(currency in userData) || !(currency in bankData) || bankData[currency].max === 0) {
//     console.log('Invalid currency. Please enter a valid currency.');
//     await withdrawMoney(userData, bankData); // Recursively ask for valid input
//   } else if (amount > bankData[currency].max) {
//     console.log(`The entered amount is greater than the allowed maximum. Maximum withdrawal amount: ${bankData[currency].max}`);
//     await withdrawMoney(userData, bankData); // Recursively ask for valid input
//   } else if (amount < bankData[currency].min) {
//     console.log(`The entered amount is less than the allowed minimum. Minimum withdrawal amount: ${bankData[currency].min}`);
//     await withdrawMoney(userData, bankData); // Recursively ask for valid input
//   } else {
//     console.log(`Here are your cash ${amount} ${currency} ${bankData[currency].img}`);
//   }
// }

// async function getMoney(userData, bankData) {
//   const confirmViewBalance = window.confirm('View card balance?');
//   if (confirmViewBalance) {
//     await viewBalance(userData);
//   } else {
//     await withdrawMoney(userData, bankData);
//   }

//   console.log('Thank you, have a nice day 😊');
// }

// getMoney(userData, bankData);

// *************************************************************************
// const parse = (data) => JSON.parse(data);

function requestData(url) {
  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
}

requestData('data.json')
  .then(data => {
    const userData = data.userData;
    const bankData = data.bankData;
    getMoney(userData, bankData);
  });

function promptInput(message) {
  return new Promise((resolve) => {
    const input = window.prompt(message);
    resolve(input ? input.trim().toUpperCase(): '');
  });
}

// function promptInput(message) {
//   return new Promise((resolve) => {
//     const input = window.prompt(message);
//     if (input === null) {
//       // User canceled or closed the window, resolve with an empty string or any other default value
//       resolve('');
//     } else {
//       resolve(input.trim().toUpperCase());
//     }
//   });
// }

function viewBalance(userData) {
  const availableCurrencies = Object.keys(userData).join(', ');
  return promptInput(`Enter currency (${availableCurrencies}):`)
    .then((currency) => {
      if (currency in userData) {
        console.log(`Balance is: ${userData[currency]} ${currency}`);
      } else {
        console.log('Invalid currency. Please enter a valid currency.');
        return viewBalance(userData);
      }
    });
}

// function withdrawMoney(userData, bankData) {
//   let currency, amount;
//   // const availableCurrencies = Object.keys(bankData).join(', ');
//   const availableCurrencies = Object.keys(bankData).filter((currency) => bankData[currency].max !== 0).join(', ');

//   return promptInput(`Enter currency (${availableCurrencies}):`)
//     .then((inputCurrency) => {
//       currency = inputCurrency;
//       amount = parseFloat(window.prompt('Enter the amount to withdraw:'));

//       if (!(currency in userData) || !(currency in bankData) || bankData[currency].max === 0) {
//         console.log('Invalid currency. Please enter a valid currency.');
//         return withdrawMoney(userData, bankData);
//       } else if (amount > bankData[currency].max) {
//         console.log(`The entered amount is greater than the allowed maximum. Maximum withdrawal amount: ${bankData[currency].max}`);
//         return withdrawMoney(userData, bankData);
//       } else if (amount < bankData[currency].min) {
//         console.log(`The entered amount is less than the allowed minimum. Minimum withdrawal amount: ${bankData[currency].min}`);
//         return withdrawMoney(userData, bankData);
//       } else {
//         console.log(`Here are your cash ${amount} ${currency} ${bankData[currency].img}`);
//       }
//     });
// }

// function withdrawMoney(userData, bankData) {
//   let currency, amount;
//   // const availableCurrencies = Object.keys(bankData).join(', ');
//   const availableCurrencies = Object.keys(bankData).filter((currency) => bankData[currency].max !== 0).join(', ');

//   return promptInput(`Enter currency (${availableCurrencies}):`)
//     .then((inputCurrency) => {
//       currency = inputCurrency;
      
//       if (!(currency in userData) || !(currency in bankData) || bankData[currency].max === 0) {
//         console.log('Invalid currency. Please enter a valid currency.');
//         return withdrawMoney(userData, bankData);
//       }
      
//       return new Promise((resolve) => {
//         resolve(parseFloat(window.prompt('Enter the amount to withdraw:')));
//       });
//     })
//     .then((inputAmount) => {
//       amount = inputAmount;
      
//       if (isNaN(amount) || amount <= 0) {
//         console.log('Invalid amount. Please enter a valid number.');
//         return withdrawMoney(userData, bankData);
//       }

//       if (amount > bankData[currency].max) {
//         console.log(`The entered amount is greater than the allowed maximum. Maximum withdrawal amount: ${bankData[currency].max}`);
//         return withdrawMoney(userData, bankData);
//       }

//       if (amount < bankData[currency].min) {
//         console.log(`The entered amount is less than the allowed minimum. Minimum withdrawal amount: ${bankData[currency].min}`);
//         return withdrawMoney(userData, bankData);
//       }

//       console.log(`Here are your cash ${amount} ${currency} ${bankData[currency].img}`);
//     });
// }

function withdrawMoney(userData, bankData) {
  let currency, amount;
  // const availableCurrencies = Object.keys(bankData).join(', ');
  const availableCurrencies = Object.keys(bankData).filter((currency) => bankData[currency].max !== 0).join(', ');

  return promptInput(`Enter currency (${availableCurrencies}):`)
    .then((inputCurrency) => {
      currency = inputCurrency;
      
      if (!(currency in userData) || !(currency in bankData) || bankData[currency].max === 0) {
        console.log('Invalid currency. Please enter a valid currency.');
        return withdrawMoney(userData, bankData);
      }
      
      return handleAmountPrompt();
    });

  function handleAmountPrompt() {
    return new Promise((resolve) => {
      const inputAmount = parseFloat(window.prompt('Enter the amount to withdraw:'));
      if (isNaN(inputAmount) || inputAmount <= 0) {
        console.log('Invalid amount. Please enter a valid number.');
        return handleAmountPrompt();
      }
      resolve(inputAmount);
    })
    .then((inputAmount) => {
      amount = inputAmount;

      if (amount > bankData[currency].max) {
        console.log(`The entered amount is greater than the allowed maximum. Maximum withdrawal amount: ${bankData[currency].max}`);
        return handleAmountPrompt();
      }

      if (amount < bankData[currency].min) {
        console.log(`The entered amount is less than the allowed minimum. Minimum withdrawal amount: ${bankData[currency].min}`);
        return handleAmountPrompt();
      }

      console.log(`Here are your cash ${amount} ${currency} ${bankData[currency].img}`);
    });
  }
}

function getMoney(userData, bankData) {
  const confirmViewBalance = window.confirm('View card balance?');
  if (confirmViewBalance) {
    viewBalance(userData)
      .then(() => {
        console.log('Thank you, have a nice day 😊');
      })
      .catch((err) => {
        console.log('Error:', err);
      });
  } else {
    withdrawMoney(userData, bankData)
      .then(() => {
        console.log('Thank you, have a nice day 😊');
      })
      .catch((err) => {
        console.log('Error:', err);
      });
  }
}

getMoney(userData, bankData);

// function getMoney(userData, bankData) {
//   const initialQuestion = new Promise((resolve, reject) => {
//     const confirmViewBalance = window.confirm('View card balance?');

//     if (confirmViewBalance) {
//       resolve(userData);
//     } else {
//       reject({ userData, bankData });
//     }
//   });

//   return initialQuestion
//     .then(userData => {
//       return new Promise((resolve) => {
//         let validCurrency = false;
//         while (!validCurrency) {
//           const currency = window.prompt('Enter currency (USD, EUR, UAH, BIF, AOA):');
//           if (currency in userData) {
//             console.log(`Balance is: ${userData[currency]} ${currency}`);
//             validCurrency = true;
//           } else {
//             console.log('Invalid currency. Please enter a valid currency.');
//           }
//         }
//         resolve(userData);
//       });
//     })
//     .catch(({ userData, bankData }) => {
//       return new Promise((resolve, reject) => {
//         let validWithdrawal = false;
//         while (!validWithdrawal) {
//           const currency = window.prompt('Enter currency (USD, EUR, GBP):');
//           const amount = parseFloat(window.prompt('Enter the amount to withdraw:'));

//           if (!(currency in userData) || !(currency in bankData) || bankData[currency].max === 0) {
//             console.log('Invalid currency. Please enter a valid currency.');
//           } else if (amount > bankData[currency].max) {
//             console.log(`The entered amount is greater than the allowed maximum. Maximum withdrawal amount: ${bankData[currency].max}`);
//           } else if (amount < bankData[currency].min) {
//             console.log(`The entered amount is less than the allowed minimum. Minimum withdrawal amount: ${bankData[currency].min}`);
//           } else {
//             console.log(`Here are your cash ${amount} ${currency} ${bankData[currency].img}`);
//             validWithdrawal = true;
//           }
//         }
//         resolve(userData);
//       });
//     })
//     .finally(() => {
//       console.log('Thank you, have a nice day 😊');
//     });
// }

// // Example usage:
// const userData = {
//   'USD': 1000,
//   'EUR': 900,
//   'UAH': 15000,
//   'BIF': 20000,
//   'AOA': 100
// };

// const bankData = {
//   'USD': {
//     max: 3000,
//     min: 100,
//     img: '💵'
//   },
//   'EUR': {
//     max: 1000,
//     min: 50,
//     img: '💶'
//   },
//   'UAH': {
//     max: 0,
//     min: 0,
//     img: '💴'
//   },
//   'GBP': {
//     max: 10000,
//     min: 100,
//     img: '💷'
//   }
// };

// getMoney(userData, bankData);

