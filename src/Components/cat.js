import React from 'react';

class Cat extends React.Component {
  render() {
    const cats = (!this.props.cats.first) ? {} : this.props.cats.first;
    const catInfo = (!cats.value) ? {} : cats.value;

    const adoptButton = (!this.props.adopted) ? <button onClick={this.props.adoptButton}>Adopt {catInfo.name}!</button>
    : <button onClick={this.props.adoptButton}>{catInfo.name} has been adopted!</button>

    console.log(catInfo.age);
 
    const catList = 
    <div>
      <h3>{catInfo.name}</h3>
      <img src={catInfo.imageURL} alt={catInfo.imageDescription}/>
      <p>Sex: {catInfo.sex}</p>
      <p>Age: {catInfo.age} year</p>
      <p>Breed: {catInfo.breed}</p>
      <p>Story: {catInfo.story}</p>

      {adoptButton}
    </div>

    return(
      <div className="cat">
          {catList}
      </div>
    )
  }
}

export default Cat;