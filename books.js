// const mongoose = require("mongoose");
// // mongoose.connect("mongodb://127.0.0.1:27017/test");

// //Connect database with asynchronous

// main()
//   .then((res) => {
//     console.log("Connection established");
//   })
//   .catch((err) => console.log(err));

// async function main() {
//   await mongoose.connect("mongodb://127.0.0.1:27017/amazon");
// }

// const bookSchema=new mongoose.Schema({
//     title:{
//         type:String,
//         required:true,
//     author:{
//         type:String,
        
//     }
//     ,
//     price:{
//         type:Number
//     }
//     }
// });

// const book=mongoose.model("Book",bookSchema);

// //create a new book
// const book1=new book({
//     title:"The Great Gatsby",
//     author:"F. Scott Fitzgerald",
//     price:"$"+12.99
// });

// book1.save().then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// });
// book.insertMany([{
//     title:"To Kill a Mockingbird",
//     author:"Harper Lee",
//     price:"$"+9.99
// },{
//     title:"1984",
//     author:"George Orwell",
//     price:"$"+11.99
// },{
//     title:"Pride and Prejudice",
//     author:"Jane Austen",
//     price:"$"+10.99
// },{
//     title:"The Catcher in the Rye",
//     author:"J.D. Salinger",
//     price:"$"+9.99
// },{
//     title:"The Night Circus",
//     author:"Harper Lee",
//     price:"$"+12.99
// }]).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })




const mongoose = require("mongoose");

// Connect database with asynchronous function
main()
  .then(() => {
    console.log("Connection established");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/amazon");
}

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
  },
  price: {
    type: Number,
  },
  category:{
    type:String,
    enum:["Fiction","Drama","Novel",]
  }
});

const Book = mongoose.model("Book", bookSchema);

// Create a new book
const book1 = new Book({
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  price: 12.99, // Price as a Number, not a string
  category:"Fiction"
});

book1
  .save()
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

// Insert multiple books
Book.insertMany([
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    price: 9.99,
  },
  {
    title: "1984",
    author: "George Orwell",
    price: 11.99,
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    price: 10.99,
  },
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    price: 9.99,
  },
  {
    title: "The Night Circus",
    author: "Harper Lee",
    price: 12.99,
  },
 
])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
