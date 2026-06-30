const {userModel, bookModel} = require('../models');

exports.getAllBooks = async(req,res)=>{
    const books = await bookModel.find();

    if(books.length === 0){
        return res.status(404).json({
            success: false,
            message: "No book in System"
        })
    }

    res.status(200).json({
        success: true,
        data: books
    })
}

exports.getbookById = async(req,res) => {
    const {id} = req.params;
    const book = await bookModel.findById(id);

    if(!book){
        return res.status(404).json({
            success: false,
            message: "No book Found by this id."
        })
    }

    res.status(200).json({
        success: true,
        Book: book
    })
}

exports.addBook = async(req,res)=>{
    const {data} = req.body;

    if(!data || Object.keys(data).length === 0){
        res.status(400).json({
            sucess: false,
            message: "Please provide all the Info!"
        })
    }

    const newBook = await bookModel.create(data);

    res.status(200).json({
        succes: true,
        message: "Book Created successfully",
        Book: newBook
    })
}

exports.updateBook = async(req,res)=>{
    const {id} = req.params
    const {data} = req.body

    if(!data || Object.keys(data).length === 0){
        res.status(400).json({
            sucess: false,
            message: "Please provide all the data to Update"
        })
    }
    const book = await bookModel.findById(id)
    if(!book){
        res.status(404).json({
            success: false,
            message: "No Book Found by this id."
        })
    }


    Object.assign(book,data)
    await book.save();

    // const updatedBook = await bookModel.findOneAndUpdate(
    //     {_id:id},
    //     data,
    //     {new: true}
    // );

    res.status(200).json({
        succes: true,
        message: "Book Updated Successfully",
        data: book
        // data: updatedBook
    })
}

exports.deleteBook = async(req,res)=>{
    const {id} = req.params;
    const book = await bookModel.findById(id);

    if(!book){
        return res.status(404).json({
            success: false,
            message: "No book by this id Found."
        })
    }

    const deletedBook = await bookModel.findByIdAndDelete(id);

    res.status(200).json({
        success: true,
        message: "Book Deleted successfully", 
        data: deletedBook
    })
}