import React from 'react'; 
import { Link } from 'react-router-dom'; 

function DeleteProfile() { 
  return ( 
    <div className="App"> 
      <header className="App-header"> 
        <p>First components</p> 

        <Link to="/">go back</Link> 
      </header> 
    </div> 
  ); 
}
export default DeleteProfile;