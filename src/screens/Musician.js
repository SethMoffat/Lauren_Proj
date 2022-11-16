import React from 'react'




function Musician() {
    let maxSal = 57257
    let budget = 0
    function handleChange(event){
        budget = event.target.value
        console.log(budget)
    }
    function press(){
        if (budget > (maxSal/10)){
            alert('That is too much money')
        }
        else if (budget < (maxSal/10)){
            alert('That is a good budget')
        }
    }
  return (
    <div>
        
    <h1>Awesome you're a Musician!</h1>
    <p id="job-description">As a Musician you make $57,257 annually.</p>
    <p>Determine what percentage you wish to put towards your trip.</p>
    <img alt='' src="https://wellkeptwallet.com/wp-content/uploads/Recommended-Budget-Percentages-final.png" />
    <p>Calculate how much money you have to take on your trip!</p>
    <input type="number" placeholder='input price' onChange={handleChange}></input>
    <button onClick={press}>Submit</button>

</div>
  )
}

export default Musician