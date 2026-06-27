const http = require('http');
PORT = 5050;

const todos = ['Omkar','abc@gmail.com',91372593814,'Google'];

http.createServer((req,res)=>{
    const{method,url} = req;
    if(url === '/todos'){
        if(method === 'GET'){
            res.writeHead(200,{'Content-Type':'text/html'});
            res.end(JSON.stringify(todos));
        }else if(method === 'POST'){
            let body = '';
            req.on('data',(chunk)=>{
                body += chunk.toString();
            });
            req.on('end',()=>{
                body = JSON.parse(body);
                todos.push(body.item);
                res.writeHead(201,{'Content-Type':'text/html'});
                res.end(JSON.stringify({message:'Todo added successfully'}));
            });
        }else if(method === 'DELETE'){
            let body = '';
            req.on('data',(chunk)=>{
                body += chunk.toString();
            });
            req.on('end',()=>{
                body = JSON.parse(body);

                // const index = todos.indexOf(body.item);
                // if(index > -1){
                    // todos.splice(index, 1);
                
                    let deleteThis = body.item;
                    for(let i=0; i<todos.length; i++){
                        if(todos[i] === deleteThis){
                            todos.splice(i, 1);
                            break;
                        }
                    }
                    res.writeHead(200,{'Content-Type':'text/html'});
                    res.end(JSON.stringify({message:'Todo deleted successfully'}));
                }
            );
        }
    }







}).listen(PORT,()=>{
    console.log(`server is up and running on http://localhost:${PORT}`);
})