let myLibrary = [];
const theHobbit = new Book("The Hobbit", "Toiklen", "200", "Bilbo goes on an adventure", "./assets/Hobbit.jpg")
const lotr = new Book("Lord of the Rings", "Toiklen", "300", "Battle for the ring", "./assets/lotr.jpg")
addBookToLibrary(theHobbit);
addBookToLibrary(lotr);
displayLibrary();


function Book(title, author, length, description, cover){
  this.title = title;
  this.author = author;
  this.length = length;
  this.description = description;
  this.cover = cover;
}

function addBookToLibrary(book){
  myLibrary.push(book);
}

function displayLibrary(){ 
  myLibrary.forEach(element => {
    const gridDiv = document.getElementById("content");
    var bookDiv = document.createElement("div");
    bookDiv.className = "gridItem"
    var titleDiv = document.createElement("h2");
    var coverDiv = document.createElement("img");
    var authorDiv = document.createElement("p");
    var lengthDiv = document.createElement("p");
    titleDiv.textContent = element.title;
    coverDiv.src = element.cover;
    coverDiv.className = "cover"
    authorDiv.textContent = element.author;
    lengthDiv.textContent = element.length
    
    bookDiv.appendChild(titleDiv);
    bookDiv.appendChild(coverDiv);
    bookDiv.appendChild(authorDiv);
    bookDiv.appendChild(lengthDiv);
    gridDiv.appendChild(bookDiv);
  });
}