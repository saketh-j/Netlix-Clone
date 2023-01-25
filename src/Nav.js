import React, { useState,useEffect }  from 'react';
import "./Nav.css";

function Nav() {
    const [show , handleShow] = useState(false);

    const transitionNavBar = () => {
       if(window.scrollY > 100){
        handleShow(true);
       }
       else{
        handleShow(false);
       }
}
 useEffect (() => {
     window.addEventListener("scroll", transitionNavBar);
     return() =>window.addEventListener("scroll", transitionNavBar);
 },[]);
     
  return (
    <div className = {show &&'Nav'}>
    <div className='Nav_contents'>
    <img className='Nav_logo' src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" 
     alt="logo" />

     <img  className='Nav_avatar' src="https://i.pinimg.com/736x/c4/88/34/c488340ad56e5454f4576f6c708b63aa.jpg" alt="avatar" />
    </div>
  </div>
  )
}

export default Nav;