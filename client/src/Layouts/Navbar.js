import React from 'react'
import { NavLink } from 'react-router-dom'
import AddPost from '../Pages/Freelancer/AddPost'


function Navbar() {

  const id = JSON.parse(localStorage.getItem("user_id"))

  if(localStorage.length > 0){
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light pt-3 pb-3 shadow">
      <div className="container">
        <a className="navbar-brand" href="#">FREELANCI.TN</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">Home</NavLink>
            </li>
  
            <li className="nav-item">
              <NavLink className="nav-link" to="/projects">Projects</NavLink>
            </li>
  
            <li className="nav-item">
              <NavLink className="nav-link" to={`/profile/${id}`}>Profile</NavLink>
            </li>

            {
              localStorage.getItem("role") == "dev" ?
              <li className="nav-item">
              <NavLink className="nav-link" to="/messages">Messages</NavLink>
            </li>
            : ""
            }
  
            
            <li className="nav-item">
              <NavLink className="nav-link" to="/logout">Logout</NavLink>
            </li>
  
  
    
          </ul>
        </div>
      </div>
    </nav>
    )  
} else {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light pt-3 pb-3 shadow">
    <div className="container">
      <a className="navbar-brand" href="#">FREELANCI.TN</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" to="/">Home</NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/projects">Projects</NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/inscription">S'inscrire</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/connexion">Se connecter</NavLink>
          </li>


  
        </ul>
      </div>
    </div>
  </nav>
  )
}
 
  
}

export default Navbar