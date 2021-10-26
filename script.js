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

//document.addEventListener('DOMContentLoaded', () => {
//  if (bookList !== null) {
 //   storedData = JSON.parse(localStorage.getItem('localBookList'));
 //   storedData.forEach((item) => addBookToList.push(item));
 // }
//});
 function retrieveData() {
   storedData = [];
   const fromData = JSON.parse(localStorage.getItem('localBookList'));
   fromData.forEach((item) => storedData.push(item));
 }

 function serveData(localBookList) {
   localStorage.setItem('localBookList', JSON.stringify(localBookList));
 }


const addBook = document.querySelector('#add-book');
addBook.addEventListener('click', (e) => {
  const newBook = new Book(title.value, author.value);
  e.preventDefault();
  addBookToList(newBook);
  storedData.push(newBook);
  title.value = '';
  author.value = '';
  localStorage.setItem('localBookList', JSON.stringify(storedData));
});

bookList.addEventListener('click', (el) => {
  if (el.target.classList.contains('remove')) {
    document.querySelector('.books').removeChild(el.target.parentElement);
    const bookD = el.target.parentElement;
    const removeBook = storedData.find((item) => item.title === bookD.firstChild.innerText);
    storedData.splice(storedData.indexOf(removeBook), 1);
    localStorage.setItem('localBookList', JSON.stringify(storedData));
  }
});
