let myLibrary = [];
const theHobbit = new Book("The Hobbit", "Toiklen", "200", "Bilbo goes on an adventure")
const lotr = new Book("Lord of the Rings", "Toiklen", "300", "Battle for the ring")
addBookToLibrary(theHobbit);
addBookToLibrary(lotr);
displayLibrary();


function Book(title, author, length, description){
  this.title = title;
  this.author = author;
  this.length = length;
  this.description = description;
}

function addBookToLibrary(book){
  myLibrary.push(book);
}

function displayLibrary(){
  myLibrary.forEach(element => {
    const gridDiv = document.getElementById("content");
    var bookDiv = document.createElement("div");
    bookDiv.className = "gridItem"
    var titleDiv = document.createElement("h4");
    var authorDiv = document.createElement("p");
    titleDiv.textContent = element.title;
    authorDiv.textContent = element.author;
    
    bookDiv.appendChild(titleDiv);
    bookDiv.appendChild(authorDiv);
    gridDiv.appendChild(bookDiv);

  });
}