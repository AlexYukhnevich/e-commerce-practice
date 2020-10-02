import React, { useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import Header from '../header';
import Spinner from '../spinner/spinner'; 
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { checkUserSession } from '../../redux/user/user.actions';
import { GlobalStyle } from '../../global.styles';
import ErrorBoundary from '../error-boundary/error-boundary';

const HomePage = lazy(() => import('../../pages/home'))
const ShopPage = lazy(() => import('../../pages/shop'))
const AuthPage = lazy(() => import('../../pages/auth'))
const CheckoutPage = lazy(() => import('../../pages/checkout'))

const App = ({ currentUser, checkUserSession }) => {

  useEffect(() => {
    checkUserSession()
  }, [checkUserSession])

  return (
    <Router>
      <div className="app">
        <GlobalStyle />
        <Header />
        <Switch>
          <ErrorBoundary>
            <Suspense fallback={<Spinner />}>
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
            </Suspense>
          </ErrorBoundary>
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

