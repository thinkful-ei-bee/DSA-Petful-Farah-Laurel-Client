import React from 'react';
import '../App.css'

export default class Dog extends React.Component{
  render (){
    
    const dogs = (!this.props.pet.first) ? {} : this.props.pet.first.value
      const available = this.props.status === 'Up for Adoption';
      return (
        <div className="dog">
          <div className="dogName">
            <button className="prev-button" disabled={this.props.position === 0} onClick={this.props.prev}> {'<'} </button>
            <p>{dogs.name}</p>
            <button className="next-button" onClick={this.props.next}>{'>'}</button>
          </div>

          <div className="img-container">
            <img src={dogs.imageURL} alt="pet for adoption" />
          </div>
          
          <div className="description-container">
            <p>Sex: {dogs.sex}</p>
            <p>Age: {dogs.age}</p>
            <p>Breed: {dogs.breed}</p>
            <p>Story: {dogs.story}</p>
            <p>Status: {this.props.status}</p>
            <span>
              <button className="adopt-btn" disabled={!available} onClick={this.props.adopt}>Adopt {dogs.name}</button>
            </span>
          </div>
        </div>  
      )
  }
}