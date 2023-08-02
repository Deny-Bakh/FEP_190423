    // function requestData(url) {
    //   return fetch(url)
    //     .then(response => {
    //       if (!response.ok) {
    //         throw new Error('Network response was not ok');
    //       }
    //       return response.json();
    //     })
    //     .catch(error => {
    //       console.error('Error fetching data:', error);
    //     });
    // }

    // function promptInput(message) {
    //   return new Promise((resolve) => {
    //     const input = window.prompt(message);
    //     resolve(input.trim().toUpperCase());
    //   });
    // }

    // function viewBalance(userData) {
    //   const availableCurrencies = Object.keys(userData).join(', ');
    //   return promptInput(`Enter currency (${availableCurrencies}):`)
    //     .then((currency) => {
    //       if (currency in userData) {
    //         console.log(`Balance is: ${userData[currency]} ${currency}`);
    //       } else {
    //         console.log('Invalid currency. Please enter a valid currency.');
    //         return viewBalance(userData);
    //       }
    //     });
    // }

    // function withdrawMoney(userData, bankData) {
    //   let currency, amount;
    //   const availableCurrencies = Object.keys(bankData).filter((currency) => bankData[currency].max !== 0).join(', ');

    //   return promptInput(`Enter currency (${availableCurrencies}):`)
    //     .then((inputCurrency) => {
    //       currency = inputCurrency;
          
    //       if (!(currency in userData) || !(currency in bankData) || bankData[currency].max === 0) {
    //         console.log('Invalid currency. Please enter a valid currency.');
    //         return withdrawMoney(userData, bankData);
    //       }
          
    //       return handleAmountPrompt();
    //     });

    //   function handleAmountPrompt() {
    //     return new Promise((resolve) => {
    //       const inputAmount = parseFloat(window.prompt('Enter the amount to withdraw:'));
    //       if (isNaN(inputAmount) || inputAmount <= 0) {
    //         console.log('Invalid amount. Please enter a valid number.');
    //         return handleAmountPrompt();
    //       }
    //       resolve(inputAmount);
    //     })
    //     .then((inputAmount) => {
    //       amount = inputAmount;

    //       if (amount > bankData[currency].max) {
    //         console.log(`The entered amount is greater than the allowed maximum. Maximum withdrawal amount: ${bankData[currency].max}`);
    //         return handleAmountPrompt(); // Recursively re-prompt for the correct amount
    //       }

    //       if (amount < bankData[currency].min) {
    //         console.log(`The entered amount is less than the allowed minimum. Minimum withdrawal amount: ${bankData[currency].min}`);
    //         return handleAmountPrompt(); // Recursively re-prompt for the correct amount
    //       }

    //       console.log(`Here are your cash ${amount} ${currency} ${bankData[currency].img}`);
    //     });
    //   }
    // }

    // function getMoney(userData, bankData) {
    //   const confirmViewBalance = window.confirm('View card balance?');
    //   if (confirmViewBalance) {
    //     viewBalance(userData)
    //       .then(() => {
    //         console.log('Thank you, have a nice day 😊');
    //       })
    //       .catch((err) => {
    //         console.log('Error:', err);
    //       });
    //   } else {
    //     withdrawMoney(userData, bankData)
    //       .then(() => {
    //         console.log('Thank you, have a nice day 😊');
    //       })
    //       .catch((err) => {
    //         console.log('Error:', err);
    //       });
    //   }
    // }

    // requestData('data.json')
    //   .then(data => {
    //     const userData = data.userData;
    //     const bankData = data.bankData;
    //     getMoney(userData, bankData);
    //   });

    const parse = (data) => JSON.parse(data);
    
        function requestData(method, url, callback) {
          const xhr = new XMLHttpRequest();
    
          xhr.open(method, url);
    
          xhr.addEventListener('readystatechange', () => {
            if (xhr.readyState === 4) {
              if (xhr.status === 200) {
                const data = parse(xhr.responseText);
                callback(data);
              } else {
                console.error('Error fetching data:', xhr.statusText);
              }
            }
          });
    
          xhr.send();
        }
    
        function promptInput(message) {
          return new Promise((resolve) => {
            const input = window.prompt(message);
            resolve(input ? input.trim().toUpperCase(): '');
          });
        }
    
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
    
        function withdrawMoney(userData, bankData) {
          let currency, amount;
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
    
        requestData('GET', 'data.json', (data) => {
          const userData = data.userData;
          const bankData = data.bankData;
          getMoney(userData, bankData);
        });
    
