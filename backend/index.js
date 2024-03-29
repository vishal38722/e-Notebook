// this index.js is actually an express server

const connectToMongo = require('./db');
const express = require('express')

connectToMongo();

const app = express()
const PORT = 5000      // PORT: 3000 is for React application so for backend we choose another PORT

// cors middleware
const cors = require('cors')
app.use(cors())

app.get("/", (req, res) => {
  res.send(`Server is running on PORT ${PORT}`);
})
// this is middleware for accessing body of the request
app.use(express.json());

// using 2 routes auth and notes in our express app
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))

// this code is for route, this type of code we will write in '/route/auth.js' and '/route/notes.js' to maintain a better management only
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.listen(PORT, () => {
  console.log(`Your app is running at http://localhost:${PORT}`);
})