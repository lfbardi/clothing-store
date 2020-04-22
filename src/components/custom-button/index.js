import React from 'react';

import './styles.scss';

const CustomButton = ({ children, isGoogleSignIn, ...props }) => (
    <button type="button" className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} { ...props }>
        { children }
    </button>
);

export default CustomButton;