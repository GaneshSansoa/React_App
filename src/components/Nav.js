import React from "react";
import { Link, NavLink } from "react-router-dom";

class Nav extends React.Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
          <NavLink to="/" className="navbar-brand">
            NavBar
          </NavLink>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li className="nav-item">
                <NavLink to="/about" className="nav-link">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/shop" className="nav-link">
                  Shop
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/counters" className="nav-link">
                  Counters
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/movies" className="nav-link">
                  Vivdy Project
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/customers" className="nav-link">
                  Customers
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/rentals" className="nav-link">
                  Rentals
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/login" className="nav-link">
                  Login
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/register" className="nav-link">
                  Register
                </NavLink>
              </li>
              <li className="nav-item">
                <span class="badge badge-pills badge-secondary">
                  {this.props.getCounts}
                </span>
              </li>
            </ul>

            <form class="form-inline my-2 my-lg-0">
              <input
                class="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                class="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </nav>
      </div>
    );
  }
}
export default Nav;
