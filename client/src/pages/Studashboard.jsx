

import React, { useState,useEffect } from 'react';

import axios from 'axios';

import Navbar from '../component/Navbar';


import Container from '../component/Container';
import Footer from '../component/Footer';
import ArticleCard from '../component/ArticleCard';


import chem from '../images/chem.jpg';
import math from '../images/math.jpg';
import biology from '../images/biolog.jpg';




export default function Studashboard({isLoggedIn, setIsLoggedIn , username,jwttoken,userId}) {
  
	const [list, setList ] = useState([]);
	const [isEditMode, setIsEditMode ] = useState(false);
	const [state, setState ] = useState(false);
	const [totalnum, setTotalnum ] = useState([])
	
	console.log( "Username is here " , username )
	console.log( "Userid from User Model is here " , userId )
	console.log( "JWTToken is here " , jwttoken )
	// console.log( "checkstring is here " , props.checkstring )
	
	// we have to axios.post here to get the information with the userId to get the appropriate information and display first 
	
	
	const getslist = () => {
		axios.post('http://localhost:5000/studentphase/returnsubjectsdetailsfor-userId', {userId})
		.then(function (response) {
			
			console.log(response.data)
			// this is is the set of appended data from the list 
			setList(response.data.list)
			console.log(list)
			
		}).catch(function (error) {
			console.log(error);
		})
	}

	

	

	const postData = () => {
	
		let finalsub = { list , totalnum }
		axios.post(`http://localhost:5000/api/postfromstudashboard`, { finalsub })
    .then(res => {
      console.log(res);
      console.log(res.data);
    })

	}


	useEffect(() => {
		setTimeout(function () {
			getslist()
		}, 2000)
	}, []);


  return (
	<>
		<Navbar isLoggedIn ={isLoggedIn} setIsLoggedIn = {setIsLoggedIn} />
		<Container>
				<div className="container mx-auto my-5">
					<h1 className="  ml-5 ">  Students Portal</h1>
					
				</div>
		 
				<div className="container-fluid h-100 w-100" style={{ maxWidth: "800px", margin: "auto" }} > 
		 
					<div className="card-deck">
						
						{/* can we use this to map accross an array */}
						
						
						{
							list.map( (course, index) => {
								return ( 

									<CardDisplay 
										key={course.subject_code}
										id={course.subject_code}
										index={index}
										rating = "4.5"
										people={course.students_count}  
										subject={course.title} 
									/> 
								)
							})
						}

					</div>
					
				</div>

		</Container>
		<Footer />
	</>
  )
}


//index being passed to them with on Add and on remove 

function CardDisplay ({ id, index, people, subject, rating }) {
	
	

	return (
		<div className="card">

			<img className="card-img-top" src={chem} alt="Card image cap"/>
			<div className="card-body">
				<h5 className="card-title"> { subject } </h5>
				<h3 className="card-title">{ rating }~<small className="text-muted">ratings</small></h3>

				
				<p className="card-text">
					<small className="text-muted">{ people }k people  registered for this course</small>
				</p>

				

			</div> 		
		</div>  
	)
}

/*


*/








