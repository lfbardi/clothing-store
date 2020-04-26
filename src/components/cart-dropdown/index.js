import React from 'react';
import './styles.scss';

import CustomButtom from '../custom-button';
import CartItem from '../cart-item';

import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";

import { selectCartItems } from '../../redux/cart/selectors';

import { withRouter } from "react-router-dom";

import { toogleCartHidden } from '../../redux/cart/actions';

const CartDropdown = ({ cartItems, history, dispatch }) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {
                cartItems.length ?
                cartItems.map(item => (
                    <CartItem key={item.id} item={item} />
                ))
                : <span className="empty-message">Your cart is empty</span>
            }
        </div>
        <CustomButtom onClick={() => {
            dispatch(toogleCartHidden());
            history.push('/checkout');
        }}>GO TO CHECKOUT</CustomButtom>
    </div>
)

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));