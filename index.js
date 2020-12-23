

const express = require('express')
const jwt = require('jsonwebtoken')
const fs = require('fs')
const bodyParser = require('body-parser')
const cors = require('cors');
const path = require('path');

// Mongodb Connection
require('./config/database');

const loginRouter = require('./controllers/login')
const SignupRouter = require('./controllers/signup')
const HomeRouter = require('./controllers/home')
const TestRouter = require('./controllers/tests')
const UserRouter = require('./controllers/UserRouter')

const StudentphaseRouter = require('./controllers/Studentphase')


const app = express()

// Declare your PORT
const port = process.env.PORT || 5000;

// parse application/x-www-form-urlencoded for picking data or params
// in post request of forms 
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())
app.use(cors())


// Apply Common Middlewares
app.use(express.json());

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

app.use('/signup', SignupRouter)


app.use('/login', loginRouter)

app.use('/user',UserRouter)

app.use('/tests',TestRouter)

app.use('/studentphase', StudentphaseRouter)

app.use('/', HomeRouter)


// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});



app.listen(port, () => console.log(`Started App on port : ${port}`))





