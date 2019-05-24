import React from 'react';
import './App.css';
import { Route, withRouter } from 'react-router-dom';
import MainPage from './Components/MainPage.js';
import AdoptionPage from './Components/AdoptionPage.js';

class App extends React.Component {
  state = {
    dogs: {},
    cats: {},
    adopted: false,
  }

  componentDidMount() {
    this.fetchApi('dog', 'dogs');
    this.fetchApi('cat', 'cats');
  }

  fetchApi(endpoint, statekey, method = 'GET', apiBody) {
    fetch(`http://localhost:8000/api/${endpoint}`, {
      method: method,
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(apiBody)
    })
    .then(response => {
      return response.json()
    })
    .then(response => {
      this.setState({ [statekey]: response} );
    })
  }

// EVENT HANDLERS
  handleAdoptButton = () => {
    this.setState({ adopted: true })
  }

  render() {
    return (
    <div className="App">

      <Route exact path="/" component={MainPage}/>

      <Route path="/adoptions" render={() => (
        <AdoptionPage dogs={this.state.dogs} cats={this.state.cats} adopted={this.state.adopted}
                      adoptButton={this.handleAdoptButton}
        /> )} />

    </div>
  );
  }
}

export default withRouter(App);
