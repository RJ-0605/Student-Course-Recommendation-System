

import React, { useContext, useState } from 'react';
import img1 from '../images/annie-student.jpg';
import img2 from '../images/kyle-student.jpg';
import img3 from '../images/k-teacher.jpg';

import ToggleTheme from './ToggleTheme';
import { Theme } from './ThemeProvider';


// images will be here 

export default function Carousel() {

	const currentTheme = useContext(Theme)[0];

  return (
  
  	<div className= {` container-${currentTheme}  bg-${currentTheme} `} >
  
    <div className={` bg-${currentTheme}    mx-auto  `} >
     	
    <div className='  mx-auto my-3' >
    
    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block img-fluid w-100" src={img1} alt="First slide" />
    </div>
    <div className="carousel-item">
      <img className="d-block img-fluid w-100" src={img2} alt="Second slide" />
    </div>
    <div className="carousel-item">
      <img className="d-block img-fluid w-100" src={img3} alt="Third slide" />
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>

</div>

   <br />
   <br/>
</div>

</div>
  );
}
