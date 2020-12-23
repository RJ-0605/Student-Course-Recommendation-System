




import React, { useState,useEffect } from 'react';

import axios from 'axios';
import Navbar from '../component/Navbar';

import Carousel from '../component/Carousel';
import Container from '../component/Container';
import Footer from '../component/Footer';
import ArticleCard from '../component/ArticleCard';
import Hero from '../component/Hero';

import chem from '../images/chem.jpg';
import math from '../images/math.jpg';
import biology from '../images/biolog.jpg';

import { useHistory } from 'react-router-dom';


export default function SignUp() {
  
  
  
  
  const history = useHistory();
  //start of linked code from simple fullstack 
  
  
  const [firstname ,setFirstname] = useState('')
  const [lastname ,setLastname] = useState('')
  const [email ,setEmail] = useState('')
  const [username ,setUsername] = useState('')
  const [password ,setPassword] = useState('')
  const [age ,setAge] = useState('')
  const [gender ,setGender] = useState('')
  const [race ,setRace] = useState('')
  const [edulevel ,setEdulevel] = useState('')
  const [accountType ,setAccounttype] = useState('')
  const [teacher ,setTeacher] = useState('')
  const [coursethree ,setCoursethree] = useState('')
  const [province ,setProvince] = useState('')
  const [zip ,setZip] = useState('')

  

  const [index ,setIndex] = useState(0)
  const [genfunc, setGenfunc] =useState(null)

const options = [
  {
    label: "Accra",
    value: "accra",
  },
  {
    label: "Washington",
    value: "washington",
  },
  {
    label: "walewale",
    value: "walewale",
  },
  {
    label: "Wa",
    value: "Wa",
  },
];



   const handlefirstChange = event => {
    setFirstname(event.target.value);
  }
  
  
  const handlelastChange = event => {
    setLastname(event.target.value);
  }

	const handleEmailChange = event => {
    setEmail(event.target.value);
  }
  
  const handlePasswordChange = event => {
    setPassword(event.target.value);
  }
  
  const handleGenderChange = event => {
    setGender(event.target.value);
    
  }
  const handleAgeChange = event => {
    setAge(event.target.value);
    
  }
  
  const handleRaceChange = event => {
    setRace(event.target.value);
  }
  
  const handleEdulevelChange = event => {
    setEdulevel(event.target.value);
  }
  
  const handleAccountTypeChange = event => {
    setAccounttype(event.target.value);
  }
  
  const handleTeachChange = event => {
    setTeacher(event.target.value);
  }
  
  
  const handleUsernameChange = event => {
    setUsername(event.target.value);
  }
  
 
  
   //  sort out this problem why doesn the value get assigned 
   //  immediately but only after the function has finnished 
   
   function  handleProvinceChange(event){
    
   
    setProvince( event.target.value );
    console.log(province)
    console.log("Province Selected!!");
    
   
      }
  
  
  
  const handleZipChange = event => {
    setZip(event.target.value);
  }
  
  
  
  
	
      
    
    
    
    		 function convertforpython(){
    
				
					
				    
    				if (gender === "female"){ 
    				
    				
    				
    				setIndex(1); 
    				
    				
    				} else if(gender === "male"){
    				
    				setIndex(2); 
    				
    				}
  
 				
    
    		}
    
    	
    
    
      

 const handleSubmit = event => {
 
    event.preventDefault();

    // only json can be passed so you have to pass the json as a params to the json 
     
     
  
     console.log( firstname )
    
    const user = {
    
				
			email        : email,
		   firstname    : firstname ,
		   lastname     : lastname ,
			gender       : gender,
			race         : race ,
			edulevel     : edulevel, 
			accountType  : accountType ,
			province     : province ,
			zip          : zip  ,
			isTeacher    : teacher    ,
			username     : username   ,
			age          :  age  ,       
			password     :  password      		
    
    
    
    
          
    };
    
     
     
     const final_array= {
     
     
     
     }
     
     
    
    
    //converted arrays will be here 
    
    
    axios.post(`http://localhost:5000/signup`, { user ,final_array })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
    
    history.goBack()
    
    }
    


// end of fullstack 










  return (
    <>
      <Navbar />
    
      
     
      <Container>
        
        <form onSubmit={handleSubmit}>
        
  <div className="form-row">
    <div className="form-group col-md-6">
    	<label for="firstname">First Name</label>    	
      <input type="text" className="form-control" id="firstname" placeholder="firstname" name={firstname}  value={firstname}  onChange={handlefirstChange} />
      
    </div>
    <div className="form-group col-md-6">
    	<label for="lastname">Last Name</label>
      <input type="text" className="form-control" id="lastname" placeholder="lastname"  name={lastname}   value= {lastname}  onChange={handlelastChange} />
    </div>
  </div>      
       
       
       
  <div className="form-row">
  
  <div className="form-group col-md-4">
      <label for="usernm">Username</label>
      <input type="text" className="form-control" id="usernm" placeholder="Username" name={username}   value= {username}  onChange={handleUsernameChange}/>
    </div>
  
    <div className="form-group col-md-4">
      <label for="email">Email</label>
      <input type="email" className="form-control" id="email" placeholder="Email" name={email}   value= {email}  onChange={handleEmailChange}/>
    </div>
    <div classname="form-group col-md-4">
      <label for="password">Password</label>
      <input type="password" className="form-control" id="password" placeholder="Password" name={password}   value= {password}  onChange={handlePasswordChange} />
    </div>
  </div>  
  
  <div className="form-row">
  
	<div className="form-group col-md-4">
			<label for="age">Age</label>
			<input type="text" className="form-control" id="age" placeholder="age " name={age}   value= {age}  onChange={handleAgeChange} />
		 </div>
    <div className="form-group col-md-4">
      <label for="gender">Gender</label>
      <input type="text" className="form-control" id="gender" placeholder="male or female " name={gender}   value= {gender}  onChange={handleGenderChange} />
      
    </div>
    <div className="form-group col-md-4">
      <label for="race">Race</label>
      <input type="text" className="form-control" id="race" placeholder="white or black " name={race}   value= {race}  onChange={handleRaceChange} />
    </div>
     
  </div>
  
  
  <div className="form-row">
  
	  <div className="form-group col-md-4">
		   <label for="edulevel">Level of Education</label>
		   <input type="text" className="form-control" id="edulevel" placeholder="bachelor's degree or master's degree " name={edulevel}   value= {edulevel}  onChange={handleEdulevelChange} />
		 </div>
  
  
    <div className="form-group col-md-4">
      <label for="Account Type ">Account Type</label>
      <input type="text" className="form-control" id="accountType" placeholder="free or paid" name={accountType}   value= {accountType}  onChange={handleAccountTypeChange} />
    </div>
    <div className="form-group col-md-4">
      <label for="teach"> Would you like to registered as a teacher as well  ?</label>
      <input type="text" className="form-control" id="teach" placeholder="Yes or No " name={teacher}   value= {teacher}  onChange={handleTeachChange} />
    </div>
     
  </div>
  
  <div class="form-row">
  
  {/*  <div className="form-group col-md-6">
      <label for="coursetwo">Course two </label>
      <input type="text" className="form-control" id="coursetwo" placeholder="Second Choice" name={coursetwo}   value= {coursetwo}  onChange={handleCoursetwoChange} />
    </div>
    
    <div className="form-group col-md-6">
      <label for="coursethree">Course three</label>
      <input type="text" className="form-control" id="coursethree" placeholder="Third Choice" name={coursethree}   value= {coursethree}  onChange={handleCoursethreeChange} />
    </div> */}
     
  </div>
  
 

    
 <div className="form-row">
     
    <div className="form-group col-md-4">
    
      <label for="inputState">State</label>
      
    
          <select  id="inputState"  className="form-control" value={province} onChange={handleProvinceChange}>
            {options.map((option) => (
              <option value={option.value}>{option.label}</option>
            ))}
          </select>
           
    </div>
    
    
    <div className="form-group col-md-2">
      <label for="zip">Zip</label>
      <input type="text" className="form-control" id="zip" name={zip}   value= {zip}  onChange={handleZipChange} />
   
  </div>
  
 </div>
  
  
  <div className="form-group">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" id="gridCheck"/>
      <label className="form-check-label" for="gridCheck">
        Check me out
      </label>
    </div>
  </div> 
  
  <button type="submit" className ="btn btn-primary my-4" >Sign Up</button>
</form>

        
        
        
      </Container>
      <Footer />
    </>
  )
}
