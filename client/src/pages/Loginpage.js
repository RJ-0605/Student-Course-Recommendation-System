import React, { useState } from 'react';
import axios from 'axios';
import Container from '../component/Container';
import Nav from '../component/Navbar';
import Footer from '../component/Footer';
import  { login } from '../controllers/user_controller';
import { useHistory } from 'react-router-dom';

export default function Login({isLoggedIn, setIsLoggedIn,username,userId,jwttoken,setUsername,setUserId,setJwtToken}) {

//  const [username, setUsername] = useState("");

  const [password, setPassword] = useState("");
  const history = useHistory();

  function handleLogin(e) {
    e.preventDefault(); 
    
      // in the future i will pass the set JWT here and set it after success ful post from backend 
      
          const user = {
    
				
			
			username     : username   ,
		      
			password     :  password      		
        
    
          
    };
      
      axios.post(`/login`, { user })
      .then(res => {
        console.log(res);
        console.log(res.data);
        
        
             setIsLoggedIn (true)
        		 setUsername(res.data.username)
             setUserId(res.data.userId)
             setJwtToken(res.data.token)
             history.goBack()
              
      }).catch(function (error) {
			console.log(error);
			
		})
	
      
     // setJwtToken("sdfasfasrawr8952358935iottemtafam")
      
    
  }

  return(
    <>
      <Nav isLoggedIn ={isLoggedIn} setIsLoggedIn = {setIsLoggedIn} />
      <Container style={{height:"auto"}}>
        <form className="my-5 py-5" style={{ maxWidth: "600px", margin: "auto" }}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" className="form-control" aria-describedby="emailHelp" value={username} onChange={(e) => setUsername(e.target.value)} />
            <small className="form-text text-muted">Only admins can sign in.</small>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button className="btn btn-primary" onClick={ handleLogin }>Login</button>
        </form>
      </Container>
      <Footer />
    </>
  )

}
