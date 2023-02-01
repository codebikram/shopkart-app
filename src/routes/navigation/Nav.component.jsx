import { Fragment, useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import './nav.styles.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { UserContext } from '../../contexts/user.context';
import { signOutClick } from '../../utils/firebase/firebase.utils';
import CartIcon from '../../components/cart-icon/CartIcon.component';
import CartDropdown from '../../components/cart-dropdown/CartDropdown.component';
import { CartContext } from '../../contexts/cart.context';

const Nav = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);
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

          {currentUser ? (
            <span className="nav-link" onClick={signOutClick}>
              sign out
            </span>
          ) : (
            <li>
              <Link className="nav-link" to="auth">
                sign in
              </Link>
            </li>
          )}
          <li>
            <CartIcon />
          </li>
        </ul>
        {isCartOpen && <CartDropdown />}
      </nav>

      <Outlet />
    </Fragment>
  );
};

export default Nav;
