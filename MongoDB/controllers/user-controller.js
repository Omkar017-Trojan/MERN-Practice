const {userModel, bookModel} = require('../models');

exports.getAllUsers = async(req,res)=>{
    const users = await userModel.find();

    if(users.length === 0){
        return res.status(404).json({
            success: false,
            message: "No User in System"
        })
    }

    res.status(200).json({
        success: true,
        data: users
    })
}

exports.getUserById = async(req,res) => {
    const {id} = req.params;
    const user = await userModel.findById(id);

    if(!user){
        return res.status(404).json({
            success: false,
            message: "No user by this id Found."
        })
    }

    res.status(200).json({
        success: true,
        User: user
    })
}

exports.addUser = async(req,res)=>{
    const {data} = req.body;

    if(!data || Object.keys(data).length === 0){
        res.status(400).json({
            sucess: false,
            message: "Please provide all the Info!"
        })
    }

    const newUser = await userModel.create(data);

    res.status(200).json({
        succes: true,
        message: "User Created successfully",
        User: newUser
    })
}

exports.updateUser = async(req,res)=>{
    const {id} = req.params
    const {data} = req.body

    if(!data || Object.keys(data).length === 0){
        res.status(400).json({
            sucess: false,
            message: "Please provide all the data to Update"
        })
    }
    const user = await userModel.findById(id)
    if(!user){
        res.status(404).json({
            success: false,
            message: "No user Found by this id."
        })
    }


    Object.assign(user,data)
    await user.save();

    // const updatedUser = await userModel.findOneAndUpdate(
    //     {_id:id},
    //     data,
    //     {new: true}
    // );

    res.status(200).json({
        succes: true,
        message: "User Updates Successfully",
        data: user
        // data: updatedUser
    })
}

exports.deleteUser = async(req,res)=>{
    const {id} = req.params;
    const user = await userModel.findById(id);

    if(!user){
        return res.status(404).json({
            success: false,
            message: "No user by this id Found."
        })
    }

    const deletedUser = await userModel.findByIdAndDelete(id);

    res.status(200).json({
        success: true,
        message: "User Deleted successfully", 
        data: deletedUser
    })
}