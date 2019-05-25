import React from 'react';
import './App.css';
import { Route, withRouter } from 'react-router-dom';
import MainPage from './Components/MainPage.js';
import AdoptionPage from './Components/AdoptionPage.js';

class App extends React.Component {
  render() {
    return (
    <div className="App">

      <Route exact path="/" component={MainPage}/>
      <Route path="/adoptions" component={AdoptionPage} />

    </div>
  );
  }
}

export default withRouter(App);
