const card = document.querySelector(".card");
const btn = document.querySelector("#btn");
const inputBox = document.getElementById("input-box");
const form = document.getElementById("bookForm");
const closeBtn = document.getElementById("close");

function Book(name, author, pages, status, uId) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.status = status;
    this.uId = uId;
}

const book1 = new Book("1984", "George Orwell", 328, "Read", crypto.randomUUID());
const book2 = new Book("To Kill a Mockingbird", "Harper Lee", 281, "Unread", crypto.randomUUID());
const book3 = new Book("The Hobbit", "J.R.R. Tolkien", 310, "Read", crypto.randomUUID());
const book4 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 180, "Read", crypto.randomUUID());
const book5 = new Book("Mistborn", "Brandon Sanderson", 680, "Read", crypto.randomUUID());

const myLibrary = [book1, book2, book3, book4, book5];

function addBookToLibrary(name, author, pages, status) {
    const uId = crypto.randomUUID();
    const book = new Book(name, author, pages, status, uId);
    myLibrary.push(book);
    displayBooks(); // re-render all books after adding
}

function displayBooks() {//displays all the book to the page
    card.innerHTML = ""; // Clear previous cards
    for (let i = 0; i < myLibrary.length; i++) {
        addToPage(i);
    }
}

function addToPage(i) {
    const newDiv = document.createElement("div");
    newDiv.classList.add("book-card");
    newDiv.dataset.id = myLibrary[i].uId;

    newDiv.style.backgroundColor = "white";
    newDiv.style.color = "#060606ff";
    newDiv.style.border = "2px solid gray";
    newDiv.style.padding = "20px";
    newDiv.style.borderRadius = "10px";
    newDiv.style.margin = "10px 0";
    newDiv.style.fontSize = "18px";
    newDiv.style.fontFamily = "Arial, sans-serif";

    const name = document.createElement("strong");
    name.textContent = myLibrary[i].name;

    const author = document.createElement("p");
    author.textContent = myLibrary[i].author;

    const pages = document.createElement("p");
    pages.textContent = myLibrary[i].pages + " Pages";

    const status = document.createElement("p");
    status.textContent = "Status: " + myLibrary[i].status;

    newDiv.appendChild(name);
    newDiv.appendChild(author);
    newDiv.appendChild(pages);
    newDiv.appendChild(status);

    //Adding remove button to the new div element
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.classList.add("remove-btn");
    removeBtn.addEventListener("click", () => {
        const bookCard = removeBtn.closest(".book-card");
        const bookId = bookCard.dataset.id;

        // Remove from myLibrary
        const index = myLibrary.findIndex(book => book.uId === bookId);
        if (index !== -1) {
            myLibrary.splice(index, 1);
        }

        // Re-render books
        displayBooks();
    });
    newDiv.appendChild(removeBtn);

    //Adding toggle button for Book status
    const statusToggle = document.createElement("button");
    statusToggle.textContent = myLibrary[i].status == "Unread"?"Read":"Unread";
    statusToggle.classList.add("toggle-btn");
    statusToggle.addEventListener("click", () => {
        const bookCard = removeBtn.closest(".book-card");
        const bookId = bookCard.dataset.id;
        const index = myLibrary.findIndex(book => book.uId === bookId);
        if (myLibrary[index].status === "Read") {
            myLibrary[index].status = "Unread";
        } else {
            myLibrary[index].status = "Read";

        }
        displayBooks();
    });
    newDiv.appendChild(statusToggle);

    card.appendChild(newDiv);

}


btn.addEventListener("click", () => {
    inputBox.showModal();
});

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const status = document.getElementById("status").value;

    addBookToLibrary(name, author, pages, status);

    inputBox.close();
    form.reset();
});

closeBtn.addEventListener("click", () => {
    inputBox.close();
});

displayBooks();
