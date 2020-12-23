import React , { useEffect } from 'react';
import Navbar from '../component/Navbar';

import axios from 'axios';

import Carousel from '../component/Carousel';
import Card from '../component/Card';
import Container from '../component/Container';
import Footer from '../component/Footer';
import ArticleCard from '../component/ArticleCard';
import Hero from '../component/Hero';
import { getAllPosts } from '../controllers/post_controller';

import { Link } from 'react-router-dom/cjs/react-router-dom.min';



export default function Home({isLoggedIn, setIsLoggedIn , username,jwttoken,userId}) {
  
  let left = false;
  
  let id = userId
  const generatestudentcourses = () => {
  
  		if (isLoggedIn){
  		
					axios.post(`/posttopythonapi`, { id })
					.then(function (response) {
						
						console.log(response.data)
						
						// this shows that  python has  generated the courses we can now head to the dashboard 
						
						console.log(response.data.msg)
						
						
					}).catch(function (error) {
						console.log(error);
					})
			}		
		
	}
  
  
	useEffect(() => {
		setTimeout(function () {
		
		   
			generatestudentcourses()
		}, 2000)
	}, []);  
  
  
  

  return (
    <>
      <Navbar isLoggedIn ={isLoggedIn} setIsLoggedIn = {setIsLoggedIn} />
      
      <Carousel />
      <Hero />
      
      
      
      <Container>
      
       <Card />
        {
          getAllPosts().map((post) => {
            left = !left;
            return <ArticleCard left={left} post={post} />
          })
        }
      </Container>
      <Footer />
    </>
  )
}
