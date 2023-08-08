// // const parse = (data) => JSON.parse(data);

// // function requestData(method, url, callback) {
// //     const request = new XMLHttpRequest();

// //     request.open(method, url);

// //     request.addEventListener('readystatechange', () => {
// //       if (request.readyState === 4) {
// //         if (request.status === 200) {
// //         const data = parse(request.responseText);
// //         callback(data);
// //         } else {
// //         console.error('Error fetching data:', request.statusText);
// //         }
// //       }
// //     });

// //   request.send();
// // }

// // function promptInput(message) {
// //   return new Promise((resolve) => {
// //     const input = window.prompt(message);
// //     if(input === null) {
// //         return;
// //     } else {
// //         resolve(input.trim().toUpperCase());
// //     }
// //   });
// // }

// // function viewBalance(userData) {
// //   const availableCurrencies = Object.keys(userData).join(', ');
  
// //   promptInput(`Enter currency to view balance (${availableCurrencies}):`)
// //   .then((currency) => {
// //     if (currency in userData) {
// //     console.log(`Balance is: ${userData[currency]} ${currency}`);
// //     } else {
// //     console.log('Invalid currency. Please enter a valid currency.');
// //     return viewBalance(userData);
// //     }
// //     console.log('Thank you, have a nice day 😊');
// //   });
// // }

// // // function handleAmountPrompt(bankData, currency) {
// // //   return new Promise((resolve) => {
// // //     const inputAmount = parseFloat(window.prompt('Enter the amount to withdraw:'));
// // //     if (isNaN(inputAmount) || inputAmount <= 0) {
// // //     console.log('Invalid amount. Please enter a valid number.');
// // //     return handleAmountPrompt(bankData, currency);
// // //     }
// // //     resolve(inputAmount);
// // //   })
// // //   .then((inputAmount) => {
// // //     console.log('currency', currency);
// // //     console.log('bankData', bankData);
// // //     if (inputAmount > bankData[currency].max) {
// // //     console.log(`The entered amount is greater than the allowed maximum. Maximum withdrawal amount: ${bankData[currency].max}`);
// // //     return handleAmountPrompt(bankData, currency);
// // //     } 

// // //     if (inputAmount < bankData[currency].min) {
// // //     console.log(`The entered amount is less than the allowed minimum. Minimum withdrawal amount: ${bankData[currency].min}`);
// // //     return handleAmountPrompt(bankData, currency);
// // //     }

// // //     console.log(`Here are your cash ${inputAmount} ${currency} ${bankData[currency].img}`);
// // //     console.log('Thank you, have a nice day 😊');
// // //   });
// // // }

// // // function withdrawMoney(data) {
// // //   const availableCurrencies = Object.keys(data.bankData).join(', ');

// // //   return promptInput(`Enter currency to withdrow (${availableCurrencies}):`)
// // //   .then((inputCurrency) => {
// // //     if (!(inputCurrency in data.userData)) {
// // //       console.log('You don\'t have this currency');
// // //       return withdrawMoney(data);
// // //     } 
// // //     else if(!(inputCurrency in data.bankData)) {
// // //       console.log('Invalid currency. Please enter a valid currency.');
// // //       return withdrawMoney(data);
// // //     } 
// // //     else if (data.bankData[inputCurrency].max === 0) {
// // //       console.log(`No ${inputCurrency} in the machine. Please enter another currency`);
// // //       return withdrawMoney(data);
// // //     }
    
// // //     return handleAmountPrompt(data.bankData, inputCurrency);
// // //   });
// // // }

