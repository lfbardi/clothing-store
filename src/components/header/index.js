import React from 'react';
import './styles.scss';

import { Link } from "react-router-dom";

import { ReactComponent as Logo } from '../../assets/logo.svg';

import { auth } from '../../firebase/firebase_utils';

import { connect } from 'react-redux';

import { createStructuredSelector } from "reselect";
import { selectCartHidden } from "../../redux/cart/selectors";
import { selectCurrentUser } from "../../redux/user/selectors";

import CartIcon from '../cart-icon';
import CartDropdown from '../cart-dropdown';

const Header = ({ currentUser, hidden }) => (
    <div className="header">
        <Link to="/" className="logo-container">
            <Logo className="logo" />
        </Link>
        <div className="options">
            <Link className="option" to="/shop">SHOP</Link>
            <Link className="option" to="/shop">CONTACT</Link>
            {
                currentUser ?
                <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div> :
                <Link className="option" to="/signin">SIGN IN</Link> 
            }
            <CartIcon />
        </div>
        {
            hidden ? null : <CartDropdown />
        }
    </div>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);