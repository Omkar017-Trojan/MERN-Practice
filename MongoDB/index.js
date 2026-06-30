const express = require('express');
const users = require('./data/users.json');
const books = require('./data/books.json');

const usersrouter = require('./routes/users.js');
const booksrouter = require('./routes/books.js');

const dotenv = require('dotenv'); 
const dBConn = require('./dBConnection.js');

const app = express();
dotenv.config();
dBConn();
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