import React from 'react';
import { Link } from 'react-router-dom';
import Cat from './cat';
import Dog from './dog';
import ApiService from '../Services/api-services';

class AdoptionPage extends React.Component {
  state = {
    dogs: {},
    cats: {},
    adoptedDog: false,
    adoptedCat: false,
    dogQueuePosition: 0,
    catQueuePosition: 0
  }

  componentDidMount(){
    ApiService.getDog()
    .then(response => {
      this.setState({ dogs: response} );
    })

    ApiService.getCat()
    .then(response => {
      this.setState({ cats: response} );
    })
  }

  handleAdoption = () => {
    if (this.state.dogQueuePosition > 0) {
      ApiService.deleteDog()
        .then(response => {
          this.setState({ dogs: response })
        })
    }

    if (this.state.catQueuePosition > 0) {
      ApiService.deleteCat()
        .then(response => {
          this.setState({ cats: response })
        })
    }
  }
    
  render() {
    return(
      <div className="adoption-page">
        <nav role="navigation">
          <Link to="/">Home</Link>
        </nav>
        <h1>Adopt Me!</h1>
        <div className="pet-info">  
          <Dog dogs = {this.state.dogs} adoptedDog={this.state.adoptedDog} dogQueue={this.state.dogQueuePosition} handleAdoption={this.handleAdoption}/>
          <Cat cats = {this.state.cats} adoptedCat={this.state.adoptedCat} catQueue={this.state.catQueuePosition} handleAdoption={this.handleAdoption}/>
        </div>
      </div>
    )
  }
}

export default AdoptionPage;