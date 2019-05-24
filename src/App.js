import React from 'react';
import './App.css';
import { Route, withRouter } from 'react-router-dom';
import MainPage from './Components/MainPage.js';
import AdoptionPage from './Components/AdoptionPage.js';

function App() {
 
  state = {
    results: [],
  }


  getDogs = () => {
    return fetch(`https://localhost:8080/api/dog`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      }
    })
    .then(res => {
      return res.json()
    })
    .then(data => {
      this.setState({
        results: data
      })
      console.log(this.state.results)
    })
    .catch(error => console.log('Error', error))
  };

  componentDidMount() {
    this.getDogs();
  }

  return (
    <div className="App">
        <Route exact path="/" component={MainPage}/>
        <Route path="/adoptions" component={AdoptionPage} />
    </div>
  );
}

export default withRouter(App);
