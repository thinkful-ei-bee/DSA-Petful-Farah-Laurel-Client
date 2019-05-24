import React from 'react';

class Dog extends React.Component {
  render() {
    const dogs = (!this.props.dogs.first) ? {} : this.props.dogs.first;
    const dogInfo = (!dogs.value) ? {} : dogs.value;

    console.log(dogInfo.age);
 
    const dogList = 
    <div>
      <h3>{dogInfo.name}</h3>
      <img src={dogInfo.imageURL} alt={dogInfo.imageDescription}/>
      <p>{dogInfo.sex}</p>
      <p>{dogInfo.age}</p>
      <p>{dogInfo.breed}</p>
      <p>{dogInfo.story}</p>
    </div>

    return(
      <div className="dog">
          {dogList}
      </div>
    )
  }
}

export default Dog;