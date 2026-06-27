const express = require('express');
const app = express();
PORT = 5050;
app.use(express.json());

let todos = ["MERN Stack","Book Reading","Gita","Movies","Timepass"];

app.get('/',(req,res)=>{
    res.status(202).send('Home Page');
    res.header(Location,'/todos');
});

app.get('/todos',(req,res)=>{
    res.send(todos);
});

app.post('/todos',(req,res)=>{
    let todo = req.body.item;
    todos.push(todo);
    res.status(202).send({message:"Task added successfully"});
});

app.delete('/todos',(req,res)=>{
    const deleteThis = req.body.item;
    
    todos.find((element,index)=>{
        if(deleteThis === element){
            todos.splice(index,1);
        }
    });
    
    res.status(202).send({message:`${deleteThis} is Deleted!`});
});

app.listen(PORT,()=>{
    console.log(`Server is Runnig on http://localhost:${PORT}`);
});