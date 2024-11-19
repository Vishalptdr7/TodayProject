const mongoose =require('mongoose');
// mongoose.connect("mongodb://127.0.0.1:27017/test");


//Connect database with asynchronous

main().then((res)=>{
console.log("Connection established");
}).
catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/test");
}


const userSchema=new mongoose.Schema({
    name:String,
    age:Number,
    email:String
});

const user= mongoose.model("User",userSchema);
// const employee=mongoose.model("Employee",userSchema)

const user1=new user({name:"Vishal Patidar",age:22,email:"vishal@gmail.com"});
const user2=new user({name:"Raman Agnihotry",age:24,email:"raman@gmail.com"});
user2.save().then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
});
user1.save();  



user.insertMany([{
    name:"Ankush Patidar",
    age:23,
    email:"ankush@gmail.com"
},{
    name:"Priya Patidar",
    age:25,
    email:"priya@gmail.com"
},{
    name:"Shivam Patidar",
    age:26,
    email:"shivam@gmail.com"
},{
    name:"Suresh Patidar",
    age:27,
    email:"suresh@gmail.com"
}]).then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err);
})


user.find({age:{$gte:23}}).then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
});

user.updateMany({age:{$gte:23}},{age:34}).then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
});









const studentSchema= mongoose.Schema({
    name:String,
    age:Number,
    grade:String,
    email:String,
});


const student=mongoose.model("Student",studentSchema);

student.insertMany([{
    name:"Vishal Patidar",
    age:22,
    grade:"A",
    email:"vishal@gmail.com"

},{
    name:"Raman Agnihotry",
    age:24,
    grade:"B",
    email:"raman@gmail.com"
},{
    name:"Shivam Patidar",
    age:26,
    grade:"C",
    email:"shivam@gmail.com"
},{
    name:"Suresh Patidar",
    age:27,
    grade:"D",
    email:"suresh@gmail.com"
},{
    name:"Ankush Patidar",
    age:23,
    grade:"A",
    email:"ankush@gmail.com"
},{
    name:"Priya Patidar",
    age:25,
    grade:"B",
    email:"priya@gmail.com"
}]).then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
});


student.updateMany({age:{$gte:25}},{age:33}).then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
});


user.deleteMany({}).then((res)=>{
    console.log(res);
});

