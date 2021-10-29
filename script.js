const divbooks = document.querySelector('.books');
const inputTitle = document.querySelector('#title');
const inputAuthor = document.querySelector('#author');
const addBtn = document.querySelector('#add');

class Book {
  constructor(savedData = []) {
    this.arr = savedData;
  }

  saveData(data) {
    let existing = JSON.parse(localStorage.getItem('book'));
    existing = existing || [];
    this.arr = existing;
    this.arr.push(data);
    localStorage.setItem('book', JSON.stringify(this.arr));
  }

  removeBook = (index) => {
    if (index !== null && index !== undefined) {
      this.arr.splice(index, 1);
      localStorage.setItem('book', JSON.stringify(this.arr));
      this.getData();
    }
  };

  getData() {
    divbooks.innerHTML = '';
    this.arr.forEach((value, index) => {
      divbooks.innerHTML += `
              <div class="books">
              <div class="list-btn">
              <ul class="list">
                  <li class="title">${value.name}</li>
                  <li class="author"> by ${value.author}</li>
              </ul>
              <button id="remove" onclick="remove(${index});">remove</button>
              </div>
              </div>`;
    });
  }
}

let collection = JSON.parse(localStorage.getItem('book'));

if (collection === null) {
  collection = [];
}
const bookArr = new Book(collection);
addBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const book1 = { name: inputTitle.value, author: inputAuthor.value };
  if (inputTitle.value.length > 0 && inputAuthor.value.length > 0) {
    bookArr.saveData(book1);
    bookArr.getData();
  } else {
    alert('please fill all the inputs');
  }
});

const remove = (index) => bookArr.removeBook(index);
remove();
bookArr.getData();

// Add navigation

const navListBtn = document.querySelector('#add-list');
const addNewBtn = document.querySelector('#add-new');
const contactBtn = document.querySelector('#contact');
const myBookList = document.querySelector('body > main > div.awesome');
const formInput = document.querySelector('body > main > section');
const contactPage = document.querySelector('body > main > div.container.d-flex');
const myTime = document.querySelector('body > main > div.set-time > p');
const { DateTime } = this.luxon;

const myListPage = () => {
  contactPage.style.display = 'none';
  formInput.style.display = 'none';
  myBookList.style.display = 'block';
};
navListBtn.addEventListener('click', myListPage);

const addNewPage = () => {
  myBookList.style.display = 'none';
  contactPage.style.display = 'none';
  formInput.style.display = 'block';
};
addNewBtn.addEventListener('click', addNewPage);

const contInfoPage = () => {
  myBookList.style.display = 'none';
  formInput.style.display = 'none';
  contactPage.style.display = 'block';
};
contactBtn.addEventListener('click', contInfoPage);

// mobile menu

const menu = document.querySelector('.mobile');
const menuItems = document.querySelectorAll('.nav-tag');
const hamburger = document.querySelector('.hamburger');
const closeIcon = document.querySelector('.closeIcon');
const hamb = document.querySelector('.hamb');
closeIcon.style.display = 'none';
function toggleMenu() {
  if (menu.classList.contains('showMenu')) {
    menu.classList.remove('showMenu');
    closeIcon.style.display = 'none';
  } else {
    menu.classList.add('showMenu');
    closeIcon.style.display = 'block';
  }
}
hamburger.addEventListener('click', toggleMenu);
hamb.addEventListener('click', toggleMenu);
menuItems.forEach(
  (menuItem) => {
    menuItem.addEventListener('click', toggleMenu);
  },
);
setInterval(() => { myTime.innerHTML = `${DateTime.now().toLocaleString(DateTime.DATETIME_MED)}`; }, 1000);