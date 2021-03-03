const title = document.querySelector('#title');
const author = document.querySelector('#author');
const btn = document.querySelector('#add');
const lista = document.querySelector('.list')
let names

class Book {
    constructor(title, author) {
        this.title = title.value,
            this.author = author.value
    }
}

const display = () => {
    localStorageBooks = JSON.parse(localStorage.getItem('names'))
    if (localStorageBooks === null) {
        names = []
    } else {
        for (i = 0; i < localStorageBooks.length; i++) {
            const row1 = document.createElement('div')
            row1.classList.add('row')
            row1.innerHTML = `<div>${localStorageBooks[i].title}</div><div>${localStorageBooks[i].author}</div><div><button class="delete" onclick="deleteData()">X</button></div>`
            lista.appendChild(row1)
        }
    }
}
display()

const saveStorage = () => {
    const localStorageBooks = localStorage.getItem('names')
    let names
    if (localStorageBooks === null) {
        names = []
    } else {
        names = JSON.parse(localStorageBooks)
    }

    const newBook = new Book(this.title, this.author)

    names.push(newBook)
    localStorage.setItem('names', JSON.stringify(names))
}
const clearData = () => {
    title.value = ""
    author.value = ""
}


const saveData = () => {
    const row = document.createElement('div')
    row.classList.add('row')
    row.innerHTML = `<div>${title.value}</div><div>${author.value}</div><div><button class="delete" onclick="deleteData()">X</button></div>`
    lista.appendChild(row)
    saveStorage()
    clearData()
}


function removeStorage(name) {
    let books = JSON.parse(localStorage.getItem('names'));
    books.forEach(function (book, index) {
        if (book.title === name) {
            books.splice(index, 1)
        }
    })
    localStorage.setItem('names', JSON.stringify(books));
}


btn.addEventListener('click', saveData)

function deleteData() {
    document.querySelectorAll('.row').forEach((el, index) => {
        el.addEventListener('click', () => {
            el.remove(index);
            removeStorage(el.firstElementChild.textContent)
        })
    })
}