import React from 'react';
import { Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Nav>
      <NavItem>
        <Link to="/">SHARETRADE<span>.COM</span></Link>
      </NavItem>
    </Nav>
  )
}

export default Header;