import React from 'react'
import { Link } from "react-router-dom";

function Start() {
  return (
    <div>
        <body>
    <h1>Budget A Trip!</h1>
    <p>Congratulations, you have made it through high school and decide to take the next step on your jounrey to further your education! You must decide which direction you want to take moving forward in your life.</p>
    <h2>Choose your major</h2>

    <Link to="art">Arts </Link>
    <p> </p>
    <Link to="science">Science </Link>
    <p> </p>
    <Link to="health">Health </Link>
    <p> </p>
    <Link to="business">Business </Link>
    
    
</body>
</div>
  )
}

export default Start