// // function handleAmountPrompt(userData, bankData, currency) {
// //   return new Promise((resolve) => {
// //     const inputAmount = parseFloat(window.prompt('Enter the amount to withdraw:'));
// //     if (isNaN(inputAmount) || inputAmount <= 0) {
// //       console.log('Invalid amount. Please enter a valid number.');
// //       return handleAmountPrompt(userData, bankData, currency);
// //     } else if (inputAmount > userData[currency]) {
// //       console.log(`You don't have sufficient funds. Your current balance is ${userData[currency]} ${currency}.`);
// //       return handleAmountPrompt(userData, bankData, currency);
// //     }
// //     resolve(inputAmount);
// //   })
// //   .then((inputAmount) => {
// //     console.log('currency', currency);
// //     console.log('bankData', bankData);
// //     if (inputAmount > bankData[currency].max) {
// //       console.log(`The entered amount is greater than the allowed maximum. Maximum withdrawal amount: ${bankData[currency].max}`);
// //       return handleAmountPrompt(userData, bankData, currency);
// //     }

// //     if (inputAmount < bankData[currency].min) {
// //       console.log(`The entered amount is less than the allowed minimum. Minimum withdrawal amount: ${bankData[currency].min}`);
// //       return handleAmountPrompt(userData, bankData, currency);
// //     }

// //     console.log(`Here are your cash ${inputAmount} ${currency} ${bankData[currency].img}`);
// //     console.log('Thank you, have a nice day 😊');
// //   });
// // }

// // function withdrawMoney(data) {
// //   const availableCurrencies = Object.keys(data.bankData).join(', ');

// //   return promptInput(`Enter currency to withdrow (${availableCurrencies}):`)
// //   .then((inputCurrency) => {
// //     if (!(inputCurrency in data.userData)) {
// //       console.log('You don\'t have this currency');
// //       return withdrawMoney(data);
// //     } 
// //     else if(!(inputCurrency in data.bankData)) {
// //       console.log('Invalid currency. Please enter a valid currency.');
// //       return withdrawMoney(data);
// //     } 
// //     else if (data.bankData[inputCurrency].max === 0) {
// //       console.log(`No ${inputCurrency} in the machine. Please enter another currency`);
// //       return withdrawMoney(data);
// //     }
    
// //     return handleAmountPrompt(data.userData, data.bankData, inputCurrency);
// //   });
// // }

// // function getMoney(userData, bankData) {
// //   return new Promise((resolve, reject) => {
// //     const input = window.confirm('View card balance?');
// //     input ? resolve(userData) : reject({userData, bankData});
// //   })
// // }

// // requestData('GET', 'data.json', (data) => {
// //   const userData = data.userData;
// //   const bankData = data.bankData;
// //   getMoney(userData, bankData)
// //   .then(viewBalance)
// //   .catch(withdrawMoney)
// // });

// const apiKey = 'AIzaSyBOrRuKwjpf6fqaCJjEdu-wM8b-3UHE0fc'; // Replace with your actual API key

// // Function to fetch books from the API
// async function fetchBooks(searchQuery) {
//   const url = `https://www.googleapis.com/books/v1/volumes?q=${searchQuery}&key=${apiKey}`;
  
//   try {
//     const response = await fetch(url);
//     const data = await response.json();
//     return data.items;
//   } catch (error) {
//     console.error('Error fetching data:', error);
//     return [];
//   }
// }

// // Function to display books on the webpage
// function displayBooks(books) {
//   const container = document.getElementById('bookList');
//   container.innerHTML = ''; // Clear previous results
  
//   books.forEach(book => {
//     const title = book.volumeInfo.title;
//     const authors = `By: ${book.volumeInfo.authors}`;
//     const description = book.volumeInfo.description || 'No description available';
//     const thumbnail = book.volumeInfo.imageLinks?.thumbnail || 'https://via.placeholder.com/128x192'; // Placeholder image if no thumbnail available
    
//     const bookCard = `
//       <div class="book">
//         <img src="${thumbnail}" alt="${title}">
//         <h3>${title}</h3>
//         <p>${authors}</p>
//         <p>${description}</p>
//       </div>
//     `;
    
//     container.innerHTML += bookCard;
//   });
// }

