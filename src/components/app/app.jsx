import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { 
  HomePage, 
  ShopPage,
  AuthPage,
} from '../../pages';
import Header from '../header';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

class App extends Component {

  state = {
    currentUser: null
  }

  componentDidMount() {
    // const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      console.log({ userAuth })
      if (userAuth) {

        const userRef = await createUserProfileDocument(userAuth);
 
        userRef.onSnapshot(snapShot => {
          console.log({ snapShot: snapShot.data() });
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          })
          // setCurrentUser({
          //   id: snapShot.id,
          //   ...snapShot.data()
          // });
        });
      } else {
        this.setState({
          currentUser: userAuth
        })
      }

      // setCurrentUser(userAuth);
    });
  }
 
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    console.log(this.state);
    return (
      <Router>
        <div className="app">
          <Header currentUser={this.state.currentUser} />
          <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route exact path="/shop" component={ShopPage}/>
            <Route
            exact
              path='/signin'
              render={() =>
                this.props.currentUser ? (
                  <Redirect to='/' />
                ) : (
                  <AuthPage />
                )
              }
            />
            {/* <Route exact path="/signin" component={AuthPage}/> */}
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
