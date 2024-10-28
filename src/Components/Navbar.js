import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../redux/slices/userSlice'
import './NavbarStyle.css';


const Navbar = () => {
  //for authantofication 
  const {isAuth} = useSelector(state=> state.user)
  const dispatch = useDispatch()
  return (
    <>
  <div className="container text-center">
  {isAuth ? (
    <div className="link-container">
      <Link to="/home">Home</Link>
      <button onClick={() => dispatch(logout())}>Logout</button>
    </div>
  ) : (
     <div className="link-container">
          <div id="logo"> 
            <img src='L1.png' />
         </div> 
          <Link to="/home">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
          <Link to="/education">Education</Link>
          <Link to="/contact">Contact</Link>
         

      </div>
  )}
</div>


</>
  );
};

export default Navbar
