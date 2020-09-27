import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { 
  HomePage, 
  ShopPage,
  AuthPage,
} from '../../pages';
import Header from '../header';
// import { HatsPage } from '../../pages/shop';
import { auth } from '../../firebase/firebase.utils';

const TopicsDetailPage = (props) => {
  console.log({ props });
  return (
    <div>
      <h1>Topic Detail Page: {props.match.params.topicId}</h1>
    </div>
  )
}


const TopicsListPage = () => {
  return (
    <div>
      <h1>Topic List Page</h1>
    </div>
  )
}

class App extends Component {

  state = {
    currentUser: null
  }

  componentDidMount() {
    auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user })
      console.log({ user });
    })
  }

  render() {
    return (
      <Router>
        <div className="app">
          <Header currentUser={this.state.currentUser} />
          <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route exact path="/shop" component={ShopPage}/>
            <Route exact path="/signin" component={AuthPage}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
