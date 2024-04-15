import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { BiMenu } from "react-icons/bi";
import { Link } from "react-router-dom";

const NavDropdown = () => {
  return (
    <Dropdown>
      <Dropdown.Toggle
        variant="success"
        id="dropdown-basic"
        style={{ background: "#38b6ff", border: "1px solid #38b6ff" }}
      >
        <BiMenu />
      </Dropdown.Toggle>

      <Dropdown.Menu style={{ border: "none", width: "200px" }}>
        <Dropdown.Item>
          <Link to="/" className="linkStyle">
            Home
          </Link>
        </Dropdown.Item>
        <Dropdown.Item>
          <Link to="/search" className="linkStyle">
            Search
          </Link>
        </Dropdown.Item>
        <Dropdown.Item>
          <Link to="/search?purpose=for-sale" className="linkStyle">
            Buy Property
          </Link>
        </Dropdown.Item>
        <Dropdown.Item>
          <Link to="/search?purpose=for-rent" className="linkStyle">
            Rent Property
          </Link>
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default NavDropdown;