// // Function to handle form submission
// function handleSubmit(event) {
//   event.preventDefault();
//   const searchQuery = document.getElementById('searchInput').value.trim();
//   if (searchQuery) {
//     fetchBooks(searchQuery)
//       .then(displayBooks)
//       .catch(error => console.error('Error:', error));
//   }
// }

// // Event listener for the search form
// document.getElementById('searchForm').addEventListener('submit', handleSubmit);

const apiKey = 'AIzaSyBOrRuKwjpf6fqaCJjEdu-wM8b-3UHE0fc';

let startIndex = 0;
const booksPerPage = 10;

// Function to fetch books from the API
// async function fetchBooks(searchQuery) {
//   const url = `https://www.googleapis.com/books/v1/volumes?q=${searchQuery}&key=${apiKey}`;
  
//   try {
//     const response = await fetch(url);
//     const data = await response.json();
//     return data.items;
//   } catch (error) {
//     console.error('Error fetching data:', error);
//     return [];
//   }
// }

function fetchBooks(searchQuery, startIndex) {
    const url = `https://www.googleapis.com/books/v1/volumes?q=${searchQuery}&key=${apiKey}`;
    
    return fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => data.items || [])
      .catch(error => {
        console.error('Error fetching data:', error);
        return [];
      });
  }

function displayBooks(books, append = false) {
  const container = document.getElementById('bookList');

  if (!append) {
    container.innerHTML = '';
  }
  
  books.forEach(book => {
    const title = book.volumeInfo.title;
    const authors = book.volumeInfo.authors ? `By: ${book.volumeInfo.authors.join(', ')}` : 'Unknown Author';
    const description = book.volumeInfo.description || 'No description available';
    const thumbnail = book.volumeInfo.imageLinks?.thumbnail || 'https://via.placeholder.com/128x192';
    
    const bookCard = document.createElement('div');
    bookCard.classList.add('book_card');

    const bookTitle = document.createElement('h3');
    bookTitle.classList.add('book_text');
    bookTitle.innerText = title;

    const bookAuthor = document.createElement('p');
    bookAuthor.classList.add('book_text');
    bookAuthor.innerText = authors;

    const bookDescription = document.createElement('p');
    bookDescription.classList.add('book_description');
    bookDescription.innerText = description;

    const bookThumbnail = document.createElement('img');
    bookThumbnail.src = thumbnail;

    bookCard.append(bookTitle, bookAuthor, bookDescription, bookThumbnail);
    
    container.append(bookCard);

    document.body.append(container);
  });

  const loadMoreBtn = document.getElementById('loadMoreBtn');
  loadMoreBtn.classList.toggle('hidden', books.length === 0);
}

function handleLoadMore() {
    console.log('Load More button clicked');
    const searchQuery = document.getElementById('searchInput').value.trim();
    if (searchQuery) {
      startIndex += booksPerPage;
      fetchBooks(searchQuery, startIndex)
        .then(books =>{
          displayBooks(books, true);
        })
        .catch(error => console.error('Error:', error));
    }
  }

function handleSubmit(event) {
  event.preventDefault();
  startIndex = 0;
  const searchQuery = document.getElementById('searchInput').value.trim();
  if (searchQuery) {
    fetchBooks(searchQuery)
      .then(books => {
        displayBooks(books);
      })
      .catch(error => console.error('Error:', error));
    //   searchInput.value = '';
    //   searchInput.placeholder = 'An error occurred. Please try again.';
  }
}

document.getElementById('searchForm').addEventListener('submit', handleSubmit);
document.getElementById('loadMoreBtn').addEventListener('click', handleLoadMore);

// Function to fetch books from the API
// async function fetchBooks(searchQuery) {
//   const url = `https://www.googleapis.com/books/v1/volumes?q=${searchQuery}&key=${apiKey}`;
  
//   try {
//     const response = await fetch(url);
//     const data = await response.json();
//     return data.items;
//   } catch (error) {
//     console.error('Error fetching data:', error);
//     return [];
//   }
// }