const apiKey = 'AIzaSyBOrRuKwjpf6fqaCJjEdu-wM8b-3UHE0fc';

function fetchBooks(searchQuery) {
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
        displayError('Woopsie, something went wrong. Our minions are working to solve the problem!');
        return [];
      });
  }

function displayBooks(books) {
  const container = document.getElementById('bookList');
  container.innerHTML = '';
  
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
}

function displayError(message) {
    const errorContainer = document.getElementById('errorContainer');
    errorContainer.textContent = message;
    errorContainer.style.display = 'block';
  }
  
  function clearError() {
    const errorContainer = document.getElementById('errorContainer');
    errorContainer.style.display = 'none';
  }

function handleSubmit(event) {
  event.preventDefault();
  const searchQuery = document.getElementById('searchInput').value.trim();
  if (searchQuery) {
    fetchBooks(searchQuery)
      .then(displayBooks)
      .catch(error => console.error('Error:', error));
  }
}

document.getElementById('searchForm').addEventListener('submit', handleSubmit);