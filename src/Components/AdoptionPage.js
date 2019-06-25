import React from 'react';
import { Link } from "react-router-dom";
import ApiService from "../../src/Services/api-services";
import Dog from "../Components/dog";
import Cat from '../Components/cat'
import '../App.css'

export default class AdoptionPage extends React.Component{
  state = {
    dogs: [{}],
    cats: [{}],
    dogQueuePosition: 0,
    catQueuePosition: 0,
    userQueuePosition: 0,
    adoptDog: false,
    adoptCat: false
  }

  componentDidMount(){
    Promise.all([ApiService.getCat(), ApiService.getDog()])
    .then(arr => this.setState({
      dogs: [arr[1]],
      cats: [arr[0]],
      userQueuePosition: Math.floor(Math.random() * 3)
    }))
  }

  nextDogButton = () => {
    if (parseInt(this.state.dogQueuePosition) === 5) {
      this.setState({ 
        dogQueuePosition: 0,
        userQueuePosition: Math.floor(Math.random() * 3)
      })
    } 
    else if (this.state.dogs[this.state.dogQueuePosition + 1]) {
      this.setState({
          dogQueuePosition: this.state.dogQueuePosition + 1,
          
      });
    } else {
      return ApiService.deleteDog().then(e => {
        ApiService.getDog().then(dog => {
          const newArr = [...this.state.dogs];
          newArr.push(dog);
          this.setState({
            dogs: newArr,
            dogQueuePosition: this.state.dogQueuePosition + 1
            });
        });
      });
    }
  }

  nextCatButton = () => {
    if (parseInt(this.state.catQueuePosition) === 5) {
      this.setState({ 
        catQueuePosition: 0,
        userQueuePosition: Math.floor(Math.random() * 3)
      })
    } 
    else if (this.state.cats[this.state.catQueuePosition + 1]) {
      this.setState({
        catQueuePosition: this.state.catQueuePosition + 1,
      });}
    else {
      return ApiService.deleteCat().then(e => {
        ApiService.getCat().then(cat => {
          const newArr = [...this.state.cats];
          newArr.push(cat);
          this.setState({
            cats: newArr,
            catQueuePosition: this.state.catQueuePosition + 1
          });
        });
      });
    }
  }

  previousDog = () => {
    this.setState({
      dogQueuePosition: this.state.dogQueuePosition - 1
    });
  }

  previousCat = () => {
    this.setState({
      catQueuePosition: this.state.catQueuePosition - 1
    });
  }

  adoptDog = () => {
    this.setState({
      adoptDog: true
    });

    setTimeout(() => {
      ApiService.deleteDog().then(e => {
        ApiService.getDog().then(dog => {
          const newArr = [...this.state.dogs];
          newArr.push(dog);
          this.setState({
            dogs: newArr,
            dogQueuePosition: this.state.dogQueuePosition + 1,
            adoptDog: false
            });
        });
      });
    }, 2000);
  }

  adoptCat = () => {
    this.setState({
      adoptCat: true
    })

    setTimeout(() => {
      ApiService.deleteCat().then(e => {
        ApiService.getCat().then(cat => {
          const newArr = [...this.state.cats];
          newArr.push(cat);
          this.setState({
            cats: newArr,
            catQueuePosition: this.state.catQueuePosition + 1,
            adoptCat: false
            });
        });
      });
    }, 2000);
  }

  render(){
    const cats = this.state.cats;
    const dogs = this.state.dogs;
    let catStatus, dogStatus;

    if (this.state.adoptCat && this.state.catQueuePosition === 0) {
        catStatus = 'You are in the process of adopting this pet';
    } 
    else if (this.state.catQueuePosition === 0 & this.state.userQueuePosition === 0) {
        catStatus = 'Available for Adoption'
    } 
    else if (this.state.catQueuePosition === 0) {
        catStatus = `1st in line for adoption, being considered by ${this.state.userQueuePosition}  ahead of you.`;
    } 
    else {
        catStatus = 'Waiting in line for adoption';
    }
  


    if (this.state.adoptDog && this.state.dogQueuePosition === 0) {
        dogStatus = 'You are in the process of adopting this pet'
    } else if (this.state.dogQueuePosition === 0 & this.state.userQueuePosition === 0) {
        dogStatus = 'Available for Adoption'
    } else if (this.state.dogQueuePosition === 0) {
        dogStatus = `1st in line for adoption, being considered by ${this.state.userQueuePosition} ahead of you.`;
    } else {
        dogStatus = 'Waiting in line for adoption';
    }

  return(
    <section className="adoption-page">
      <h1 className="adoption-page-h1">Adoption Page</h1>
      <div className="pet-info">
        <Cat pet={cats[this.state.catQueuePosition]} status={catStatus} position={this.state.catQueuePosition} next={this.nextCatButton} prev={this.previousCat} adopt={this.adoptCat}/>
        <Dog pet={dogs[this.state.dogQueuePosition]} status={dogStatus} position={this.state.dogQueuePosition} next={this.nextDogButton} prev={this.previousDog} adopt={this.adoptDog}/>
      </div>
      <Link to={'/'} className="back-home">Back To Home</Link>
    </section>
  )
  }
}