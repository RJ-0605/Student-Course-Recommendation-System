

const mongoose = require('mongoose')

const uniqueValidator = require('mongoose-unique-validator')




  


let userSelections = new mongoose.Schema({
 
		userId: {
		   type: mongoose.Schema.Types.ObjectId,
		   ref: "User"
		},
		suggested_subject_codes:[ 
				{
					type: Number ,
					
				}  
   	],
   added_subjects_code: [ {
      type: Number ,
      
   } ]
   
}, { toObject : { virtuals: true } }


)
  	 




userSelections.virtual("suggested_subjects",{
					ref : "Subjects" , localField : "suggested_subject_codes", foreignField : "subject_code"})  

userSelections.virtual("added_subjects",{
					ref : "Subjects" , localField : "added_subjects_codes", foreignField : "subject_code"})
					
					

const UserSelect = mongoose.model('UserSelect', userSelections)

module.exports = UserSelect



