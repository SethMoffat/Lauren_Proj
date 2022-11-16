import React from 'react'
import { Link } from "react-router-dom";

function Art() {
  return (
    <div>
        <body>
    <h4>Pick a career that you find to be intersting to you!</h4>

    <Link to="/artist">Artist</Link>
    <Link to="/musician">Musician</Link>
    <Link to="/photographer">Photographer</Link>
    
</body>
    </div>
  )
}

export default Art