import React from 'react';
import './App.css';

import { Switch, Route } from 'react-router-dom';

import { connect } from 'react-redux';

import { setCurrentUser } from './redux/user/actions';

import Header from './components/header';

import HomePage from './pages/homepage';
import ShopPage from './pages/shop';
import SignInSignUpPage from './pages/signin_signup';

import { auth, createUserProfileDocument } from './firebase/firebase_utils';

class App extends React.Component {

  unsubscribeFromAuth = null

  componentDidMount() {

    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapshot => {
          setCurrentUser({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          });
        })
      }
      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInSignUpPage} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});
  

export default connect(null, mapDispatchToProps)(App);
