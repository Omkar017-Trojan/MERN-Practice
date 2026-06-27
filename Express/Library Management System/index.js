const express = require('express');
const users = require('./users.json');
const books = require('./books.json');

const usersrouter = require('./routes/users.js');
const booksrouter = require('./routes/books.js');

const app = express();

PORT = 5054;

app.use(express.json());
app.use('/users', usersrouter);
app.use('/books', booksrouter);

// app.get('/',(req,res)=>{
//     res.send("Default Page, Redirect to /lib");
// })


app.listen(PORT,()=>{
    console.log(`Server is up and running on Port:${PORT}`);

});