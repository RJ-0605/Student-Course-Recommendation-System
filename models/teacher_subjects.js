


const mongoose = require('mongoose')






  


let teacherSubjects = new mongoose.Schema({
 
		userId: {
		   type: mongoose.Schema.Types.ObjectId,
		   ref: "User"
		},
		subjects_to_teach:[ 
				{
					type: Number ,
					
				}  
   	]
   
}, { toObject : { virtuals: true } }


)
  	 




teacherSubjects.virtual("subjects_toteach",{
					ref : "Subjects" , localField : "subjects_to_teach", foreignField : "subject_code"})  


					
					

const TeacherSubjects = mongoose.model('TeacherSubjects', teacherSubjects)

module.exports = TeacherSubjects



