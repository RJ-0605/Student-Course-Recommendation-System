 import users from '../data/users.json';
 
 let __currentUser = {
   loggedIn: false
 };

 function authUser(username, password) {
  let is_user = false;
  
  users.forEach( user => {
    if(user.username === username && user.password === password) {
      is_user = true;
    }
  })
  
  return is_user;
}

export function getUserLoggedIn() {
  return __currentUser.loggedIn;
}

export function login(username, password) {

  if(authUser(username, password)) {
    __currentUser.loggedIn = true;
    alert("user logged in");
    return true
  } else {
    alert("Username or password is incorrect")
    return false
  }
  
}

export function logout() {
  __currentUser.loggedIn = false;
 }