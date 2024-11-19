const book1 = new Book({
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  price: 12.99, // Price as a Number, not a string
  category:"Maths"
});

book1
  .save()
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });