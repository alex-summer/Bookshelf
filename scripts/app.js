//Variables
let myLibrary = [];
const grid = document.getElementById("content");
//Test books. Temporary variables
const theHobbit = new Book("The Hobbit", "J.R.R Toiklen", "200", "./assets/Hobbit.jpg")
const lotr = new Book("Lord of the Rings", "J.R.R Toiklen", "300", "./assets/lotr.jpg")
const lotr2 = new Book("Lord of the Rings", "J.R.R Toiklen", "300", "./assets/lotr.jpg")

//Adding the test books to the library upon load
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


//Displays library on load
displayLibrary();


grid.addEventListener("click", function(e){
  var button = e.target.value;
  if(button === "newBook"){
    newBook();
  }
  else if(button != undefined){
    removeBook(button);
  }
})


//Book Object
function Book(title, author, length, cover){
  this.title = title;
  this.author = `Author: ${author}`;
  this.length = `Length: ${length}`;
  this.cover = cover;
}

function addBookToLibrary(book){
  myLibrary.push(book);
}

function newBook(){
  
}

function removeBook(bookIndex){
  myLibrary.splice(bookIndex, 1);
  displayLibrary();
}

function displayLibrary(){
  grid.innerHTML = ""
  const newBook = document.createElement("button")
  newBook.id = "newBook"
  newBook.textContent = "+";
  newBook.value = "newBook"
  for(var i = 0; i < myLibrary.length; i++){
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
    remove.className = "button"

    //Populating content
    title.textContent = myLibrary[i].title;
    cover.src = myLibrary[i].cover;
    author.textContent = myLibrary[i].author;
    length.textContent = myLibrary[i].length;
    remove.textContent = "REMOVE"
    remove.value = i;
    //putting everything into the proper parent divs
    book.appendChild(title);
    book.appendChild(cover);
    book.appendChild(author);
    book.appendChild(length);
    book.appendChild(remove);
    grid.appendChild(book);
  };
  grid.appendChild(newBook);
}

