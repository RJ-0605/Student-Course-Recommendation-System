




import React from 'react';
import Navbar from './Navbar';


import Container from './Container';


import Hero from './Hero';

import chem from '../images/chem.jpg';
import math from '../images/math.jpg';
import biology from '../images/biolog.jpg';




export default function Card() {
  
  let left = false;

  return (
    <>
     
    
      
     
      <Container>
        
        
				<div className="container mx-auto my-5">
       		 <h1 className="  ml-5 ">  Featured Courses</h1>
        			</div>
        <div className="container-fluid h-100 w-100" style={{ maxWidth: "800px", margin: "auto" }} >
        
        
        <div class="card-deck">
        
  <div className="card">
    <img className="card-img-top" src={chem} alt="Card image cap"/>
		    <div className="card-body">
		      <h5 className="card-title">Chemistry</h5>
			<h3 className="card-title">4.5~<small class="text-muted">ratings</small></h3>
			
			<div className="btn-group-toggle  w-50 mx-auto " data-toggle="buttons">
  	   		   <label className="btn btn-secondary active">
    		              <input type="checkbox" checked autocomplete="off"  /> Visit
  	                  </label>
	              </div>
	              
		      <p className="card-text"><small className="text-muted">3.5k people  registered for this course</small></p>
		    </div>
  </div>
  
  <div className="card">
    <img className="card-img-top" src={math} alt="Card image cap" />
    <div className="card-body">
      <h5 className="card-title">Math</h5>
	<h3 className="card-title">4.0~<small class="text-muted">ratings</small></h3>
	
	<div className="btn-group-toggle  w-50 mx-auto " data-toggle="buttons">
  	   <label className="btn btn-secondary active">
    		<input type="checkbox" checked autocomplete="off"  /> Visit
  	  </label>
	</div>
	
       <p className="card-text"><small className="text-muted">3.5k people  registered for this course</small></p>	
    </div>
  </div>
  
  <div className="card">
    <img className="card-img-top" src={biology} alt="Card image cap" />
    <div className="card-body">
      <h5 className="card-title">Biology</h5>
	<h3 className="card-title">4.2~<small class="text-muted">ratings</small></h3> 
			<div className="btn-group-toggle  w-50 mx-auto " data-toggle="buttons">
  	   		   <label className="btn btn-secondary active">
    		              <input type="checkbox" checked autocomplete="off"  /> Visit
  	                  </label>
	              </div>	
       <p className="card-text"><small className="text-muted">3.5k people  registered for this course</small></p>	
    </div>
  </div>
  
    
  </div>
        
</div>
        
        
      </Container>
     
    </>
  )
}
