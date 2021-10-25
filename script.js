const awesomeBooks = [
    {
        title: 'Book one',
        author: 'John Gray',
        buttonRemove: 'Remove',
        
    },
    {
        title: 'Book two',
        author: 'Maggie Gray',
        buttonRemove: 'Remove',
       
    },
    {
        title: 'Book three',
        author: 'Bill Gates',
        buttonRemove: 'Remove',
        
    },
];
const buttonAdd = document.querySelector('#add-btn');
const buttonRemove = document.querySelector('.remove-btn');
const ourZone = document.querySelector('.book-content');
function accessBook(m){
    ourZone.innerHTML = `
<p>${awesomeBooks[m].title}</p>
<p>${awesomeBooks[m].author}</p>

<hr>
`
}


  