const parse = (data) => JSON.parse(data);

function requestData(method, url, callback) {
    const request = new XMLHttpRequest();

    request.open(method, url);

    request.addEventListener('readystatechange', () => {
      if (request.readyState === 4) {
        if (request.status === 200) {
        const data = parse(request.responseText);
        callback(data);
        } else {
        console.error('Error fetching data:', request.statusText);
        }
      }
    });

  request.send();
}

function promptInput(message) {
  return new Promise((resolve) => {
    const input = window.prompt(message);
    if(input === null) {
        return;
    } else {
        resolve(input.trim().toUpperCase());
    }
  });
}

function viewBalance(userData) {
  const availableCurrencies = Object.keys(userData).join(', ');
  
  promptInput(`Enter currency to view balance (${availableCurrencies}):`)
  .then((currency) => {
    if (currency in userData) {
    console.log(`Balance is: ${userData[currency]} ${currency}`);
    } else {
    console.log('Invalid currency. Please enter a valid currency.');
    return viewBalance(userData);
    }
    console.log('Thank you, have a nice day 😊');
  });
}

function handleAmountPrompt(bankData, currency) {
  return new Promise((resolve) => {
    const inputAmount = parseFloat(window.prompt('Enter the amount to withdraw:'));
    if (isNaN(inputAmount) || inputAmount <= 0) {
    console.log('Invalid amount. Please enter a valid number.');
    return handleAmountPrompt(bankData, currency);
    }
    resolve(inputAmount);
  })
  .then((inputAmount) => {
    console.log('currency', currency);
    console.log('bankData', bankData);
    if (inputAmount > bankData[currency].max) {
    console.log(`The entered amount is greater than the allowed maximum. Maximum withdrawal amount: ${bankData[currency].max}`);
    return handleAmountPrompt(bankData, currency);
    }

    if (inputAmount < bankData[currency].min) {
    console.log(`The entered amount is less than the allowed minimum. Minimum withdrawal amount: ${bankData[currency].min}`);
    return handleAmountPrompt(bankData, currency);
    }

    console.log(`Here are your cash ${inputAmount} ${currency} ${bankData[currency].img}`);
    console.log('Thank you, have a nice day 😊');
  });
}

function withdrawMoney(data) {
  const availableCurrencies = Object.keys(data.bankData).join(', ');

  return promptInput(`Enter currency to withdrow (${availableCurrencies}):`)
  .then((inputCurrency) => {
    if (!(inputCurrency in data.userData)) {
      console.log('You don\'t have this currency');
      return withdrawMoney(data);
    } 
    else if(!(inputCurrency in data.bankData)) {
      console.log('Invalid currency. Please enter a valid currency.');
      return withdrawMoney(data);
    } 
    else if (data.bankData[inputCurrency].max === 0) {
      console.log(`No ${inputCurrency} in the machine. Please enter another currency`);
      return withdrawMoney(data);
    }
    
    return handleAmountPrompt(data.bankData, inputCurrency);
  });
}

function getMoney(userData, bankData) {
  return new Promise((resolve, reject) => {
    const input = window.confirm('View card balance?');
    input ? resolve(userData) : reject({userData, bankData});
  })
}

requestData('GET', 'data.json', (data) => {
  const userData = data.userData;
  const bankData = data.bankData;
  getMoney(userData, bankData)
  .then(viewBalance)
  .catch(withdrawMoney)
});
        
