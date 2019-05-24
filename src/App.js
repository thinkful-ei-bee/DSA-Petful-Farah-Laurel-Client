import React from 'react';
import './App.css';
import { Route, withRouter } from 'react-router-dom';
import MainPage from './Components/MainPage.js';
import AdoptionPage from './Components/AdoptionPage.js';

class App extends React.Component {
  state = {
    results: [],
  }

  componentDidMount() {
    this.fetchApi('dog', 'dog');
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
      console.log(response)
      return response.json()
    })
    .then(response => {
      console.log(response)
      this.setState({ [statekey]: response} );
    })
  }

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
