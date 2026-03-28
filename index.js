import express from 'express';

const app = express();
const port = 5000;

app.get('/', (req, res) => {
    res.send("Welcome to Node.js");
    res.end();
})


app.listen(port, () => {
    console.log(`Server is running on port  ${port}`);
})

console.log("Welcome to Node.js");


// function greet(){
//     console.log("hello users"+" "+this);
// }

// greet();

// console.log(this);

// const timer = {
//   seconds: 0,
//   start: function() {
//     // Regular function here would lose 'this'
//     setTimeout(() => {
//       this.seconds++;
//       console.log(this.seconds);
//     }, 1000);
//   }
// };
// timer.start();
// const dog = { name: "Buddy", bark: function() { console.log(this.name); }};
// const speak = dog.bark;
// speak(); // What is the