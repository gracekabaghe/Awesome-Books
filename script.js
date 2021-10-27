const bookListBlock = document.querySelector('.bookList');
const title = document.getElementById('title');
const author = document.getElementById('author');

let storedData = [];

function retriveData() {
  storedData = [];
  const fromData = JSON.parse(localStorage.getItem('localBookList'));
  fromData.forEach((elem) => storedData.push(elem));
}

function serveData(books) {
  localStorage.setItem('localBookList', JSON.stringify(books));
}

const addBooks = () => {
  const bookToStore = {
    title: title.value,
    author: author.value,
  };
  storedData.push(bookToStore);
  serveData(storedData);
};

const addButton = document.querySelector('#addBook');
addButton.addEventListener('click', addBooks);

const removeAbook = (index) => {
  storedData.splice(index, 1);
  serveData(storedData);
  window.location.reload(false);
  if (storedData.length < 1) {
    localStorage.clear();
  }
};

const addBookToList = (newBook) => {
  bookListBlock.innerHTML += `
  <div class="bookList">
    <h4 class="title">Title: ${newBook.title}<h4> 
    <h4 class="title">Author: ${newBook.author}</h4>
    <button type="submit" class="remove">Remove</button>
  </div>
  <hr>`;
};

if (localStorage.getItem('localBookList')) {
  retriveData();
  storedData.forEach((newBook) => {
    addBookToList(newBook);
  });
} else {
  storedData.forEach((newBook) => {
    addBookToList(newBook);
  });
}

const removeBtnBook = document.querySelectorAll('.remove');
const removeBtn = Array.from(removeBtnBook);
removeBtn.forEach((newBook) => newBook.addEventListener('click', () => {
  removeAbook(removeBtn.indexOf(newBook));
}));