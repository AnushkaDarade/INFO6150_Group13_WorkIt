import React from 'react';
import {Link} from 'react-router-dom';

function Navbar() {
    return(
        <nav className="navbar navbar-expand navbar-dark bg-dark">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navMainMenu" aria-controls="navMainMenu" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div id="navMainMenu" className="navbar-collapse collapse">
                <div className="navbar-nav ml-auto">
                    <Link to='/' className="nav-item nav-link active">Login</Link>
                    <Link to='/register' className="nav-item nav-link active">Register</Link>
                    <Link to='/about' className="nav-item nav-link active">About</Link>
                    <Link to='/home' className="nav-item nav-link active">Home</Link>
                    <Link to='/contact' className="nav-item nav-link active">Contact</Link>
                    <Link to='/jobs' className="nav-item nav-link active">Jobs</Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
