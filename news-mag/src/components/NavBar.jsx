import React from 'react'
import '../App.css'

const NavBar = ({setCategory}) => {
  return (

<nav class="navbar">

    <div class="logo">News<span>Today</span></div>

    <input type="checkbox" id="menu-toggle"/>
    <label for="menu-toggle" class="hamburger">&#9776;</label>

    <ul class="nav-links">
        <li>
            <div className="nav-link" href="#" onClick={()=>setCategory("general")}>General</div>
        </li>
        <li>
            <div className="nav-link" href="#" onClick={()=>setCategory("science")}>Science</div>
        </li>
        <li>
            <div className="nav-link" href="#" onClick={()=>setCategory("technology")}>Technology</div>
        </li>
        <li>
            <div className="nav-link" href="#" onClick={()=>setCategory("business")}>Business</div>
        </li>
        <li>
            <div className="nav-link" href="#" onClick={()=>setCategory("entertainment")}>Entertainment</div>
        </li>
        <li>
            <div className="nav-link" href="#" onClick={()=>setCategory("sports")}>Sports</div>
        </li>
    </ul>
</nav>
  )
}

export default NavBar


    //  <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
    //     <div className="container-fluid">
    //         <a className="navbar-brand" href="#"><span className='badge bg-light text-dark fs-4'>News Mag</span></a>
    //         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    //             <span className="navbar-toggler-icon"></span>
    //         </button>
    //     <div className="collapse navbar-collapse" id="navbarSupportedContent">
    //     <ul className="navbar-nav me-auto mb-2 mb-lg-0">

    //         <li className="nav-item">
    //             <div className="nav-link" href="#" onClick={()=>setCategory("technology")}>Technology</div>
    //         </li>

    //         <li className="nav-item">
    //             <div className="nav-link" href="#" onClick={()=>setCategory("business")}>Business</div>
    //         </li>

    //          <li className="nav-item">
    //             <div className="nav-link" href="#" onClick={()=>setCategory("science")}>Science</div>
    //         </li>
            
    //         <li className="nav-item">
    //             <div className="nav-link" href="#" onClick={()=>setCategory("sports")}>Sports</div>
    //         </li>

    //         <li className="nav-item">
    //             <div className="nav-link" href="#" onClick={()=>setCategory("health")}>Health</div>
    //         </li>

    //   </ul>
    //     </div>
    //     </div>
    // </nav>