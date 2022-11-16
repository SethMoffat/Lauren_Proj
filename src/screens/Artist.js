import React from 'react'

function Artist() {
  return (
    <div>
        
            <h1>Awesome you're an Artist!</h1>
            <p id="job-description">As an Artist you make $60,820 annually.</p>
            <p>Determine what percentage you wish to put towards your trip.</p>
            <img alt="" src="https://wellkeptwallet.com/wp-content/uploads/Recommended-Budget-Percentages-final.png" />
            <p>Calculate how much money you have to take on your trip!</p>
            <input id="budget" type="text" required></input>
            <button id="submit">Submit</button>
        
    </div>
  )
}

export default Artist