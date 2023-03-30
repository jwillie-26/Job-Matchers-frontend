// import React from "react";
// import { useState, useEffect } from 'react';
// import SignUp from '../components/user/Signup';
// import Login from '../components/user/Login';
// import Logout from '../components/user/Logout';
// import { NavLink } from 'react-router-dom';


// function Account() {
//     const [user, setUser] = useState(null);
//   useEffect(() => {
//     //auto-login
//     fetch("/me").then((r) => {
//       if (r.ok) {
//         r.json().then((user) => setUser(user));
//       }
//     });
//   }, []);

// if (!user) return <SignUp onLogin={setUser} />;


//   return (
//     <div>
//   <div  id="account" >
//     <select 
       
//         // onChange={(e) => setCategory(e.target.value)}
//         >
//         <option value="none">Account</option>
       
//         <option value=""> 
           
//             <NavLink path="/signup" exact component = {SignUp} setUser = {setUser} >Sign Up</NavLink></option>
//         <option value="">
           
//             <NavLink path="/Login" exact component = {Login} setUser =  {setUser} ></NavLink>Log in</option>
//         <option value="">
           
//             <NavLink path="/logout" exact component= {Logout} setUser ={setUser} ></NavLink>Log out</option>
       
//     </select>
//   </div>
//   </div>
//   )
// }

// export default Account;
