const http = require('http');
const fs = require('fs');

// const app = http();
const server = http.createServer((req,res)=>{
    // console.log(req);
    
    // const {method,path} = req;
    // console.log(method,path);

    // res.write('<h1>Hello World!</h1>');

    if(req.url==='/'&&req.method==='GET'){
        res.write('<h1>Home/Default page</h1>');
    // }else if(req.url==='/page1'){
    //     res.write('<h1>Another Page</h1>');
    // }else {
    //     res.write('<h1>End....</h1>');
    // }

    res.write('<h1>Login Form</h1>');
    res.write(`<form action="/submitted" method="POST">

         <label>Name</label><br>
        <input
            type="text"
            placeholder="Enter Name"
            required
        >
        <br>
        <label>Email</label><br>
        <input
            type="email"
            placeholder="Enter Email"
            required
        >

        <br><br>

        <label>Password</label><br>
        <input
            type="password"
            placeholder="Enter Password"
            required
        >

        <br><br>

        <button type="submit">
            Login
        </button>

    </form>`);
    // res.statusCode = 301;
    res.end();


}else if(req.url.toLowerCase() === '/submitted' && req.method === "POST"){
        res.statusCode = 301;
        res.setHeader('Location', '/redirected');    
        return res.end();    
}else if(req.url.toLowerCase()==='/redirected') {
    res.write(`<h1>Redirected</h1>`);
//    fs.writeFileSync('tp.txt','Timepassssss....');
   res.end();
}
});

PORT='5000';
server.listen(PORT, ()=>{
    console.log(`Server is successfully runnig on http://localhost:${PORT}`)
});