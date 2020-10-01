import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { 
  HomePage, 
  ShopPage,
  AuthPage,
  CheckoutPage,
} from '../../pages';
import Header from '../header';
import { connect } from 'react-redux';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { checkUserSession } from '../../redux/user/user.actions';

const App = ({ currentUser, checkUserSession }) => {

  // const unsubscribeFromAuth = null;

  useEffect(() => {
    checkUserSession()
    // return () => {
    //   unsubscribeFromAuth();
    // }
  }, [checkUserSession])

  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route path="/shop" component={ShopPage}/>
          <Route exact path="/checkout" component={CheckoutPage}/>
          <Route
            exact
            path='/signin'
            render={() =>
              currentUser ? (
                <Redirect to='/' />
              ) : (
                <AuthPage />
              )
            }
          />
        </Switch>
      </div>
    </Router>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

