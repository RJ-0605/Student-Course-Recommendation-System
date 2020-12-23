



const bcrypt = require('bcrypt')
const TestRouter = require('express').Router()

const User = require('../models/user')
const Subjects = require('../models/subjects')
const UserSelections = require('../models/user_selections')
const TeacherSubjects = require('../models/teacher_subjects')

const jwt = require('jsonwebtoken')
const fs = require('fs')
const fetch = require("node-fetch");



TestRouter.get('/', (req, res) => res.send ('hello Authentication project home'))


TestRouter.get('/readme' , (req, res) => { 
	res.json({"message":"Hello World"})

})


// create new subject witha course code and course title 

TestRouter.post('/subjectscreate' , async (req, res) => { 

   const body  = req.body
   
	const title           =    body["title"]

	const students_count  =    body["students_count"]
	const teachers_count  =    body["teachers_count"]
	
	const subject_exist   =    await Subjects.findOne({ subject_code: body["subject_code"]})
	
	if(!subject_exist){
						
							try {
									
										const subject_code    =    body["subject_code"]
									   
									   const subjects        =  new Subjects ({
									   
									   		title,
									   		subject_code,
									   		students_count,
									   		teachers_count,
									   
									   
									   })
											
							         const savedSubjects = await subjects.save()
							         var msg = savedSubjects
								} catch (exception) {
								
									  		msg = exception
									  		console.log(msg)
										 	next(msg)
								  }
				  
	}else if(subject_exist ){ 
	
							msg = "Subject already exists";
							console.log(msg)
						next( new Error("Subject Exists") );
			 }

	
	
	



	res.json({"message": msg })

})



TestRouter.post('/userselections' , async (req, res) => { 

	
						
							try {
									    
									
									   
									   const userSelections        =  new UserSelections (req.body)
											
							         const savedUserSelections = await userSelections.save()
							         var msg = savedUserSelections
								} catch (exception) {
								
									  		msg = exception
									  		console.log(msg)
										 	next(msg)
								  }
				  
	


	res.json({"message":msg })

})


// test teacher subjects

TestRouter.post('/teachersubjects' , async (req, res) => { 

	
						
							try {
									    
									
									   
									   const teacherSubjects        =  new TeacherSubjects (req.body)
											
							         const savedTeacherSubjects = await teacherSubjects.save()
							         var msg = savedTeacherSubjects
								} catch (exception) {
								
									  		msg = exception
									  		console.log(msg)
										 	next(msg)
								  }
				  
	


	res.json({"message":msg })

})


async function getdatafrompython (userdata){
			  let url=`https://mest-api-python-project-done.herokuapp.com/postdatajson`
	  
	   try{
				 const config = {
						  method: 'POST',
						  headers: {
								'Accept': 'application/json',
								'Content-Type': 'application/json',
						  },
						  body: JSON.stringify(userdata)
					 }
					 
					 const response = await fetch(url, config)
					 const msgjson = await response.json()
					 
					 
					 if (response.ok) {
						  
						 
					  
						  let suggested_courses = sortAndFilter(msgjson);
						  
					  
						  return (suggested_courses)
						  
					  } 
		   }catch(error){
			console.log(error)
		     //
	      }
	  
     return false 
}



// check if user already exists before sending  to python that is after signing up 
// also check if the suggested courses has not been generated 

TestRouter.post('/posttopythonapi' , async (req, res) => { 
 
   var body = req.body
   var msg = ""
try {

	  const userfound = await User.findById(body["id"]);
	  const subjects_generated = await UserSelections.findOne({userId:body["id"]})
	   
	  const isValidUser = userfound ? true : false ;
	  	 
	  
	  if (isValidUser && !subjects_generated ){
	  			
				  var userdata =Index(userfound.gender,userfound.race,userfound.edulevel,userfound.accountType)
				  let suggested_subject_codes = await getdatafrompython(userdata)
				  
			  	  if  (suggested_subject_codes){
			  	  	   
			  	  	   
			  	  	   const userSelections        =  new UserSelections ({
			  	  	   userId :userfound._id ,
			  	  	   suggested_subject_codes
			  	  	   
			  	  	   
			  	  	   })
						console.log(suggested_subject_codes)							
						const savedUserSelections = await userSelections.save()
						var msg = savedUserSelections
			  	     
			  	  }
			 }else if(isValidUser && subjects_generated){ msg = "subjects already generated for user" }


			}catch(exception) {						
					  		msg = exception
					  		console.log(msg)
						 	
										}

res.json({"message":msg })

})



// add or remove  subject code to added_subjects_codes  list for userid

TestRouter.post('/modifysubjectselection' , async (req, res) => { 
	 
	 const body = req.body
	 const filter = { userId : body["id"]  };
	 
	 const update = {  $set: { added_subjects_code: body["added_subjects_code"] }  } ;
	
	var msg = ""
	
	try {
	
			let update_selections = await UserSelections.findOneAndUpdate(filter, update, {new: true});
			msg = update_selections
			// my_update.name; // 'Jean-Luc Picard'
			// my_update.age; // 59
			
		}catch(exception) {						
		  		msg = exception
		  		console.log(msg)
			 	
							}
	
	
	res.json({ "Message " : msg  })



})




// authentication is done 
TestRouter.get('/secret', isAuthorized,  (req,res) => {


		// rest of commands or functions come here 
		
		res.json({"message": "Super Secret Message "});
})




TestRouter.get('/jwt' , (req,res) => {
	let privateKey = fs.readFileSync('./private.pem' , 'utf-8')
	let token = jwt.sign({"body" : "stuff"}, privateKey, {algorithm:'HS256'})
	res.send(token);

})


//Authorization function going to be used in authentication path 

function isAuthorized(req, res, next) {
    if (typeof req.headers.authorization !== "undefined") {
        // retrieve the authorization header and parse out the
        // JWT using the split function
        let token = req.headers.authorization.split(" ")[1];
        
        let privateKey = fs.readFileSync('./private.pem', 'utf8');
        // Here we validate that the JSON Web Token is valid and has been 
        // created using the same private pass phrase
        jwt.verify(token, privateKey, { algorithm: "HS256" }, (err, user) => {
            
            // if there has been an error...
            if (err) {  
                // shut them out!
                res.status(500).json({ error: "Not Authorized" });
            }
            // if the JWT is valid, allow them to hit
            // the intended endpoint
            return next();
        });
    } else {
        // No authorization header exists on the incoming
        // request, return not authorized
        res.status(500).json({ error: "Not Authorized" });
    }
}



function Index(gender,race,edulevel,accountype){
	
	
			const _gender = { "female":1, "male":2}
	
			const _races= {"white":2 ,"black":1}
	
			const _edulevel = {"bachelor's degree":4 ,"master's degree":5}
	
			const _accountype = {"free":0, "reduced":0, "standard":1}
	
			
	
			const finalArray = []
			
			
			finalArray.push( _gender[ gender] );
			finalArray.push( _races[ race ] );
			finalArray.push( _edulevel[ edulevel] );
			finalArray.push( _accountype[accountype] );
			
			
			console.log("Final Array aftere USER DEMOGRAPHICS")
			console.log(finalArray)
			
			
	
			
			console.log(finalArray)		
			
			return finalArray   
						
						
					     
			
			
		}


function sortAndFilter ( jsondata ) {
		     	
			// filter the returned data from python
			let sorteddatacopy = [...jsondata].sort(); 
			console.log("this is the sorted")
			return sorteddatacopy.filter( (num, index) => num !== sorteddatacopy[index-1] );
	         
	         }







module.exports = TestRouter
