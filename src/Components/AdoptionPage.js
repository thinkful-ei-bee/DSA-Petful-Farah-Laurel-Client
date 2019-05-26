import React from 'react';
import { Link } from 'react-router-dom';
import Cat from './cat';
import Dog from './dog';
import ApiService from '../Services/api-services';

class AdoptionPage extends React.Component {
  state = {
    dogs: [],
    cats: [],
    adoptedDog: false,
    adoptedCat: false,
    dogQueuePosition: 1,
    catQueuePosition: 1
  }

  componentDidMount(){
    ApiService.getDog()
    .then(response => {
      this.setState({ dogs: response} );
      console.log(response.first.next)
    })

    ApiService.getCat()
    .then(response => {
      this.setState({ cats: response} );
    }) }

  dogAdoptionLine = () => {
    this.setState({ 
      adoptedDog: true, 
      dogQueuePosition: this.state.dogQueuePosition + 1,
    })
    if (this.state.dogQueuePosition >= 1) {
      ApiService.deleteDog()
        .then(response => {
          ApiService.getDog()
            .then(res => {
              this.setState({ dogs: res })
            })
        })
      }}

  catAdoptionLine = () => {
    this.setState({ 
      adoptedCat: true, 
      catQueuePosition: this.state.catQueuePosition + 1,
    })  
    if (this.state.catQueuePosition >= 1) {
      ApiService.deleteCat()
        .then(response => {
          ApiService.getCat()
            .then(res => {
              this.setState({ cats: res })
            })
        })
      }}

  nextDogButton = () => {
    ApiService.getDog()
      .then(response => {
        this.setState({ dogs: response.first.next})
      })
  }
    
  render() {
    return(
      <div className="adoption-page">
        <nav role="navigation">
          <Link to="/">Home</Link>
        </nav>
        <h1>Adopt Me!</h1>
        <div className="pet-info">  
          <Dog dogs = {this.state.dogs} adoptedDog={this.state.adoptedDog} dogQueue={this.state.dogQueuePosition} dogAdoptionLine={this.dogAdoptionLine}
          nextDog={this.nextDogButton} />
          <Cat cats = {this.state.cats} adoptedCat={this.state.adoptedCat} catQueue={this.state.catQueuePosition} catAdoptionLine={this.catAdoptionLine}/>
        </div>
      </div>
    )
  }
}

export default AdoptionPage;