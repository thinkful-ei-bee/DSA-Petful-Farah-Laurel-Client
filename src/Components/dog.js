import React from 'react';

class Dog extends React.Component {
  render() {
    const dogs = this.props.dogs;
    const dogInfo = dogs.map((dog, i) => 
      <div key={i}>
        <img src={dog.imageURL} alt={dog.imageDescription}/>
        <h3>More about: {dog.name}</h3>
        <p>Sex: {dog.sex}</p>
        <p>Age: {dog.age}</p>
        <p>Breed: {dog.breed}</p>
        <p>Story: {dog.story}</p>
      </div>
      )

    console.log('dogs:', this.props.dogs)
    return(
      <div className="dog">
          <h1>I love dogs!</h1>
          {dogInfo}
      </div>
    )
  }
}

export default Dog;