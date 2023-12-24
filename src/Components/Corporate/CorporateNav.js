import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import "./CorporateNav.css";

import logo from "../../assets/img/logo.png.png";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const CorporateNav = () => {
  return (
    <>
      {/* hjdkfhkflskdj */}

      <nav className=" nav-container-manu navbar navbar-expand-lg navbar-light">
        <img src={logo} style={{ height: 50, width: 150 }} />
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
          <ul className="navbar-nav mr-auto ul-container-manu">
            {/* <li class="nav-item active">
      <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
    </li> */}

            {/* jhfjhg */}

            {/* <NavDropdown
              id="nav-dropdown-dark-example"
              title="Save"
              menuVariant="dark text-light"
              style={{ color: "white" }}
            >
              <NavDropdown.Item href="#action/3.1">
                Hinter Saving Account
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Growth Saving Account
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Growth Plus Saving Account
              </NavDropdown.Item>
            </NavDropdown> */}
           <li className="ml-3"> <a href="corporatesolution">Solutions</a></li>

            {/* <NavDropdown
              id="nav-dropdown-dark-example"
              title="Invest"
              menuVariant="dark text-light"
              style={{ color: "white" }}
            >
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
           <li className="ml-3"> <a href="corporatewhyus">Why Us</a></li>
            {/* <NavDropdown
              id="nav-dropdown-dark-example"
              title="Borrow"
              menuVariant="dark text-light"
              style={{ color: "white" }}
            >
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
            <li className="ml-3"><a>Sustainability</a></li>
            {/* <NavDropdown
              id="nav-dropdown-dark-example"
              title="Pay"
              menuVariant="dark text-light"
              style={{ color: "white" }}
            >
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
            <li className="ml-3"><a>Forms & Guides</a></li>
            {/* jhfjhg */}
          </ul>
          {/* <form class="form-inline my-2 my-lg-0">
   
    <button class="" type="submit">Login</button>
  </form> */}
          <button className="login-button" type="submit">
            Login
          </button>
        </div>
      </nav>

      {/* hjdkfhkflskdj */}
    </>
  );
};

export default CorporateNav;
