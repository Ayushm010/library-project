const card = document.querySelector(".card");

function Book(name, author, pages, status, uId) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.status = status;
    this.uId = uId;

}
Book.prototype.disp = function () {
    console.log(`${this.name} by ${this.author}, ${this.pages} pages long, ${this.status}`);
}

const book1 = new Book("1984", "George Orwell", 328, "Read", 1);
const book2 = new Book("To Kill a Mockingbird", "Harper Lee", 281, "Unread", 2);
const book3 = new Book("The Hobbit", "J.R.R. Tolkien", 310, "Reading", 3);
const book4 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 180, "Read", 4);

const myLibrary = [book1, book2, book3, book4];

function addBookToLibrary() {
    let name = prompt("Enter the name of the book");
    let author = prompt("Enter the name of the author");
    let pages = prompt("Enter the no of pages");
    let status = prompt("read/not yet?");
    let uId = crypto.randomUUID();

    let book1 = new Book(name, author, pages, status, uId);
    book1.disp();

    myLibrary.push(book1);
     let newDiv = document.createElement("div");
        newDiv.style.backgroundColor = "#cbcbd5ff";
        newDiv.style.color = "#FFE66D";
        newDiv.style.padding = "20px";
        newDiv.style.borderRadius = "10px";
        newDiv.style.margin = "10px 0";
        newDiv.style.fontSize = "18px";
        newDiv.style.fontFamily = "Arial, sans-serif";

        newDiv.innerHTML = `
                        ${myLibrary[myLibrary.length-1].name}<br>
                        ${myLibrary[myLibrary.length-1].author}<br>
                        ${myLibrary[myLibrary.length-1].pages}<br>
                        ${myLibrary[myLibrary.length-1].status}`;

        card.appendChild(newDiv);

}
console.log(myLibrary[0]);


function showBooks() {
    for (let i = 0; i < myLibrary.length; i++) {
        let newDiv = document.createElement("div");
        newDiv.style.backgroundColor = "#cbcbd5ff";
        newDiv.style.color = "#FFE66D";
        newDiv.style.padding = "20px";
        newDiv.style.borderRadius = "10px";
        newDiv.style.margin = "10px 0";
        newDiv.style.fontSize = "18px";
        newDiv.style.fontFamily = "Arial, sans-serif";

        newDiv.innerHTML = `
                        ${myLibrary[i].name}<br>
                        ${myLibrary[i].author}<br>
                        ${myLibrary[i].pages}<br>
                        ${myLibrary[i].status}`;

        card.appendChild(newDiv);
    }

}
showBooks();
const btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
    addBookToLibrary();
})
