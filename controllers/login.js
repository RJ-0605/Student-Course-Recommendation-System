const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const fs = require('fs')
const loginRouter = require('express').Router()
const User = require('../models/user')

const cors = require('cors');

var corsOptions = {
  origin: 'http://localhost:3000/login',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}



loginRouter.post('/', cors(corsOptions),  async (request, response) => {
  const body = request.body.user


  const user = await User.findOne({ username: body.username});
  
  const passwordCorrect = user === null
    ? false
  //  : console.log(user)
    : await bcrypt.compare(body.password, user.passwordHash);
  
    if (!(user && passwordCorrect)) {
      return response.status(401).json({
        error: 'invalid username or password'
      })
    }

    // needed for JWT
    // user._id is returned as user.id as i stripped away the underscore when gettng
    // but the underscore remains when seraching for a particular user in User model 
    
    
    const userForToken = {
      username: user.username,
      id: user.id,
    }


		let privateKey = fs.readFileSync('./private.pem' , 'utf-8')
		
	   let token = jwt.sign( userForToken , privateKey, {algorithm:'HS256'})
	 
	 var username = user.username
	 var userId  = user.id
	 
    console.log("logged in successfully",user.username , user.id)
    response
      .status(200)
      .send({ token, username , userId  })
      
})




module.exports = loginRouter
