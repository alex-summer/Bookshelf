//Variables
let myLibrary = [];
const grid = document.getElementById("content");
const formContainer = document.getElementById("formContainer");
const newBookForm = document.getElementById("newBookForm");

//Displays library on load
displayLibrary();

formContainer.addEventListener("click", function(e){
  var button = e.target.value;
  if(button === "closeForm"){
    closeForm();
  }
})

newBookForm.addEventListener("submit", function(e){
  var book = new Book(newBookForm.elements.title.value, newBookForm.elements.Author.value,newBookForm.elements.pages.value,"./assets/lotr.jpg");
  addBookToLibrary(book);
  closeForm();
  displayLibrary();
  e.preventDefault();
})

grid.addEventListener("click", function(e){
  var button = e.target.value;
  if(button === "newBook"){
    openForm();
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

function openForm(){
  formContainer.style.display = "block";
}

function closeForm(){
  formContainer.style.display = "none";
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

