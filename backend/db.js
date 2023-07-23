const mongoos = require('mongoose');

const mongoURL = "mongodb://localhost:27017/iNotebook"

const connectToMongo = () => {
    mongoos.connect(mongoURL, ()=>{
        console.log("Connected to MongoDB Successfully");
    })
}


module.exports = connectToMongo;