const express = require('express');
const users = require('../users.json');

const routers = express.Router();

routers.get('/',(req,res)=>{
    res.send(users);
});

routers.get('/:id',(req,res)=>{
    const {id} = req.params;
    const user = users.find((each)=>each.id === Number(id));
    
    if(!user){
       return res.status(404).json({
        success: false,
        message: `user not found of id: ${id}`
       })
    }

    return res.status(200).json({
        success: true,
        data: user
    });
    
})

routers.post('/',(req, res)=>{
    // example of user:
    // "id": 4,
    // "name": "Sneha Joshi",
    // "email": "sneha.joshi@example.com",
    // "phone": "9876543213",
    // "membershipType": "Student",
    // "joinDate": "2025-02-05",
    // "booksIssued": [103, 104]
    
    const {id,name,email,phone,membershipType,joinDate,bookIssued} = req.body;

    if(!id || !name || !email || !phone || !membershipType || !joinDate || !bookIssued){
        return res.status(400).json({
            success: false,
            message: "All fields neccessary!"
        }); 
        // res.end();
    }
    
    const user = users.find((each)=>each.id === Number(id));
    if(user){
        return res.status(200).json({
            message: `User already exists with id: ${id}`
        })
    }

    users.push({id,name,email,phone,membershipType,joinDate,bookIssued})
    res.status(200).json({
        success: true,
        message: "New user created!"
    })
});

routers.put('/:id',(req,res)=>{
    const {id} = req.params;
    const {data} = req.body;

    const user = users.find((each)=>each.id === Number(id))
    if(!user){
        return res.status(404).json({
            success: false,
            message:`User does not exist with id: ${id}`
        })
    }

    const updateUser = users.map((each)=>{
        if(each.id === Number(id)){
            return{
                ...each,
                ...data,
            }
        }
        return each
    })

    res.status(200).json({
        success: true,
        message: "User Updated Successfully",
        data: updateUser
    })
});

routers.delete('/:id',(req,res)=>{
    const {id} = req.params;

    const user = users.find((each)=>each.id === Number(id));

    if(!user){
        return res.status(404).json({
            success: false,
            message: `user does not exist with id: ${id}`
        })
    }

    const updatedUsers = users.filter((each)=>each.id !== Number(id)); 
    
    res.status(200).json({
        success: true,
        message: `user deleted with id: ${id}`,
        updatedUsersList: updatedUsers
    })
});

module.exports = routers;