import React from 'react';

class Dog extends React.Component {
  render() {
    const dogs = (!this.props.dogs.first) ? {} : this.props.dogs.first;
    const dogInfo = (!dogs.value) ? {} : dogs.value;

    const dogList = 
    <div>
      <div className="dog-name">
        <h3>{dogInfo.name}</h3> 
        <button onClick={this.props.nextDog}> > </button>
      </div>
      <img src={dogInfo.imageURL} alt={dogInfo.imageDescription}/>
      <p>Sex: {dogInfo.sex}</p>
      <p>Age: {dogInfo.age} year</p>
      <p>Breed: {dogInfo.breed}</p>
      <p>Story: {dogInfo.story}</p>

      <button onClick={this.props.dogAdoptionLine}>Adopt!</button>
    </div>

  return(
    <div className="dog">
      {dogList}

      <div className="dog-queue">
          <p>Place in line: {this.props.dogQueue}</p>
      </div>
    </div>
  )
  }
}

export default Dog;