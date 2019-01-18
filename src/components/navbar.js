import React from 'react';
import { Link } from 'gatsby';

const pages = {
  0: 'about',
  1: 'projects',
  2: 'skills',
  3: 'resume',
  4: 'contact',
};

const pageList = () => Object.keys(pages).map( 
  key =>
    <li 
      key={ key }
      class='navbar-item'
    >
      <Link 
        to={`/${pages[key]}`}
        class='navbar-link'
      >
        { pages[key] }
      </Link>
    </li> 
);

const Navbar = () => (
  <ul>{ pageList() }</ul>
);

export default Navbar;