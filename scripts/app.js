let myLibrary = [];
const theHobbit = new Book("The Hobbit", "J.R.R Toiklen", "200", "Bilbo goes on an adventure", "./assets/Hobbit.jpg")
const lotr = new Book("Lord of the Rings", "J.R.R Toiklen", "300", "Nice", "./assets/lotr.jpg")
const lotr2 = new Book("Lord of the Rings", "J.R.R Toiklen", "300", "Nice", "./assets/lotr.jpg")
addBookToLibrary(theHobbit);
addBookToLibrary(lotr);
addBookToLibrary(lotr2);
addBookToLibrary(lotr2);
addBookToLibrary(lotr2);
addBookToLibrary(theHobbit);
addBookToLibrary(lotr2);
addBookToLibrary(lotr2);
addBookToLibrary(theHobbit);
addBookToLibrary(lotr2);
addBookToLibrary(lotr2);
displayLibrary();


function Book(title, author, length, description, cover){
  this.title = title;
  this.author = `Author: ${author}`;
  this.length = `Length: ${length}`;
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
    var titleDiv = document.createElement("h2");
    var coverDiv = document.createElement("img");
    var authorDiv = document.createElement("p");
    var lengthDiv = document.createElement("p");
    var descriptionDiv = document.createElement("p");
    bookDiv.className = "book"
    titleDiv.className = "title"
    coverDiv.className = "cover"
    authorDiv.className = "author"
    lengthDiv.className = "length"
    descriptionDiv.className = "description"


    
    titleDiv.textContent = element.title;
    coverDiv.src = element.cover;
    authorDiv.textContent = element.author;
    lengthDiv.textContent = element.length;
    descriptionDiv.textContent = element.description;
    
    bookDiv.appendChild(titleDiv);
    bookDiv.appendChild(coverDiv);
    bookDiv.appendChild(authorDiv);
    bookDiv.appendChild(lengthDiv);
    bookDiv.appendChild(descriptionDiv);
    gridDiv.appendChild(bookDiv);
  });
}