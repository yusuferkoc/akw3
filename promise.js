const pro = new Promise((resolve, reject) => {
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
