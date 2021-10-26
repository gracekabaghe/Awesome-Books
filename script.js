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
for(i = 0; i < awesomeBooks.length; i++) {
    const details = awesomeBooks[i];
    ourZone.innerHTML += `
    <P>${details.title}</P>
    <P>${details.author}</P>
    <button type="button">${details.buttonRemove}</button>
    <hr>
    `;
}


  