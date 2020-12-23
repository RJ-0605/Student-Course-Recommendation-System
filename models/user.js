const mongoose = require('mongoose')

const uniqueValidator = require('mongoose-unique-validator')



const userSchema = new mongoose.Schema({
 


  email: {
    type: String,
    unique: true   
  },
  firstname:String,
  lastname:String,
  gender: String,
  race:String,
  edulevel:String,
  accountType:String,
  province:String,
  zip:String,
  isTeacher:Number,  
  username:  {
    type: String ,
    unique: true   
  },
  age : Number ,
  passwordHash: String,
  
})





 userSchema.plugin(uniqueValidator);

// strip away the mogoose id from the data and work with the rest 
userSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
    delete returnedObject.passwordHash
  }
})

const User = mongoose.model('User', userSchema)

module.exports = User
