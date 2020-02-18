const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

require("dotenv").config({
    path: path.join(__dirname, "../.env")
});

const userRouter =  require('./api/users/user.router');
const middlewares = require('./core/middlewares')

const app = express()

const PORT = process.env.PORT

app.use(bodyParser.json());

mongoose.connect(process.env.MONGODB_URL, {  useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true, }).then(() => {
  console.log('Connected to the Database successfully')
});

app.use(middlewares.verifyAccessToken);
  




app.get('/', (req, res) => {
    res.json({
        message: 'role base express'
    })
})

app.use('/api/users', userRouter)

app.listen(PORT, () => {
    console.log(`server running on port: ${PORT}`)
})