const mongoos = require('mongoose');

const mongoURI = "mongodb://localhost:27017/iNotebook"

const connectToMongo = () => {
    mongoos.connect(mongoURI, ()=>{
        console.log("Connected to MongoDB Successfully");
    })
}


module.exports = connectToMongo;