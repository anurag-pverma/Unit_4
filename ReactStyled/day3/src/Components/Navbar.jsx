import React from 'react'

import { Link , NavLink} from 'react-router-dom'



export default function Navbar() {
  return (
    <div
    >

    <div style={{color: "red",
    margin:"auto",
    alignItems:"center",
    display:"flex",
    backgroundColor:"orange",
    height: "60px",
    width: "100%",
    fontSize:"20px",
    justifyContent:"space-between",
    textAlign:"start",
    listStyle:"none",
    textDecoration:"none"
    }}> 
   
   
    
    <li> <Link to="/">Navbar</Link></li>
    <li> <NavLink to="/Home" >Home</NavLink></li>
    {/* css apply karne ke liye navlink ka use karte hai  */}
    <li> <NavLink to="/About">About</NavLink></li>
    <li> <NavLink to="/Contact">Contact</NavLink></li>
    <li> <NavLink to="/LogIn:category:id">LogIn</NavLink></li>
    <li> <NavLink to="/Post:Category">Post</NavLink></li>
    <div>This is  sunday</div>
   
    
    </div>

    </div>
  )
}
