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


const book1 = new Book("1984", "George Orwell", 328, "Read", 1);
const book2 = new Book("To Kill a Mockingbird", "Harper Lee", 281, "Unread", 2);
const book3 = new Book("The Hobbit", "J.R.R. Tolkien", 310, "Reading", 3);
const book4 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 180, "Read", 4);

const myLibrary = [book1, book2, book3, book4];

function addBookToLibrary(name, author, pages, status) {

    let uId = crypto.randomUUID();

    let book = new Book(name, author, pages, status, uId);

    myLibrary.push(book); // Adding new book to the array

    addToPage(myLibrary.length-1);// Adds the new book to the page

}
console.log(myLibrary[0]);


function showBooks() {
    for (let i = 0; i < myLibrary.length; i++) {
       addToPage(i);
    }

}

function addToPage(i){
     const newDiv = document.createElement("div");
        newDiv.style.backgroundColor = "white";
        newDiv.style.color = "#060606ff";
        newDiv.style.border = "2px solid gray"
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



btn.addEventListener("click", () => {
    inputBox.showModal()
})

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const status = document.getElementById("status").value;

    console.log(name);
    addBookToLibrary(name, author, pages, status);

    inputBox.close();
    form.reset();
});


document.getElementById("close").addEventListener("click", () => {
    document.getElementById("input-box").close();
});

showBooks();