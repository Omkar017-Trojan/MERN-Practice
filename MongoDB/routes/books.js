const express = require('express');
const books = require('../data/books.json');

const {userModel,bookModel} = require('../models/index');
const { getAllBooks, getbookById, addBook, updateBook, deleteBook } = require('../controllers/book-controller');

const routers = express.Router();

// routers.get('/',(req,res)=>{
//     res.send(books);
// });

routers.get('/',getAllBooks);

// routers.get('/:id',(req,res)=>{
//     const {id} = req.params;
//     const book = books.find((each)=>each.id === Number(id));
    
//     if(!book){
//        return res.status(404).json({
//         success: false,
//         message: `Book not found of id: ${id}`
//        })
//     }

//     return res.status(200).json({
//         success: true,
//         data: book
//     });
// });

routers.get('/:id', getbookById);

// routers.post('/',(req, res)=>{
//     // example of book:
//     // "id": 109,
//     // "title": "Harry Potter and the Philosopher's Stone",
//     // "author": "J.K. Rowling",
//     // "genre": "Fantasy",
//     // "isbn": "9780747532699",
//     // "publishedYear": 1997,
//     // "available": true
    
//     const {id,title,author,genre,isbn,publishedYear,available} = req.body;

//     if(!id || !title || !author || !genre || !isbn || !publishedYear || available === undefined){
//         return res.status(400).json({
//             success: false,
//             message: "All fields neccessary!"
//         }); 
//     }
    
//     const book = books.find((each)=>each.id === Number(id));
//     if(book){
//         return res.status(409).json({
//             message: `Book already exists with id: ${id}`
//         })
//     }

//     books.push({id,title,author,genre,isbn,publishedYear,available})
//     res.status(200).json({
//         success: true,
//         message: "New Book entry created!"
//     })
// });

routers.post('/', addBook);

// routers.put('/:id',(req,res)=>{
//     const {id} = req.params;
//     const {data} = req.body;

//     const book = books.find((each)=>each.id === Number(id))
//     if(!book){
//         return res.status(404).json({
//             success: false,
//             message:`Book does not exist with id: ${id}`
//         })
//     }

//     const updateBook = books.map((each)=>{
//         if(each.id === Number(id)){
//             return{
//                 ...each,
//                 ...data,
//             }
//         }
//         return each
//     })

//     res.status(200).json({
//         success: true,
//         message: "Book Updated Successfully",
//         data: updateBook
//     })
// });

routers.put('/:id', updateBook);

// routers.delete('/:id',(req,res)=>{
//     const {id} = req.params;

//     const book = books.find((each)=>each.id === Number(id));

//     if(!book){
//         return res.status(404).json({
//             success: false,
//             message: `Book does not exist with id: ${id}`
//         })
//     }

//     const updatedBooks = books.filter((each)=>each.id !== Number(id)); 
    
//     res.status(200).json({
//         success: true,
//         message: `Book entry deleted with id: ${id}`,
//         updatedBooksList: updatedBooks
//     })
// });

routers.delete('/:id', deleteBook);

module.exports = routers;