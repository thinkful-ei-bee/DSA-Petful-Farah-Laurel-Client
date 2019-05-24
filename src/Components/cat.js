import React from 'react';

class Cat extends React.Component {
  render() {
    const cats = (!this.props.cats.first) ? {} : this.props.cats.first;
    const catInfo = (!cats.value) ? {} : cats.value;

    console.log(catInfo.age);
 
    const catList = 
    <div>
      <h3>{catInfo.name}</h3>
      <img src={catInfo.imageURL} alt={catInfo.imageDescription}/>
      <p>Sex: {catInfo.sex}</p>
      <p>Age: {catInfo.age}</p>
      <p>Breed: {catInfo.breed}</p>
      <p>Story: {catInfo.story}</p>

      <button onClick={this.props.adoptButton}>Adopt {catInfo.name}!</button>
    </div>

    return(
      <div className="cat">
          {catList}
      </div>
    )
  }
}

export default Cat;