import React from 'react';
import './App.css';

import { Switch, Route } from 'react-router-dom';

import Header from './components/header';

import HomePage from './pages/homepage';
import ShopPage from './pages/shop';
import SignInSignUpPage from './pages/signin_signup';

import { auth, createUserProfileDocument } from './firebase/firebase_utils';

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapshot => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          });
        })
      }
      this.setState({ currentUser: userAuth });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  
  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
