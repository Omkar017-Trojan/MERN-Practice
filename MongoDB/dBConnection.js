const mongoose = require('mongoose');

// mongoose.connect("mongodb://223.228.139.109/ shinolikaromkar1_db_user")
// .then(()=>{
//     console.log("MongoDB Connected");
// })
// .catch((err)=>{
//     console.log(err);
// });

function dBConn(){
    const DB_URL = process.env.MONGO_URI;

    mongoose.connect(DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    const db = mongoose.connection;

    db.on('error',console.error.bind(console, "connection Error"))
    db.once("open", function(){
        console.log("Connection Successfull...")
    })
}

// async function dBConn() {
//     try {
//         await mongoose.connect(process.env.MONGO_URI);
//         console.log("MongoDB Connected");
//     } catch (err){
//         console.log(err);
//     }
// }



module.exports = dBConn;