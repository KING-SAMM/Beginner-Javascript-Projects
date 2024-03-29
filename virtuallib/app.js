// Book Class - Represents a book 
class Book {
    constructor(title, author, isbn) {
        this.title = title; 
        this.author = author; 
        this.isbn = isbn; 
    }
}


// UI Class - Handles UI tasks 
class UI {
    static displayBooks() {
        const books = Store.getBooks();

        // Loop through the books
        books.forEach((book) => UI.addBookToList(book));
    }

    static addBookToList(book) {    
        const list = document.querySelector('#book-list');
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a href='#' class='btn btn-danger btn-sm delete'>X</a></td>
        `;

        // Append row to list
        list.appendChild(row);
    }

    // Delete a book
    static deleteBook(el) {
        if (el.classList.contains('delete')){
            el.parentElement.parentElement.remove();
        }
    }

    // Display message
    static showAlert(message, className) {
        const div = document.createElement('div');
        div.className = `alert alert-${className}`;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector('.container');
        const form = document.querySelector('#book-form');
        container.insertBefore(div, form);

        // Disappear after 3 seconds
        setTimeout(() => {
            document.querySelector('.alert').remove();
        }, 3000);
    }

    // Clear input fields
    static clearFields() {
        document.querySelector('#title').value = null;
        document.querySelector('#author').value = null;
        document.querySelector('#isbn').value = null;
    }
}


// Store Class - Handles storge
class Store {
    static getBooks() {
        let books;
        if(localStorage.getItem('books') === null) {
            books = [];
        } else {
            books = JSON.parse(localStorage.getItem('books'));
        }

        return books;
    }

    static addBook(book) {
        // Get books from local storage
        let books = Store.getBooks();

        // Push the book to add into the array of books
        books.push(book);

        // Convert books object back to JSON string for local storage

        // Update the state of local storage
        localStorage.setItem('books', JSON.stringify(books));

    }

    static removeBook(isbn) {
        let books = Store.getBooks();
        books.forEach((book, index) => {
            if(book.isbn === isbn) {
                books.splice(index, 1);
            }
        });
        localStorage.setItem('books', JSON.stringify(books));
    }
}

// Event - Display books
document.addEventListener('DOMContentLoaded', UI.displayBooks);

// Event - Add a book
document.querySelector('#book-form').addEventListener('submit', (e) => {
    e.preventDefault();

    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const isbn = document.querySelector('#isbn').value;

    // Do not add empty fields if required
    if (title === '' || author === '' || isbn === '') {        
        UI.showAlert('Enter required fields', 'danger');
        return;
    }

    // Instantiate book
    const book = new Book(title, author, isbn);

    // Add created book to list
    UI.addBookToList(book);

    // Save to Storage
    Store.addBook(book);

    // Show message
    UI.showAlert('Book Added', 'success');

    // Clear input fields
    UI.clearFields();
});

// Event - Remove a book
document.querySelector('#book-list').addEventListener('click', (e) => {
    // Remove book from UI
    UI.deleteBook(e.target);

    // Remove book from store
    Store.removeBook(
        e
            .target
            .parentElement
            .previousElementSibling
            .textContent
    );

    // Show message
    UI.showAlert('Book Removed', 'success');
});