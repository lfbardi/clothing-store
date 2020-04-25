import React from 'react';
import './styles.scss';

import CustomButtom from '../custom-button';
import CartItem from '../cart-item';

import { connect } from "react-redux";

import { selectCartItems } from '../../redux/cart/selectors';

const CartDropdown = ({ cartItems }) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {
                cartItems.map(item => (
                    <CartItem key={item.id} item={item} />
                ))
            }
        </div>
        <CustomButtom>GO TO CHECKOUT</CustomButtom>
    </div>
)

const mapStateToProps = state => ({
  cartItems: selectCartItems(state)
});

export default connect(mapStateToProps)(CartDropdown);