import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <div className="container-fluid">
        <Link className="navbar-brand" to="/">HEROESAPP</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink exact activeClassName="active" className="nav-link" to="/marvel">Marvel</NavLink>
              </li>
              <li className="nav-item">
                <NavLink exact activeClassName="active" className="nav-link" to="/dc">DC</NavLink>
              </li>
              <li className="nav-item">
                <NavLink exact activeClassName="active" className="nav-link" to="/search">Search</NavLink>
              </li>
              <li className="nav-item">
                <NavLink exact activeClassName="active" className="nav-link" to="/login">Login</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
}
