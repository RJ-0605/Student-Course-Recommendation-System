






import React, { useState,useEffect } from 'react';

import axios from 'axios';

import Navbar from '../component/Navbar';


import Container from '../component/Container';
import Footer from '../component/Footer';
import ArticleCard from '../component/ArticleCard';


import chem from '../images/chem.jpg';
import math from '../images/math.jpg';
import biology from '../images/biolog.jpg';




export default function Teachdashboard() {
  
	const [list, setList ] = useState([]);
	const [isEditMode, setIsEditMode ] = useState(false);
	const [state, setState ] = useState(false);
	const [totalteach, setTotalteach ] = useState([])
	
	
	const getslist = () => {
		axios.get('http://localhost:5000/api/getListteach', {})
		.then(function (response) {
		
			console.log(response.data)
			console.log(response.data.data)
			console.log(response.data.numberteach)
			console.log(response.data.numberteach[0].English)
			console.log(response.data.numberteach[0].["English"])
			
			var subject = "English"
			console.log(response.data.numberteach[0].[subject])
			
			
			setTotalteach(response.data.numberteach[0])
			setList(response.data.data)
			
		}).catch(function (error) {
			console.log(error);
		})
	}

	const handleToggleMode = () => {
		if(isEditMode) {
			postData()
		}
		setIsEditMode(!isEditMode)
	}

	const addCourse = (courseIndex) => {
		let tempList = list;
		console.log(courseIndex)
		
		
		
		
		
		
		console.log(tempList[courseIndex].subject)
		tempList[courseIndex].status = "added";
		
		for (let x in totalteach ){
						
						if (x === tempList[courseIndex].subject ){
								totalteach[x]++	
								}
					}
					
		console.log(totalteach)			
		setList(tempList);
		setState(!state);
	}

// buttons always return the index given to them by default since it was passed to the m or enabled 
	const removeCourse = (courseIndex) => {
		let tempList = list;
		tempList[courseIndex].status = "not added";
		setList(tempList);
		
		for (let y in totalteach ){
						
						if (y === tempList[courseIndex].subject ){
								totalteach[y]-- 
								}
					}
					
		console.log(totalteach)
		
		setState(!state)
	}

	

	const postData = () => {
	
		let finalsub = { list , totalteach }
		axios.post(`http://localhost:5000/api/postfromteachdashboard`, { finalsub })
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
		<Navbar  />
		<Container>
				<div className="container mx-auto my-5">
					<h1 className="  ml-5 ">  Teachers Portal</h1>
					{ isEditMode &&
						<button className="btn btn-success" onClick={handleToggleMode} >
							Save Changes
						</button>
					}
					{ !isEditMode &&
						<button className="btn btn-primary" onClick={handleToggleMode} >
							Edit Courses
						</button>
					}
				</div>
		 
				<div className="container-fluid h-100 w-100" style={{ maxWidth: "800px", margin: "auto" }} > 
		 
					<div className="card-deck">
						
						{
							list.map( (course, index) => {
								return ( 

									<CardDisplay 
										key={course.id}
										id={course.id}
										index={index}
										people={course.people} 
										rating={course.rating} 
										status={course.status} 
										subject={course.subject} 
										onAdd={addCourse} 
										onRemove={removeCourse}
										isEditMode={isEditMode}
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

function CardDisplay ({ id, index, people, rating, status, subject, onAdd, onRemove, isEditMode }) {
	
	const removeCourse = () => {
		onRemove(index);
	}

	const addCourse = () => {
		onAdd(index);
	}

	return (
		<div className="card">

			<img className="card-img-top" src={chem} alt="Card image cap"/>
			<div className="card-body">
				<h5 className="card-title"> { subject } </h5>
				<h3 className="card-title">{ rating }~<small className="text-muted">ratings</small></h3>

				<div className="btn-group-toggle  w-50 mx-auto " data-toggle="buttons">
					<label className="btn btn-secondary active">
						<input type="checkbox" defaultChecked autoComplete="off"/> {status}
					</label>
				</div> 
				<p className="card-text">
					<small className="text-muted">{ people }k people  registered for this course</small>
				</p>

				{ isEditMode && status.toLowerCase() === "not added" &&
					<button className="btn btn-success" onClick={addCourse} >
						Add
					</button>
				}
				{ isEditMode && status.toLowerCase() === "added" &&
					<button className="btn btn-primary" onClick={removeCourse} >
						Remove
					</button>
				}

			</div> 		
		</div>  
	)
}

/*


*/








