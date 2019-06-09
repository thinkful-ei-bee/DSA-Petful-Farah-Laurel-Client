import React from 'react';
import '../App.css'

export default class Cat extends React.Component{
  render (){
    const cats = (!this.props.pet.first) ? {} : this.props.pet.first.value
    const available = this.props.status === 'Available for Adoption';
      return (
        <section className="dog">
          
          <button className="prev-button" disabled={this.props.position === 0} onClick={this.props.prev}>{'<'}</button>
          <p>{cats.name}</p>
          <button className="next-button" onClick={this.props.next}>{'>'}</button>

          <img src={cats.imageURL} alt="pet for adoption" />
          
          <p>Sex: {cats.sex}</p>
          <p>Age: {cats.age}</p>
          <p>Breed: {cats.breed}</p>
          <p>Story: {cats.story}</p>
          <p>Status: {this.props.status}</p>
          <span>
            <button disabled={!available} onClick={this.props.adopt}>Adopt {cats.name}</button>
          </span>
        </section>  
      )
  }
}