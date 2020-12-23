
const mongoose = require('mongoose')

const uniqueValidator = require('mongoose-unique-validator')


const subjectsSchema = new mongoose.Schema({

  
  title: {
    type: String,
    unique: true ,  
     },
  subject_code: {
    type: Number,
    unique: true ,  
     },
  students_count: {
    type: Number,
     },
  teachers_count: {
    type: Number, 
     }
  	 
})


subjectsSchema.plugin(uniqueValidator);



const Subjects = mongoose.model('Subjects', subjectsSchema)

module.exports = Subjects
