import React, { useContext, useState } from 'react';
import { NavLink,useHistory } from 'react-router-dom';
import ToggleTheme from './ToggleTheme';
import { Theme } from './ThemeProvider';



export default function Navbar({isLoggedIn, setIsLoggedIn}) {

  
	let history = useHistory();
  const currentTheme = useContext(Theme)[0];

  function handleLogout() {
    
    setIsLoggedIn(false)
    history.push('/')
  }

  return (
    <div>
      
    <nav className={`navbar navbar-expand-lg navbar-${currentTheme} bg-${currentTheme} py-4`}>
      <div className="container">
        <a className="navbar-brand" href="/">Noe_IT</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
            
              <NavLink className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink>
            </li>
            
            { !isLoggedIn &&
              <li className="nav-item">
                <NavLink className="nav-link" to="/login">Login</NavLink>
              </li>
            }
            
            { !isLoggedIn &&
              <li className="nav-item">
                <NavLink className="nav-link" to="/signup">Signup</NavLink>
              </li>
            }
            
            { isLoggedIn &&
              <li className="nav-item">
                <NavLink className="nav-link" to="/student-dashboard">Student</NavLink>
              </li>
            } 
            
          {/*  
          
           { isLoggedIn &&
              <li className="nav-item">
                <NavLink className="nav-link" to="/teach-dashboard">Teacher</NavLink>
              </li>
            }  
            
             */}
            
         
            
           { isLoggedIn && 
            <li className="nav-item">
                <span className="nav-link" onClick={handleLogout} >Logout</span>
            </li>
            }
            <li className="nav-item">
              <ToggleTheme />
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </div>
  )
}
