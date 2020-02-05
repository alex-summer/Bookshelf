let myLibrary = [];
const theHobbit = new Book("The Hobbit", "J.R.R Toiklen", "200", "./assets/Hobbit.jpg")
const lotr = new Book("Lord of the Rings", "J.R.R Toiklen", "300", "./assets/lotr.jpg")
const lotr2 = new Book("Lord of the Rings", "J.R.R Toiklen", "300", "./assets/lotr.jpg")
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


function Book(title, author, length, cover){
  this.title = title;
  this.author = `Author: ${author}`;
  this.length = `Length: ${length}`;
  this.cover = cover;
}

function addBookToLibrary(book){
  myLibrary.push(book);
}

function displayLibrary(){ 
  const grid = document.getElementById("content");
  const newBook = document.createElement("button")
  newBook.id = "newBook"
  newBook.textContent = "+";
  myLibrary.forEach(element => {
    //Creating each element for our div
    var book = document.createElement("div");
    var title= document.createElement("h2");
    var cover = document.createElement("img");
    var author = document.createElement("p");
    var length = document.createElement("p");
    var remove = document.createElement("button");
    //Adding css classes to them so that way grid area works
    book.className = "book"
    title.className = "title"
    cover.className = "cover"
    author.className = "author"
    length.className = "length"
    remove.className = "remove"

    //Populating content
    title.textContent = element.title;
    cover.src = element.cover;
    author.textContent = element.author;
    length.textContent = element.length;
    remove.textContent = "REMOVE"
    //putting everything into the proper parent divs
    book.appendChild(title);
    book.appendChild(cover);
    book.appendChild(author);
    book.appendChild(length);
    book.appendChild(remove);
    grid.appendChild(book);
  });
  grid.appendChild(newBook);
}