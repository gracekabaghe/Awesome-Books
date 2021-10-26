const bookList = document.querySelector('.books');
const title = document.getElementById('title');
const author = document.getElementById('author');

const Book = function theBook(title, author) {
  this.title = title;
  this.author = author;
};

let storedData = [];

function addBookToList(newBook) {
  const bookTemp = `
    <div class="book">
      <h2>Title: ${newBook.title}</h2>
      <h2>Author: ${newBook.author}</h2>
      <button class="remove" type="button">Remove</button>
      <hr>
    </div>
  `;
  document.querySelector('.books').innerHTML += bookTemp;
  return document.querySelector('.books').innerHTML;
}

document.addEventListener('DOMContentLoaded', () => {
  if (bookList !== null) {
    storedData = [...JSON.parse(localStorage.getItem('localBookList'))];
    storedData.forEach((item) => {
      addBookToList(item);
    });
  }
});
