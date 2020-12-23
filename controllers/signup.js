

const bcrypt = require('bcrypt')
const SignupRouter = require('express').Router()
const User = require('../models/user')





SignupRouter.get('/', async (request, response, next) => {


  
 
  
  response.json("Nothing to get for now only posts are recieved ")
})



SignupRouter.post('/' , async (request, response, next) => {

   var msg = ""
	const body = request.body.user
	console.log(request.body)
	
	// write a function to be generating unique ids or use 
	//  mongoose has a way already generating ids 
	// const   id          = 67
   const   useremail   = body["email"];
	const	  firstname   = body["firstname"];
	const	  lastname    = body["lastname"];
	const	  gender      = body["gender"];
	const	  race        = body["race"];
	const	  edulevel    = body["edulevel"]; 
	const	  accountType = body["accountType"];
	const	  province    = body["province"];
	const	  zip         = body["zip"];
	var	  isTeacher   = body["isTeacher"]; 
	
	if (isTeacher === "Yes" ) { isTeacher = 1 
	}else if(isTeacher === "No") {isTeacher = 0 
	}else {isTeacher = 0 }
	
	
	const	  username    = body["username"];
	const	  age         = body["age"];
  
  
  // Get users from database by email 
  
  const userfound = await User.findOne({ email : body["email"] });
  
  console.log(userfound)
      
  const useremail_check = userfound ? userfound.email : false ;
  const useremail_eval  = useremail_check !== useremail ? false : true ;				 	
					 	
  
  if ( useremail_eval === false  ){

				  
				  try {
						 	 						 
						 const saltRounds = 10
						 const passwordHash = await bcrypt.hash(body.password, saltRounds)
						 
						 const email = body["email"]
						 						 
                   
						 const user = new User ({
						 				
								  
								  email ,
								  firstname,
								  lastname,
								  gender,
								  race,
								  edulevel,
								  accountType,
								  province,
								  zip,
								  isTeacher,  
								  username,
								  age,
								  passwordHash
						  
						 })

						 const savedUser = await user.save()
						 msg = "Signup successful"
						 console.log(msg)
						 
						 response.json(savedUser.toJSON())
						 
				  } catch (exception) {
				  		msg = exception
				  		console.log(msg)
					 	next(msg)
				  }
				  
	}else if(useremail_eval === true ){ 
							msg = "useralready exists";
							console.log(msg)
						next( new Error("User Exists") );
							 }
})


module.exports = SignupRouter


