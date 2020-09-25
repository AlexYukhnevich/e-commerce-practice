import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { HomePage, ShopPage } from '../../pages';
import Header from '../header';
// import { HatsPage } from '../../pages/shop';


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

  render() {
    return (
      <Router>
        <div className="app">
          <Header currentUser={this.state.currentUser} />
          <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route exact path="/shop" component={ShopPage}/>
            <Route exact path="/topics" component={TopicsListPage}/>
            <Route path="/topics/:topicId" component={TopicsDetailPage}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
