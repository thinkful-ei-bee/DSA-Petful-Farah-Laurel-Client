import React from 'react';
import '../App.css'

export default class Cat extends React.Component{
  render (){
    const cats = (!this.props.pet.first) ? {} : this.props.pet.first.value
    const available = this.props.status === 'Available for Adoption';
      return (
        <div className="dog">
          <div>
          
          <div className="catName">
            <button className="prev-button" disabled={this.props.position === 0} onClick={this.props.prev}>{'<'}</button>
            <p>{cats.name}</p>
            <button className="next-button" onClick={this.props.next}>{'>'}</button>
          </div>

          <div className="img-container">
            <img src={cats.imageURL} alt="pet for adoption" />
          </div>
          
          <div className="description-container">
            <p>Sex: {cats.sex}</p>
            <p>Age: {cats.age}</p>
            <p>Breed: {cats.breed}</p>
            <p>Story: {cats.story}</p>
            <p>Status: {this.props.status}</p>
            <span>
              <button className="adopt-btn" disabled={!available} onClick={this.props.adopt}>Adopt {cats.name}</button>
            </span>
          </div>
          </div>
        </div>  
      )
  }
}