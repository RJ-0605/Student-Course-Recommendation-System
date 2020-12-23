
import React, { useContext }from 'react';

import './NewCssApp.css';
import './weather.css';



export default function Home(props) {

    console.log(props.location.articleiD)
    console.log(props.location.data)



    const theme = useContext();
    console.log(theme.value)
    return (
        <div>
            <h1 className="bigblue"> Weather App </h1>
            <br />
            {/* {props.loggedin === true ?
			   <p>" Hello Welcome {props.email}"</p>

			  :null} */}


        </div>

    );

}

;