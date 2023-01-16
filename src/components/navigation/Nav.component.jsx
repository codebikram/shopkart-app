import React, { Fragment } from 'react';
import { Link, Outlet } from 'react-router-dom';
import './nav.styles.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg';

const Nav = () => {
  return (
    <Fragment>
      <nav className="navigation">
        <Link className="logo-container" to="/">
          <div>
            <Logo />
          </div>
          <p className="logo-text">Shopkart</p>
        </Link>
        <ul className="nav-links-container">
          <li>
            <Link className="nav-link" to="shop">
              shop
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="contact">
              contact
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </Fragment>
  );
};

export default Nav;
