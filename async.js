/*
function getData(data) {
  return new Promise((resolve, reject) => {
    console.log("Veriler alınıyor..");

    if (data) {
      resolve("veriler alındı");
    } else {
      reject("veriler alınamadı");
    }
  });
}

function cleanData(receiveddata) {
  return new Promise((resolve, reject) => {
    console.log("Veriler düzenleniyor..");

    if (receiveddata) {
      resolve("veriler düzenlendi");
    } else {
      reject("veriler düzenlenemedi");
    }
  });
}

async function processData() {
  try {
    const receivedData = await getData(false);
    console.log(receivedData);
    const cleanedData = await cleanData(true);
    console.log(cleanedData);
  } catch (error) {
    console.log(error);
  }
}

processData();

*/

const books = [
  { name: "Book1", author: "Author1" },
  { name: "Book2", author: "Author2" },
  { name: "Book3", author: "Author3" },
];

const listBooks = () => {
  books.map((book) => {
    console.log(book.name);
  });
};

const addBook = (newBook) => {
  const promise1 = new Promise((resolve, reject) => {
    books.push(newBook);
    //resolve(books)
    reject("ERR");
  });
  return promise1;
};

/*addBook({name: "Book4" , author: "Author4"})
  .then(() => {
    console.log("Updated");
    listBooks();
  }).catch((error)=>{
    console.log(error)
  })
  */

async function showBooks() {
  try {
    await addBook({ name: "Book4", author: "Author4" });
    listBooks();
  } catch (error) {
    console.log(error);
  }
}

showBooks();
