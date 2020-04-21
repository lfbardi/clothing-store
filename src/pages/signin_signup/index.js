import React from 'react';
import './styles.scss';

import SignIn from '../../components/signin';
import SignUp from '../../components/signup'

const SignInSignUpPage = () => (
    <div className="sign-in-and-sign-up">
        <SignIn />
        <SignUp />
    </div>
);

export default SignInSignUpPage;