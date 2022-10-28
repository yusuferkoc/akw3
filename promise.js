/* const pro = new Promise((resolve, reject) => {
  resolve("OK");
  reject("ERR");
});

pro
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  });

*/

const books = [
  {name: "Book1", author: "Author1"},
  {name: "Book2", author: "Author2"},
  {name: "Book3", author: "Author3"}
]

const listBooks = () => {
  books.map(book => {
    console.log(book.name);
  })
}

const addBook = (newBook) => {

  const promise1 = new Promise((resolve ,reject) => {
    books.push(newBook);
    resolve(books)
    reject("ERR")
  })
  return promise1;
}

addBook({name: "Book4" , author: "Author4"})
.then(() => {
  console.log("Updated");
  listBooks();
}).catch((error)=>{
  console.log(error)
})