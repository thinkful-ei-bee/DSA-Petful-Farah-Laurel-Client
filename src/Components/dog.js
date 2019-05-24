import React from 'react';

class Dog extends React.Component {
  render() {
    const dogs = (!this.props.dogs.first) ? {} : this.props.dogs.first;
    const dogInfo = (!dogs.value) ? {} : dogs.value;

    const adoptButton = (!this.props.adopted) ? <button onClick={this.props.adoptButton}>Adopt {dogInfo.name}!</button>
    :
    <button onClick={this.props.adoptButton}>{dogInfo.name} has been adopted!</button>

    console.log(dogInfo.age);
 
    const dogList = 
    <div>
      <h3>{dogInfo.name}</h3>
      <img src={dogInfo.imageURL} alt={dogInfo.imageDescription}/>
      <p>Sex: {dogInfo.sex}</p>
      <p>Age: {dogInfo.age} year</p>
      <p>Breed: {dogInfo.breed}</p>
      <p>Story: {dogInfo.story}</p>

      {adoptButton}
    </div>

    return(
      <div className="dog">
          {dogList}
      </div>
    )
  }
}

export default Dog;